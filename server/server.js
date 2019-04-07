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
app.get('/usuarios', function (req, res) {
	connect(function(err, client, done) {
  		if(err) {
    			return console.error('error fetching client from pool', err);
        	}
  		//use the client for executing the query
		console.log('SELECT * FROM cliente WHERE celular =\''+req.query.id+'AND contraseña =\''+req.query.contraseña+'\'');
  		client.query('SELECT * FROM cliente WHERE identificacion =\''+req.query.id+'AND contraseña =\''+req.query.contraseña+'\'', function(err, result) {
    		//call `done(err)` to release the client back to the pool (or destroy it if there is an error)
    		done(err);

    		if(err) {
      			return console.error('error running query', err);
    		}
    		res.send(JSON.stringify(result.rows));
    		//output: 1
  		});
	});

})

app.get('/consulta', function (req, res) {
    connect(function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }

        //use the client for executing the query
        client.query(req.query.query, function(err, result) {
            //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
            done(err);

            if(err) {
                return console.error('error running query', err);
            }
            res.send(JSON.stringify(result.rows));
            //output: 1
        });
    });

})

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

//SIGNIN
app.get('/signin', (req, res) => {

    var cookies = req.signedCookies;

    if(cookies.isLogged === 'User is logged'){

        res.json({status: 'User is logged'})
    }
    else{

        res.json({status: 'User is not logged'});
    }
    
});

app.post('/signin', (req, res) => {

    res.cookie('idUser', 1, {
        httpOnly: true,
        signed: true
    });

    res.cookie('isLogged', 'User is logged', {
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

//STARTING SERVER
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})
