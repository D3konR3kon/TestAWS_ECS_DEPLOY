const express  = require('express')
const app = express()
const PORT = 5201

app.get('/', (req,res)=>{
    res.status(200).send({message: "Hello World!"})

})
app.listen(PORT, ()=>{
    console.log("Server running @ PORT:", PORT)
})