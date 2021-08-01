require('dotenv').config();
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = require('handlebars');

const app = express();

//Configuracion de Handlebars 
app.engine('hbs',exphbs({
    layoutsDir:path.join(app.get('views'),'layout'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs',
    defaultLayout:'index'
}));
app.set('view engine','hbs');
hbs.registerPartial('header','views/partials/header.hbs');

//Static files
app.use(express.static(path.join(__dirname,'public')));
//Rutas 
app.use(require('./routes/main.routes'));
//Servidor
app.listen(process.env.PORT, ()=>{
    console.log(`Corriendo en el puerto ${process.env.PORT}`);
});