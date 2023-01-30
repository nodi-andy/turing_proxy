import { Router } from 'express'; //import express
import { signup, opensession } from '../middleware/validation-middleware.js';
import { index, signup as _signup, opensession as _opensession } from "../controllers/base-controller.js";

const router  = Router(); 

router.get("/", index);
router.post("/signup", signup, _signup)
router.get("/get_question", _opensession)
router.post("/opensession", opensession, _opensession)

export default router; // export to use in server.js