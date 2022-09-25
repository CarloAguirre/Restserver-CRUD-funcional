// esta funcionalidad de express nos permitira "enrutar"
import { Router } from "express";
import { deleteUsuario, getUsuario, patchUsuario, postUsuario, putUsuario } from "../controllers/users.js";
//creamos la const 'router' que reemplazara a 'app'
const router = Router()


router.get('/', getUsuario);  

router.put('/:id', putUsuario);     //<--- : nos permite crear un endpoint dinamico, el cual desestructuraremos en "controllers/users put"

router.post('/', postUsuario);

router.patch('/', patchUsuario);

router.delete('/', deleteUsuario);


export{
    router
}