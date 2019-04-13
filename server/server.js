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

//Eliminar cliente
app.post('/user/delete', db.eliminarCliente);

//Eliminar conductor
app.post('/driver/delete', db.eliminarConductor);

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

//STARTING SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})

