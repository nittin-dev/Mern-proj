import  express  from "express";
import { auth } from "../controllers/auth.controller.js";
const router = express.Router()

router.post('/SignUp',auth);

export default router;