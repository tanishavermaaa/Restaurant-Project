const express = require('express');
const { testUserController } = require("../controllers/testController");
const { registerController } = require("../controllers/authControllers");
const { deleteProfileController } = require('../controllers/userController');

//router obj
const router = express.Router();

//routes GET | POST | UPDATE | DELETE
router.get('/test-user', testUserController);

// POST register
router.post('/register', registerController);


//export
module.exports = router;