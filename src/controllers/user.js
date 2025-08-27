import { UserModel } from '../models/user.js'; 

export class UserController {
  static async crearRegistro(req, res) {
    const { name, email, password } = req.body;

    // Validar datos
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Faltan datos' });
    }

    // Llamar al model
    const nuevoUsuario = await UserModel.crearUsuario({ name, email, password });

    // Responder con el nuevo usuario
    res.status(201).json(nuevoUsuario);
  }
}