import express from  'express'
import {config} from 'dotenv'
import healthChechRouter from './routes/healthCheck.router.js'
import sayRouter from './routes/say.router.js'
config()
const app = express();
const PORT  = process.env.PORT || 2000

app.use(healthChechRouter)
app.use('/say',sayRouter)

app.listen(PORT,()=>{
    console.log(`Server running ${PORT}...`);    
})
