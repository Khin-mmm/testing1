const express = require('express');
const router = express.Router();

const jwtMiddleware = require('../middlewares/jwtMiddleware')
const controller = require('../controllers/usersController'); 

// read user by id 
router.get('/:user_id', jwtMiddleware.verifyToken, controller.readUserById)

module.exports = router;

