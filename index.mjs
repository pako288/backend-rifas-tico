
import express from "express";
import "dotenv/config";
import { check } from "express-validator";
import  mongoose,{ model, Schema,  } from "mongoose";
import cors from "cors";
import crypto from "crypto";
import { validarCampos } from "./middlewares/validar-campos.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 4005;

const app = express();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CNN, {});

    console.log(`DB Online`);
  } catch (error) {
    console.log(error);
  }
};

dbConnection();
console.log(`DB Online`);
app.use(express.json());
app.use(cors());


app.use(express.static("public"));

// const corsOptions = {
//   origin: "tests-production-151a.up.railway.app/", // Cambia esto por tu dominio
//   methods: "GET,POST,PUT,DELETE,OPTIONS",
//   allowedHeaders: "Content-Type,Authorization",
// };

// app.use(cors(corsOptions));

const Usuarios = Schema({
  name: {
    type: String,
    required: true,
    // minlength: 3,
    // maxlength: 30,
  },
  phone: {
    type: String,
    required: true,
    // minlength: 10,
  },
  amount: {
    type: String,
    required: true,
    // min: 0,
    // max: 1000,
  },
  tickets: {
    type: Array,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
});
const Users = model("Users", Usuarios);

//* GENERANDO TICKETS DESDE LA BASE DE DATOS
const itemSchema = Schema({
  id: { type: String, required: true, unique: true },
  value: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true },
});

const Item = model("Item", itemSchema);

const numerosInitialValue = 10000;

// Endpoint para generar y guardar los elementos
app.get("/items", async (req, res) => {
  try {
    console.log(`Entro en el try`);

    const existingItems = await Item.find();

    if (existingItems.length > 0) {
      return res.status(200).json(existingItems);
    }

    const generateItems = () => {
      const newItems = [];
      for (let i = 1; i <= numerosInitialValue; i++) {
        newItems.push({
          id: crypto.randomUUID(),
          value: String(i).padStart(4, "0"),
          cantidad: 1,
          precio: 20,
        });
      }
      return newItems;
    };
    const numeross = generateItems();
    await Item.insertMany(numeross);
    res.status(200).json({
        message: `Server funcionando`,
        numeross
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al procesar la solicitud" });
  }
});

app.post(
  "/alo",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("phone", "El numero de telefono es obligatorio").not().isEmpty(),
    check("amount", "El monto es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  async (req, res) => {
    try {
      const { name, phone, amount, tickets, reference } = req.body; // Extrae 'selectedTicket' del cuerpo de la solicitud

      // 1. Crear el usuario
      const usuario = new Users({ name, phone, amount, tickets, reference });
      await usuario.save();

      const idsToDelete = tickets.map((ticket) => ticket.id); // Asumiendo que cada ticket tiene un campo 'id'
      await Item.deleteMany({ id: { $in: idsToDelete } }); // Eliminar los elementos de Item

      res.status(201).json({
        ok: true,
        message: "Usuario creado correctamente y tickets eliminados de Item",
      });

      console.log(`Usuario creado y tickets eliminados:`);
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      res.status(500).json({
        ok: false,
        message: "Hable con el administrador",
      });
    }
  }
);


//TODO! AQUI EMPIEZA LA LOGICA PARA LA RIFA FLASH
const UserFlash = Schema({
  name: {
    type: String,
    required: true,
    // minlength: 3,
    // maxlength: 30,
  },
  ci: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    // minlength: 10,
  },
  amount: {
    type: String,
    required: true,
    // min: 0,
    // max: 1000,
  },
  tickets: {
    type: Array,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
});
const Usersflash = model("Usersflash", UserFlash);

app.post("/flash/alo", async (req, res) => {
  try {
    const { name, ci, phone, amount, tickets, reference } = req.body;

    // Primero, buscar si el usuario existe
    let existingUser = await Usersflash.findOne({ ci });

    if (existingUser) {
      // Si el usuario existe, actualizar sus datos y agregar nuevos tickets
      existingUser.tickets.push(...tickets); // Agregar nuevos tickets al array existente
      existingUser.amount = String(Number(existingUser.amount) + Number(amount)); // Sumar el nuevo monto
      
      // Actualizar referencia si es necesario
      if (reference) {
        existingUser.reference = reference;
      }

      // Guardar los cambios
      await existingUser.save();

      // Eliminar los tickets seleccionados de la disponibilidad
      const idsToDelete = tickets.map((ticket) => ticket.id);
      await numeroFlash.deleteMany({ id: { $in: idsToDelete } });

      res.status(200).json({
        ok: true,
        message: "Tickets agregados al usuario existente",
        user: existingUser
      });
    } else {
      // Si el usuario no existe, crear uno nuevo
      const newUser = new Usersflash({
        name,
        ci,
        phone,
        amount,
        tickets,
        reference
      });

      await newUser.save();

      // Eliminar los tickets seleccionados de la disponibilidad
      const idsToDelete = tickets.map((ticket) => ticket.id);
      await numeroFlash.deleteMany({ id: { $in: idsToDelete } });

      res.status(201).json({
        ok: true,
        message: "Usuario creado correctamente",
        user: newUser
      });
    }

    console.log(`Operación completada exitosamente`);
  } catch (error) {
    console.error("Error en la operación:", error);
    res.status(500).json({
      ok: false,
      message: "Error en el servidor, contacte al administrador",
      error: error.message
    });
  }
});


//TODO! LOGICA PARA FLASH GENERAR TICKETS
const numerosFlash = Schema({
  id: { type: String, required: true, unique: true },
  value: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true },
});

const numeroFlash = model("numerosflash", numerosFlash);

const numeroFlashValue = 1000;

// Endpoint para generar y guardar los elementos
app.get("/flash/items", async (req, res) => {
  try {
    console.log(`Entro en el try`);

    const existingItems = await numeroFlash.find();

    if (existingItems.length > 0) {
      return res.status(200).json(existingItems);
    }

    const generateItems = () => {
      const newItems = [];
      for (let i = 0; i <= numeroFlashValue; i++) {
        newItems.push({
          id: crypto.randomUUID(),
          value: String(i).padStart(3, "0"),
          cantidad: 1,
          precio: 20,
        });
      }
      return newItems;
    };
    const numeross = generateItems();
    await numeroFlash.insertMany(numeross);
    res.status(200).json({
        message: `Server funcionando`,
        numeross
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al procesar la solicitud" });
  }
});

app.get("/flash/ticketselected", async (req, res) => {
  try {
    const users = await Usersflash.find(); // Obtiene todos los usuarios
    res.status(200).json(users); // Devuelve los usuarios en formato JSON
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
});

//TODO! AQUI TERMINA LA LOGICA DE LA RIFA FLASH




app.get("/api/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
});

app.get("/ticketselected", async (req, res) => {
  try {
    const users = await Users.find(); // Obtiene todos los usuarios
    res.status(200).json(users); // Devuelve los usuarios en formato JSON
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
});

//TODO! EMPIEZA LA LOGICA DE LA RIFA FLASH
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
