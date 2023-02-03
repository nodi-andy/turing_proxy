import { Router } from 'express'; //import express
import { signup, opensession } from '../middleware/validation-middleware.js';
import * as user_controller from "../controllers/user_controller.js";
import * as openai_controller from "../controllers/openai_controller.js";

const router  = Router(); 

router.get("/echo", user_controller.echo)
router.post("/echo", user_controller.echo)

router.post("/signup", signup, user_controller.signup)
router.post("/open_session", opensession, user_controller.open_session)

router.get("/set_config", openai_controller.set_config)
router.get("/complete", openai_controller.complete)
router.get("/chat_clear", openai_controller.chat_clear)
router.get("/chat_history", openai_controller.chat_history)
router.get("/chat", openai_controller.chat)

export default router; // export to use in server.js