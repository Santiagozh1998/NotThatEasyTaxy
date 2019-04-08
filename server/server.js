const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();

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

    console.log(cookies.typeUser)

    if(cookies.typeUser === 'Driver'){

        res.json({typeUser: 'Driver'})
    }
    else{

        res.json({typeUser: 'User'});
    }

});

app.get('/main', (req, res) => {

    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){

        res.json({status: 'User is logged'})
    }
    else{

        res.json({status: 'User is not logged'});
    }
});

app.get('/signup', (req, res) => {

    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){

        res.json({status: 'User is logged'})
    }
    else{

        res.json({status: 'User is not logged'});
    }
});


app.post('/logout', (req, res) => {

    res.clearCookie('idUser');
    res.clearCookie('isLogged');

    res.json({status: 'User is not logged'});
})

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

    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){

        res.json({status: 'User is logged'})
    }
    else{

        res.json({status: 'User is not logged'});
    }
    
});

app.post('/signin/driver', (req, res) => {

    res.cookie('idUser', 1, {
        httpOnly: true,
        signed: true
    });

    res.cookie('isLogged', 'User is logged', {
        httpOnly: true,
        signed: true
    });

    res.cookie('typeUser', 'Driver', {
        httpOnly: true,
        signed: true
    });

    res.json({status: 'User is logged'});

    
});

//MAPS
app.get('/maps', (req,res) => {

    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){
        
        res.json({status: 'User is logged'})
    }
    else{

        res.json({status: 'User is not logged'});
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

