const mongoose = require("mongoose")

mongoose.connect( 'mongodb+srv://victora:Hola123!@cluster0.putgy.mongodb.net/UNICA_V2')
.then(
    ()=>console.log("Conectado a mongo db...")
)
.catch(
    (error) => console.log(error)
)
