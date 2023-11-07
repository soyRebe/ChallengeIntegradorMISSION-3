
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mainRoutes = require('./src/routes/mainRoutes');
const PORT = 3000;



app.use(express.static('public')); // use es un middleware 
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/', mainRoutes);


app.listen(PORT, ()=>{

    console.log('Servidor Express estoy conectado en el  puerto http://localhost:3000');
});


