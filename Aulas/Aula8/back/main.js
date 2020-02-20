// Pizzaria
const express = require('express');
const app = express();
const router = require('./routers/staticRoutes')
const pizza = require('./routers/pizzaria')

let port = process.env.PORT || 3000;
app.use('/pizza', pizza);
app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
