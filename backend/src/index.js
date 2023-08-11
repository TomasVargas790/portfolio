import express from 'express'
import 'dotenv/config'
import experienceRouter from './routes/experience.route.js'
import studiesRouter from './routes/studies.route.js'

const PORT = process.env.PORT

const server = express()

server.use(express.json())

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
  next()
})

server.use('/experience', experienceRouter)
server.use('/study', studiesRouter)

server.listen(PORT, (req, res) => {
  console.log(`oa  ${PORT}`)
})
