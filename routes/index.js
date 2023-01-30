const express = require('express'); //import express
const validationMiddleware = require('../middleware/validation-middleware')
const baseController = require("../controllers/base-controller")

const router  = express.Router(); 

const questionController = require('../controllers/base-controller'); 

router.get("/", baseController.index);
router.post("/signup", validationMiddleware.signup, baseController.signup)
router.post("/opensession", validationMiddleware.opensession, baseController.opensession)

module.exports = router; // export to use in server.js