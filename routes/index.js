import { Router } from 'express'; //import express
import { signup, opensession } from '../middleware/validation-middleware.js';
import * as controller from "../controllers/base-controller.js";

const router  = Router(); 

router.get("/", controller.index);
router.get("/get_echo", controller.echo)
router.get("/get_question", controller.get_question)

router.post("/post_echo", controller.echo)
router.post("/signup", signup, controller.signup)
router.post("/open_session", opensession, controller.open_session)
router.post("/chat", controller.chat)

export default router; // export to use in server.js