const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

const chefInfo = require('./data/shefInfo.json')


app.use(cors())

app.get('/', (req, res)=>{
    res.send('Magic Recipe is running! YaY!')
})

app.get('/chefInfo', (req, res) =>{
    res.send(chefInfo)
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})