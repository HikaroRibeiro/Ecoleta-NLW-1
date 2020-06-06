import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

import { celebrate, Joi } from 'celebrate';

const routes = express.Router();
const upload = multer(multerConfig);


const pointsController = new PointsController();
const itemsController = new ItemsController();


//Estes dois métodos abaixo é que estão valendo.
routes.get('/items',itemsController.index);

routes.post('/points', 
upload.single('image') ,
celebrate({
    body:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
    }) 
},{
    abortEarly:false
}), 
pointsController.create);

routes.get('/points/:id',pointsController.show);

routes.get('/points',pointsController.index);


//Os abaixo são apenas para exemplificar.
const users = ([
    {'nome':'Hikaro'},
    {'nome':'Maria Clara'},
    {'nome':'Bernardo'},
    {'nome':'Bisgudu'}
]);


routes.get('/users',(req,res)=>{
    const search = String(req.query.search);
    
    const filteredUsers = search ? users.filter(user => user.nome.includes(search)) : users;

    return res.send(filteredUsers);
});

routes.get('/users/:id',(req,res)=>{
    const id = Number(req.params.id);

    return res.json(users[id]);
        
});

routes.post('/users',(req,res)=>{
    var info = req.body;

    const user = {
        nome:info.nome,
        email:info.email  
    }

    return res.json(user);
});

routes.get('/users',(req,res)=>{
    res.json(users);
});

routes.get('/',(req,res)=>{
    res.send('Hello World');
});

export default routes;
