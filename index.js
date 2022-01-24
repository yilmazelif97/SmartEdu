const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('Index Page')
})

const port =3000;

app.listen(port,()=>{
    console.log(`Server çalışıyor ${port}`)
})

//Status Code: serverdan dönen response un durumuyla ilgili bilgi verir. 404 not found, 200 ok gibi.