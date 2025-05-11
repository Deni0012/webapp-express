const express = require('express');
const app = express();
const port = 3000;

//middlewares
const notFound = require('./middlewares/notFound');
const handleErrors = require('./middlewares/handleErrors');


//routers
const movieRouter = require('./router/movies');

app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Benvenuto nella mia WebApplication');
})

app.use('/movies', movieRouter);

//use 500
app.use(handleErrors);
//use 404
app.use(notFound);


app.listen(port, () => {
    console.log(`WebApp listening at port ${port}`);
})