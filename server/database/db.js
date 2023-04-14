const mongoose = require("mongoose")
const db = "mongodb+srv://tollispapadopoulos:jajaja123@cluster0.oczoxwr.mongodb.net/CRUD?retryWrites=true&w=majority"


const database = () => mongoose.connect(`${db}`, {
    useNewUrlParser: true,
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


module.exports = database;