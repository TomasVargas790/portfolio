import { Router } from 'express'
import { v4 } from 'uuid'
import db from '../things/db.js'

const experienceRouter = Router()

experienceRouter.get('/', async (req, res) => {
    const query = 'SELECT id, title, description, createdAt, updatedAt, workingSince, workingUntil, imgUrl FROM experiences'
    const [result] = await db.query(query)
    res.json(result)
})

experienceRouter.post('/', async (req, res) => {
    const { title, description, workingSince, workingUntil, imgUrl } = req.body
    const createdAt = new Date().toLocaleString()
    const updatedAt = new Date().toLocaleString()
    const id = v4()
    const query = 'INSERT INTO experiences VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
    const [result] = await db.query(query, [id, title, description, createdAt, updatedAt, workingSince, workingUntil, imgUrl])
    res.json(result)
})

export default experienceRouter