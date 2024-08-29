import express from 'express'
import {  sayGoodAfetrNoon, sayGoodMorning, sayHello , } from '../controllers/say.controller.js'
const sayRouter = express.Router()

sayRouter.get('/hello' , sayHello )
sayRouter.get('/goodMorning' , sayGoodMorning )
sayRouter.get('/goodAfetrnoon' ,sayGoodAfetrNoon )

export default sayRouter