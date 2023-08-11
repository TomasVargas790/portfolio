import { Router } from 'express'
import { v4 } from 'uuid'
import db from '../things/db.js'

const studiesRouter = Router()

studiesRouter.get('/', async (req, res) => {
    const query = 'SELECT id, title, description, createdAt, updatedAt, studingSince, studingUntil, imgUrl FROM studies'
    const [result] = await db.query(query)
    res.json(result)
})

studiesRouter.post('/', async (req, res) => {
    const { title, description, studingSince, studingUntil, imgUrl } = req.body
    const createdAt = new Date().toLocaleString()
    const updatedAt = new Date().toLocaleString()
    const id = v4()
    const query = 'INSERT INTO studies VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
    const [result] = await db.query(query, [id, title, description, createdAt, updatedAt, studingSince, studingUntil, imgUrl])
    res.json(result)
})

export default studiesRouter