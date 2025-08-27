import { v4 as uuidv4 } from 'uuid';
const users = [];

// Simular creación de usuario
const UserModel = {
  crearUsuario: async ({ name, email, password }) => {
    const nuevoUsuario = { id: uuidv4(), name, email, password };
    users.push(nuevoUsuario);
    return nuevoUsuario;
  }
};

export { UserModel };