import React, { useState } from 'react';
import api from './services/api'

function App() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const [image,setImage]= useState('');
  const [src,setSrc]= useState('');

  const register= async()=>{
   const formData= new FormData();
   formData.append('file', image);
   formData.append('name', name)
   formData.append('email', email)
   formData.append('password', password)
   console.log(formData);

    try{
      
      const data={name,email,password}
      const response= await api.post(`image`,formData,{
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })  
      setSrc(response.data);
      alert('cadastrado')
    }
    catch{
      alert('erro');
    }
    //alert(`${name}-${email}-${password}-${image}`);
  }
  return (
    <div>
      <br/>
      Nome:
      <input onChange={e=> setName(e.target.value)} type="text" ></input>
      <br/>
      Email:

      <input  onChange={e=> setEmail(e.target.value)}  type="text" ></input>
      <br/>
      Senha:

      <input  onChange={e=> setPassword(e.target.value)}  type="text" ></input>
      <br/>
      Imagem
      <input type="file" onChange={e=> setImage(e.target.files[0])}></input>
      <br/>
      <button onClick={register}>Registrar</button>
    
      <img alt='' src={src} style={{ width: '50%', height: '50%' }}></img>
      {/* multiple= "false" name="file" encType="multipart/form-data"  type="file"  */}
      {/* onChange={e=> setImage(e.target.value)} */}
      
    </div>
  );
}

export default App;
