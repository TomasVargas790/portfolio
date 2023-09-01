import express from 'express'
import 'dotenv/config'
import experienceRouter from './routes/experience.route.js'
import studyRouter from './routes/study.route.js'
import techRouter from './routes/tech.route.js'

const PORT = process.env.PORT

const server = express()

server.use(express.json())

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
  next()
})

server.use('/experience', experienceRouter)
server.use('/study', studyRouter)
server.use('/tech', techRouter)

server.listen(PORT, (req, res) => {
  console.log(`oa  ${PORT}`)
})
