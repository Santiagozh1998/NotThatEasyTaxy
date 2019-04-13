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

                res.json({
                    status: 'User is logged',
                    typeUser: 'User'});
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

const obtenerCliente = (req, res) => {

    const {Cellphone} = req.body;

    pool.query('SELECT * FROM cliente WHERE celular = $1', [Cellphone], (error, results) => {
        if(error){
            throw error
        }

        pool.query('SELECT fecha_carrera, valor, nombre, apellido, nrokm, calificacion FROM conductor INNER JOIN carrera ON celular = celularconductor AND celularcliente = $1',
            [Cellphone], (error, rides) => {
                if(error){
                    throw error
                }

                if(rides.rows.length === 0){

                    res.json({
                        profile: {
                            nombre: results.rows[0].nombre,
                            apellido: results.rows[0].apellido,
                            direccion: results.rows[0].direccion,
                            password: results.rows[0].passwordcliente,
                            nrotarjeta: results.rows[0].nrotarjeta
                        },
                        rides: []
                    });
                }
                else{

                    res.json({
                        profile: {
                            nombre: results.rows[0].nombre,
                            apellido: results.rows[0].apellido,
                            direccion: results.rows[0].direccion,
                            password: results.rows[0].passwordcliente,
                            nrotarjeta: results.rows[0].nrotarjeta
                        },
                        rides: rides.rows
                    });
                }


            })

    });
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

const eliminarFavorito = (req, res) => {

    const {Cellphone, lat, lng} = req.body;
    
    console.log(Cellphone, lat, lng)
	pool.query('DELETE FROM favoritos WHERE celular = $1 AND lat = $2 AND lng = $3', [Cellphone, lat, lng],(error, results) => { 
        if (error) {
            throw error
        }

        res.json({status: "Favorite delete"})
	})
}

//Eliminar un favorito
const eliminarFavoritos = (req, res) => {

    const {Cellphone} = req.body;

    pool.query('DELETE FROM favoritos WHERE celular = $1', [Cellphone],(error, results) => {
        if (error) {
        throw error
        }
    })

}


//Eliminar un cliente
const eliminarCliente = (req, res) => {

    const {Cellphone, Password} = req.body;

    pool.query('SELECT * FROM cliente WHERE celular = $1 AND passwordcliente = $2', [Cellphone, Password], (error, results) => {

        if(results.rows != 0){

            pool.query('DELETE FROM cliente WHERE celular = $1 AND passwordcliente = $2', [Cellphone, Password], (error, results) => {
                if (error) {
                throw error
                }
                
                eliminarFavoritos(req)

                res.clearCookie('idUser');
                res.clearCookie('isLogged');
                res.clearCookie('typeUser');

                res.json({status: 'User is not logged'});
            })
        }
        else {

            res.json({status: 'Incorect password'});
        }
    })

	
}


//Eliminar un conductor
const eliminarConductor = (req, res) => {

    const {Cellphone, Password} = req.body;

	pool.query('SELECT * FROM conductor WHERE celular = $1 AND passwordconductor = $2', [Cellphone, Password], (error, results) => {

        if(results.rows != 0){

            pool.query('DELETE FROM conductor WHERE celular = $1 AND passwordconductor = $2', [Cellphone, Password], (error, results) => {
                if (error) {
                throw error
                }
                
                res.clearCookie('idUser');
                res.clearCookie('isLogged');
                res.clearCookie('typeUser');

                res.json({status: 'User is not logged'});
            })
        }
        else {

            res.json({status: 'Incorect password'});
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
        Cellphone, Name, Lastname, Day, Month, Year, Address, Password, Documenttype, Nrodocument
    } = req.body;

    pool.query('INSERT INTO conductor VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NULL, NULL)', [Cellphone, Name, Lastname, Year  + "-" + Month  + "-" + Day, Address, Password, Documenttype, Nrodocument], (error, results) => {
        if(error){
            throw error
        }
    })


}

const existeConductor = (req, res) => {

    const {Cellphone, Placa, Modelo, Baul, CarYear, Soat, Marca} = req.body;
    
	pool.query('SELECT * FROM conductor WHERE celular = $1', [Cellphone],(error, results) => {
			if (error) {
			throw error
            }

            if(results.rows.length === 0){

                pool.query('SELECT * FROM taxi WHERE placa = $1', [Placa], (error, taxi) => {
                    if (error) {
                        throw error
                    }
            
                    if(taxi.rows.length === 0){
            
                        pool.query('INSERT INTO taxi VALUES ($1, $2, $3, $4, $5, $6)', [Placa, Modelo, Baul, CarYear, Soat, Marca], (error, results) => {
                            if(error){
                                throw error
                            }
                        })
            
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
                        res.json({status: "Placa en uso"});
                    }
                })
                
                
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


const obtenerConductor = (req, res) => {

    const {Cellphone} = req.body;

    pool.query('SELECT * FROM conductor WHERE celular = $1', [Cellphone], (error, results) => {
        if(error){
            throw error
        }

        pool.query('SELECT fecha_carrera, valor, nombre, apellido, nrokm, calificacion FROM cliente INNER JOIN carrera ON celular = celularcliente AND celularconductor = $1',
            [Cellphone], (error, rides) => {
                if(error){
                    throw error
                }


                if(rides.rows.length === 0){

                    res.json({
                        profile: {
                            nombre: results.rows[0].nombre,
                            apellido: results.rows[0].apellido,
                            nacimiento: results.rows[0].nacimiento,
                            direccion: results.rows[0].direccion,
                            password: results.rows[0].passwordcliente,
                            tipodocumento: results.rows[0].tipodocumento, 
                            nrodocumento: results.rows[0].nrodocumento
                        },
                        rides: []
                    });
                }
                else{

                    res.json({
                        profile: {
                            nombre: results.rows[0].nombre,
                            apellido: results.rows[0].apellido,
                            nacimiento: results.rows[0].nacimiento,
                            direccion: results.rows[0].direccion,
                            password: results.rows[0].passwordcliente,
                            tipodocumento: results.rows[0].tipodocumento, 
                            nrodocumento: results.rows[0].nrodocumento
                        },
                        rides: rides.rows
                    });
                }


            })

    });
}

module.exports = {
    insertarCliente,
    existeCliente,
    validacionCliente,
    validacionConductor,
    agregarFavoritos,
    existeFavoritos,
    existeConductor,
    obtenerFavoritos,
    eliminarFavorito,
    eliminarCliente,
    eliminarConductor,
    obtenerCliente,
    obtenerConductor
}