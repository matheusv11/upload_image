const multer= require('multer');
const path= require('path');
const crypto= require('crypto');

module.exports={
    //dest: path.resolve(__dirname,  '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req,res,cb)=>{
            cb(null, path.resolve(__dirname,  '..', 'tmp', 'uploads'));
        },
        filename: (req,file,cb)=>{
            crypto.randomBytes(16, (err, hash)=>{
                if(err) cb(err);

                const fileName= `${hash.toString('hex')}-${file.originalname}`;//Pegar nome completo do arquvivo da pra extrair objetos como name e ext
                cb(null, fileName);
            })
        }
    }),
    limits:{
        fileSize: 2 * 1024 * 1024,
    },

    fileFilter: (req,file, cb)=>{
        const allowed=[
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif' 
        ];
    
        if(allowed.includes(file.mimetype)){
            cb(null,true);

        }else{
            cb(new Error('Invalid file type.'));
        }
    },
    
}