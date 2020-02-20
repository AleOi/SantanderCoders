const express = require('express');
const { home, sobre, pizza} = require('../controllers/staticRoutes')

// criando Router
const router = express.Router();

// const static Routers
router.get('/', (req, res) =>{
    return res.send('Acessou página raíz')
})

// Routes
router.get('/sobre', sobre)


module.exports = router;