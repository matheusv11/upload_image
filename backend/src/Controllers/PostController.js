const connection= require('../database/connection');
const crypto= require('crypto');

module.exports={

    async index(req,res){
        const response= await connection('users').select('*');

        res.json(response);
    },
    async create(req,res){
        console.log(req.file);
        // try{
        //     const post= await connection('images').insert({
        //         name: req.file.originalname,
        //         size: req.file.size,
        //         key: req.file.filename,
        //         url: `http://localhost:3030/files/${req.file.filename}`
        //     })
        //    return res.json(`http://localhost:3030/files/${req.file.filename}`);
        // }  
        // catch{
        //     res.json('ocorreu um erro');
        // }
        const {name,email,password}= req.body
        const id= crypto.randomBytes(4).toString('hex');

        try{
            const post= await connection('users').insert({
                id,
                name,
                email,
                password,
                url: `http:localhost:3030/files/${req.file.filename}`
    
            });

            return res.json(`http://localhost:3030/files/${req.file.filename}`);
        }
        catch{
           return res.json('ocorreu um erro')
        }
       
        
    }
}
