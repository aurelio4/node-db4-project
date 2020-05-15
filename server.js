const express = require("express")
const recipeRouter = require('./routes/recipes')

const server = express()

server.use(express.json())
server.use('/api/recipes', recipeRouter)

server.listen(4000, () => {
  console.log("server listening on port 4000")
})