const connection= require('../database/connection');

module.exports={
    async create(req,res){
        console.log(req.file);
        
        const post= await connection('images').insert({
            name: req.file.originalname,
            size: req.file.size,
            key: req.file.filename,
            url: `http://localhost:3030/files/${req.file.filename}`
        })
        
        res.json(post);
    }
}
