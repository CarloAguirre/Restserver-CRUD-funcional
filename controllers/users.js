import {response} from 'express';

const getUsuario = (req, res = response) => {    // igualamos 'res' a 'response'para tener sus propiedades (render, json, etc..)

    const{nombre, apkey, page = 1} = req.query;  // los params del query viven en "req.query" (podemos definir valores por defecto)

    res.json({                                   // <--- en vez de '.send', podemos utilizar .json y enviar un objeto .json
        msg: 'get API',
        nombre,
        apkey,
        page
    })
};

const putUsuario = (req, res = response)=> { 
    
    const {id} = req.params;             // el 'id' dinamico de la ruta vive en los "req.params.id"
    
    res.status(500).json({                               
        msg: 'put API',
        id
    })
};

const postUsuario =  (req, res = response)=> { 
    
    const {nombre, edad}= req.body;      // lo que se envie como .json desde el body vive en "req.body"
    
    res.json({                                
        msg: 'post API',
        nombre,
        edad
    })
};

const patchUsuario=  (req, res = response)=> {    
    res.json({                                
        msg: 'patch API'
    })
}

const deleteUsuario =  (req, res = response)=> {    
    res.json({                                
        msg: 'delete API'
    })
};

export{
    getUsuario,
    putUsuario,
    postUsuario,
    patchUsuario,
    deleteUsuario
}