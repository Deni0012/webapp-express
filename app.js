const express = require('express');
const app = express();
const port = 3000;

//middlewares
const notFound = require('./middlewares/notFound');
const handleErrors = require('./middlewares/handleErrors');


app.get('/', (req, res) => {
    res.send('Benvenuto nella mia WebApplication');
})

//use 500
app.use(handleErrors);
//use 404
app.use(notFound);


app.listen(port, () => {
    console.log(`WebApp listening at port ${port}`);
})