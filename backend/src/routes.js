const routes= require('express').Router();
const multer= require('multer');
const multer_config= require('./configs/multer');
const PostController= require('./Controllers/PostController');

routes.post('/image',multer(multer_config).single('file'), PostController.create );


module.exports = routes;