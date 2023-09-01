import { Router } from 'express'
import { getStudy, setStudy } from '../service/study.service.js';
const studiesRouter = Router()

studiesRouter.get('/', getStudy)

studiesRouter.post('/', setStudy)

export default studiesRouter