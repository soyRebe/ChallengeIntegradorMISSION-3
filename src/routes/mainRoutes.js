const express = require('express');
const router = express.Router();


/* MAIN ROUTES */

/*app.get('/index.html', ( req, res )=>{  // se comenta para poder usar el metodo use y usar la carpeta public-
    res.sendFile(__dirname + "./index.html");
    });*/
    



/* MAIN ROUTES */

router.get('/home', ( req, res )=>{  res.send('pagina de home');});
router.get('/contact', ( req, res )=>{  res.send('pagina de contacto');});
router.get('/about', ( req, res )=>{  res.send('pagina de nosotros');});


module.exports = router;
    