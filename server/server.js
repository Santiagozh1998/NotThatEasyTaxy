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


//Registros-Signup
app.post('/signup/driver', db.existeConductor);

app.post('/signup/user', db.existeCliente);


//Salir de la aplicacion-logout
app.post('/logout', (req, res) => {

    res.clearCookie('idUser');
    res.clearCookie('isLogged');
    res.clearCookie('typeUser');

    res.json({status: 'User is not logged'});
})

//SIGNIN
app.get('/signin/user', (req, res) => {

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

app.post('/signin/user', db.validacionCliente);


app.get('/signin/driver', (req, res) => {

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

app.post('/maps/user/addfavorite', db.existeFavoritos)

app.post('/maps/user/getfavorite', db.obtenerFavoritos)

app.get('/maps/driver', (req,res) => {

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
                typeUser: 'User'})
        }

        
    }
    else{

        res.json({
            status: 'User is not logged',
            typeUser: 'Unknow'});
    }
    
})

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

//STARTING SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})

