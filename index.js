const express = require('express')
var app=express()
const bodyParser = require('body-parser')
const port = 3000

const db = require('./models/index')
const Movie = db.Movie
const Actor = db.Actor

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// app.get('/many-to-many',async(req,res)=>{
//      var data = await Movie.create({name:'Ra-One'})
//      if(data && data.id){
//         await Actor.create({name:'SRK'})
//      }
//      res.send('data sent')
// })

app.get('/',async(req,res)=>{
    var data = await Movie.findAll({
        include:[{
            model : Actor,
            attributes : ['name']
        }]
    })
    res.status(200).json({data:data})
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})