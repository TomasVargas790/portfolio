import { Router } from 'express'
import { setTech, getTech } from '../service/tech.service.js';
const techRouter = Router()

techRouter.get('/', getTech)

techRouter.post('/', setTech)

export default techRouter