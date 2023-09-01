import db from '../things/db.js'

export const setTech = async (req, res) => {
    try {
        const { title, imgUrl } = req.body
        const query = 'INSERT INTO tech (title, imgUrl) VALUES( ?, ?)'
        const [result] = await db.query(query, [title, imgUrl])
        res.json(result)
    } catch (e) {
        res.status(500).json(e)
    }
}

export const getTech = async (req, res) => {
    const query = 'SELECT id, title, imgUrl FROM tech'
    const [result] = await db.query(query)
    res.json(result)
}