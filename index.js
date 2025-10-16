const express = require('express')
const app = express()
const port = process.env.PORT || 2025;

app.use(express.urlencoded({extended: true}));//Middleware
//Data from a form  
//name=John&age=30

app.use(express.json());//Middleware
//accept json to the req.body 0

app.use(express.static('frontend/dist'));//Middleware

app.get('/', (req, res) => {
    //req.body.name
    //req.body.age
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
