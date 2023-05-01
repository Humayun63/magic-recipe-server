const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('Magic Recipe is running! YaY!')
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})