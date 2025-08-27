import { Router } from 'express';
import { verificarToken } from '../middleware/auth.js';
import { UserController } from '../controllers/user.js';


const userRouter = Router();


// Único endpoint protegido por middleware que valida x-access-token === "1234"
userRouter.post('/register', verificarToken, UserController.crearRegistro);


export default userRouter;