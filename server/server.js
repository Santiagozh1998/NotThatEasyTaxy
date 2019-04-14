const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const db = require('./database')

var isLogged = false;

//SETTINGS
app.set('port', process.env.PORT || 5000);


//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cookieParser('secret'));

//ROUTES
app.get('/navbar', (req, res) => {
<<<<<<< HEAD
=======

    var cookies = req.signedCookies;

    console.log(cookies.typeUser)

    if(cookies.typeUser === 'Driver'){

        res.json({typeUser: 'Driver'})
    }
    else{

        res.json({typeUser: 'User'});
    }

});

app.get('/main', (req, res) => {
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533

    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){

        if(cookies.typeUser === "User"){
            
            res.json({
                status: 'User is logged',
                typeUser: 'User'});
        }
        else{

            res.json({
                status: 'User is logged',
                typeUser: 'Driver'});
        }

    }
    else{

        res.json({
            status: 'User is not logged',
            typeUser: 'Unknow'});
    }

});

app.get('/main', (req, res) => {

    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){

        if(cookies.typeUser === "User"){
            
            res.json({
                status: 'User is logged',
                typeUser: 'User'});
        }
        else{

            res.json({
                status: 'User is logged',
                typeUser: 'Driver'});
        }

    }
    else{

        res.json({
            status: 'User is not logged',
            typeUser: 'Unknow'});
    }

});


<<<<<<< HEAD
//Registros-Signup
app.post('/signup/driver', db.existeConductor);

app.post('/signup/user', db.existeCliente);


//Salir de la aplicacion-logout
=======
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533
app.post('/logout', (req, res) => {

    res.clearCookie('idUser');
    res.clearCookie('isLogged');
<<<<<<< HEAD
    res.clearCookie('typeUser');
=======
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533

    res.json({status: 'User is not logged'});
})

<<<<<<< HEAD
//Eliminar cliente
app.post('/user/delete', db.eliminarCliente);

//Eliminar conductor
app.post('/driver/delete', db.eliminarConductor);

//SIGNIN
app.get('/signin/user', (req, res) => {
=======
//SIGNIN
app.get('/signin/user', (req, res) => {

    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){

        res.json({status: 'User is logged'})
    }
    else{

        res.json({status: 'User is not logged'});
    }
    
});

app.post('/signin/user', (req, res) => {

    res.cookie('idUser', 1, {
        httpOnly: true,
        signed: true
    });

    res.cookie('isLogged', 'User is logged', {
        httpOnly: true,
        signed: true
    });

    res.cookie('typeUser', 'User', {
        httpOnly: true,
        signed: true
    });

    res.json({status: 'User is logged'});

    
});

app.get('/signin/driver', (req, res) => {
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533

    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){

        if(cookies.typeUser === "User"){
            
            res.json({
                status: 'User is logged',
                typeUser: 'User'});
        }
        else{

            res.json({
                status: 'User is logged',
                typeUser: 'Driver'});
        }

    }
    else{

        res.json({
            status: 'User is not logged',
            typeUser: 'Unknow'});
    }
    
});

<<<<<<< HEAD
app.post('/signin/user', db.validacionCliente);
=======
app.post('/signin/driver', (req, res) => {
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533


app.get('/signin/driver', (req, res) => {

<<<<<<< HEAD
    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){

        if(cookies.typeUser === "User"){
            
            res.json({
                status: 'User is logged',
                typeUser: 'User'});
        }
        else{
=======
    res.cookie('typeUser', 'Driver', {
        httpOnly: true,
        signed: true
    });

    res.json({status: 'User is logged'});
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533

            res.json({
                status: 'User is logged',
                typeUser: 'Driver'});
        }

    }
    else{

        res.json({
            status: 'User is not logged',
            typeUser: 'Unknow'});
    }
    
});

app.post('/signin/driver', db.validacionConductor);



//MAPS
app.get('/maps/user', (req,res) => {

    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){

        if(cookies.typeUser === 'Driver'){
            res.json({
                status: 'User is logged',
                typeUser: 'Driver'})
        }
        else{
            res.json({
                status: 'User is logged',
                typeUser: 'User',
                Cellphone: cookies.idUser})
        }

        
    }
    else{

        res.json({
            status: 'User is not logged',
            typeUser: 'Unknow'});
    }
    
})

<<<<<<< HEAD
app.post('/maps/user/addfavorite', db.existeFavoritos)

app.post('/maps/user/getfavorite', db.obtenerFavoritos)

app.post('/maps/user/deletefavorite', db.eliminarFavorito)

app.get('/maps/driver', (req,res) => {

    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){

        if(cookies.typeUser === 'Driver'){
            res.json({
                status: 'User is logged',
                typeUser: 'Driver',
                Cellphone: cookies.idUser})
        }
        else{
            res.json({
                status: 'User is logged',
                typeUser: 'User'})
        }

        
    }
    else{

        res.json({
            status: 'User is not logged',
            typeUser: 'Unknow'});
    }
    
})

app.post('/user/informacion', db.obtenerCliente)


app.post('/driver/informacion', db.obtenerConductor)
=======

app.get('/user/informacion', (req, res) => {

    res.json({
        profile:{
            celular: '3192162287',
            nombre: 'Santiago',
            apellido: 'Zuluaga Hernandez',
            direccion: 'Calle 13c #56-38',
            password: 'holamundo',
            nrotarjeta: '6564649646464'
        },
        rides: [{
            Fecha: '12-09-2018',
            id: 1,
            Conductor: "Miguel",
            Kilometros: "8 Km",
            Valor: 8000,
            Calificacion: 4
        },
        {
            Fecha: '12-09-2018',
            id: 2,
            Conductor: "Miguel",
            Kilometros: "8 Km",
            Valor: 8000,
            Calificacion: 5
        },
        {
            Fecha: '12-09-2018',
            id: 3,
            Conductor: "Miguel",
            Kilometros: "8 Km",
            Valor: 8000,
            Calificacion: 2
        },
        {
            Fecha: '12-09-2018',
            id: 4,
            Conductor: "Miguel",
            Kilometros: "8 Km",
            Valor: 8000,
            Calificacion: 5
        },
        {
            Fecha: '12-09-2018',
            id: 5,
            Conductor: "Miguel",
            Kilometros: "8 Km",
            Valor: 8000,
            Calificacion: 5
        },
        {
            Fecha: '12-09-2018',
            id: 6,
            Conductor: "Miguel",
            Kilometros: "8 Km",
            Valor: 8000,
            Calificacion: 3
        },
        {
            Fecha: '12-09-2018',
            id: 7,
            Conductor: "Miguel",
            Kilometros: "8 Km",
            Valor: 8000,
            Calificacion: 5
        },
        {
            Fecha: '12-09-2018',
            id: 8,
            Conductor: "Miguel",
            Kilometros: "8 Km",
            Valor: 8000,
            Calificacion: 1
        }]
    })
    
})


app.get('/driver/informacion', (req, res) => {

    res.json({
        profile:{
            celular: '3192162287',
            nombre: 'Santiago',
            apellido: 'Zuluaga Hernandez',
            direccion: 'Calle 13c #56-38',
            password: 'holamundo',
            nacimiento: '12-19-1998',
            tipodocumento: 'C.C.',
            nrodocumento: 1144105479
        }
    })
})
>>>>>>> ca998e87ca3af7d5a8438aef055cff21708f3533

//STARTING SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})

