const express= require('express')
const routes= express.Router();
const multer= require('multer');
const multer_config= require('./configs/multer');

const PostController= require('./Controllers/PostController');

const path= require('path');

routes.use(`/files/`,express.static(path.resolve(__dirname, "tmp", "uploads")));

routes.get('/image', PostController.index );

routes.post('/image',multer(multer_config).single('file'), PostController.create );


module.exports = routes;