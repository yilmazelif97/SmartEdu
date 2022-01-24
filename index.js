const express = require('express')

const app = express();

app.set("view engine","ejs");

//MW
app.use(express.static("public"))



//route
app.get('/',)

app.get('/about',)

const port =3000;

app.listen(port,()=>{
    console.log(`Server çalışıyor ${port}`)
})

//Status Code: serverdan dönen response un durumuyla ilgili bilgi verir. 404 not found, 200 ok gibi.

//npm i ejs --> template engine