const express = require('express')
var app=express()
const bodyParser = require('body-parser')
const port = 3000

const db = require('./models/index')
const user = db.User
const contact = db.Contact

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',async(req,res)=>{
    var data = await user.create({
        firstname:'Ravi',
        lastname:'Sharma'
 })
    res.status(200).json({data:data})
})

app.get('/contact',async(req,res)=>{
    var data1 = await contact.create({
        city:'Delhi',
        Mobile:7656456760
 })
    res.status(200).json({data:data1})
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})