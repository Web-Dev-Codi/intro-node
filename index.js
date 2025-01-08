import express from 'express'
import 'dotenv/config'
import musicsRouter from './routes/musicsRouter.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api', musicsRouter)

app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})



app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🟢`))


// CRUD : Create / Read / Update / Delete