const Pool = require('pg').Pool

const pool = new Pool({
  user: 'santiago',
  host: 'localhost',
  database: 'NotThatEasyTaxy',
  password: 'santiago1998',
  port: 5432,
})

//Insertar datos en la tabla clientes
const insertarCliente = (req, res) => {

    const {Cellphone, Name, Lastname, Address, Password, Nrocard} = req.body;

	pool.query('INSERT INTO cliente VALUES ($1, $2, $3, $4, $5, $6, NULL, NULL)', [Cellphone, Name, Lastname, Address, Password, Nrocard], (error, results) => {
			if (error) {
			throw error
            }
            
	})
}

const existeCliente = (req, res) => {

    const {Cellphone} = req.body;
    
	pool.query('SELECT * FROM cliente WHERE celular = ($1) ', [Cellphone],(error, results) => {
			if (error) {
			throw error
            }

            if(results.rows.length === 0){
                insertarCliente(req)

                res.cookie('idUser', Cellphone, {
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
            }
            else {
                res.json({status: "Celular en uso"});
            }
	})
}

const validacionCliente = (req, res) => {

    const {Cellphone, Password} = req.body;

	pool.query('SELECT * FROM cliente WHERE celular = $1 AND passwordcliente = $2', [Cellphone, Password],(error, results) => {
			if (error) {
			throw error
			}
            
            if(results.rows.length === 0){
                res.json({status: "Datos invalidos"});
            }
            else {

                res.cookie('idUser', Cellphone, {
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

                res.json({
                    status: 'User is logged',
                    typeUser: 'User'})
            }
	})
}


const agregarFavoritos = (req, res) => {

    const {Cellphone, nombre, lat, lng} = req.body;

	pool.query('INSERT INTO favoritos VALUES ($1, $2, $3, $4)', [Cellphone, nombre, lat, lng], (error, results) => {
        if (error) {
            throw error
        }
	})
}

const obtenerFavoritos = (req, res) => {

    const {Cellphone} = req.body;

    pool.query('SELECT nombre, lat, lng FROM favoritos WHERE celular = $1', [Cellphone], (error, results) => {
        if (error) {
			throw error
        }

        
        if(results.rows.length === 0){

            res.json({
                favorites: []
            })
        }
        else {
            res.json({
                favorites: results.rows
            })

        }

        

    })
}

const existeFavoritos = (req, res) => {

    const {Cellphone, lat, lng} = req.body;

    console.log(Cellphone, lat, lng)


	pool.query('SELECT * FROM favoritos WHERE celular = $1 AND lat = $2 AND lng = $3', [Cellphone, lat, lng], (error, results) => {
			if (error) {
			throw error
            }
            
            if(results.rows.length === 0){

                agregarFavoritos(req)
            }
            else {
                console.log("Ya guardaste un favorito aca");
            }

	})
}



//Obtener los datos del conductor
const insertarConductor = (req, res) => {

    const {
        Cellphone, Name, Lastname, Day, Month, Year, Address, Password, Documenttype, Nrodocument, Placa, Modelo, Baul, CarYear, Soat, Marca
    } = req.body;

    pool.query('INSERT INTO conductor VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NULL, NULL)', [Cellphone, Name, Lastname, Year  + "-" + Month  + "-" + Day, Address, Password, Documenttype, Nrodocument], (error, results) => {
        if(error){
            throw error
        }
    })

    pool.query('INSERT INTO taxi VALUES ($1, $2, $3, $4, $5, $6)', [Placa, Modelo, Baul, CarYear, Soat, Marca], (error, results) => {
        if(error){
            throw error
        }
    })


}

const existeConductor = (req, res) => {

    const {Cellphone} = req.body;
    
	pool.query('SELECT * FROM conductor WHERE celular = $1', [Cellphone],(error, results) => {
			if (error) {
			throw error
            }

            if(results.rows.length === 0){
                insertarConductor(req)

                res.cookie('idUser', Cellphone, {
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
            }
            else {
                res.json({status: "Celular en uso"});
            }
	})
}

const validacionConductor = (req, res) => {

    const {Cellphone, Password} = req.body;

	pool.query('SELECT * FROM conductor WHERE celular = $1 AND passwordconductor = $2', [Cellphone, Password],(error, results) => {
			if (error) {
			throw error
            }

            if(results.rows.length === 0){
                res.json({status: "Datos invalidos"});
            }
            else {

                res.cookie('idUser', Cellphone, {
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

                res.json({
                    status: 'User is logged',
                    typeUser: 'Driver'})
            }
            
	})
}

module.exports = {
    insertarCliente,
    existeCliente,
    validacionCliente,
    validacionConductor,
    agregarFavoritos,
    existeFavoritos,
    existeConductor,
    obtenerFavoritos
}