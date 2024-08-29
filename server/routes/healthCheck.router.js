import express from 'express'
import { healthCheck } from '../controllers/healthCheck.controller.js'
const healthChechRouter = express.Router()


healthChechRouter.get( '/' , healthCheck )

export default healthChechRouter