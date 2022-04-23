// เชื่อมกับ mongodb

const mongoose = require('mongoose')

//เชื่อมไปยัง Mongodb
const dburl = 'mongodb://localhost:27017/userDatabase'
mongoose.connect(dburl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

const userSchema = new mongoose.Schema({

    e: String,
    password: String,
    name: String



})

//สร้างโมเดล
let Users = mongoose.model("User",userSchema)

//ส่งออกโมเดล
module.exports = Users