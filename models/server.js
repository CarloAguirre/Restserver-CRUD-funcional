import express from 'express'
import cors from 'cors';
import { router } from '../routes/users.js';


class Server{
    
    constructor(){
        //constantes
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Constructores //

        //middlewares
        this. middlewares();
        //rutas de la aplicacion
        this.routes();
    };
    
    // METODOS //
    
    middlewares(){
        this.app.use(cors());       // <--- ayuda a controlar el intercambio de recursos HTTP (evita errores cross domain acces)
        this.app.use(express.static('public'))

        //lectura y parseo del body
        this.app.use(express.json())

    };
    
    //rutas
    routes(){
        this.app.use(this.usuariosPath, router)
    };

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Listening on port ${this.port}`)
        })
    };

};

export{
    Server
}