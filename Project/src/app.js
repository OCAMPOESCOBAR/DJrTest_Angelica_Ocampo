const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// conexion a la bd
mongoose.connect('mongodb://localhost/tareas')
    .then(db => console.log('BD Conectada'))
    .catch(err => console.log(err));

// importando rutas
const indexRoutes = require('./routes/index');

// configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', indexRoutes);

// iniciar servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});