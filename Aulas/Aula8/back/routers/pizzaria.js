const express = require('express');
// criando Router
const router = express.Router();

const { listar, buscar }  = require('../controllers/pizzaria')
// const static Routers
router.get('/', listar)
router.get('/:buscar', buscar)

module.exports = router;