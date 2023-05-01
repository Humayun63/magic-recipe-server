const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

const chefInfo = require('./data/shefInfo.json')
const recipes = require('./data/recipes.json')

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Magic Recipe is running! YaY!')
})

app.get('/chefInfo', (req, res) =>{
    res.send(chefInfo)
})

app.get('/chefInfo/:id', (req, res) =>{
    const id = req.params.id
    const selectedChef = chefInfo.find(chef => chef.id === id)
    res.send(selectedChef)
})

app.get('/recipe/:id', (req, res) =>{
    const id = req.params.id
    const selectedRecipes = recipes.find( recipe => recipe.chef_id === id)
    res.send(selectedRecipes)
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})