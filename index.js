import express, { urlencoded } from 'express'
import 'dotenv/config'
import musics from './data/musics.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(express.urlencoded({extended : false}))


app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})

app.get('/musics', (request, response) => {
    response.json(musics)
})

app.get('/musics/:id', (req, res) => {
    let {id} = req.params
    try{
        const musicByID = musics.find(music => music.id === parseInt(id))
        if(!musicByID){
            return res.status(403).json({message : 'Music not found'})
        }
        return res.status(200).json(musicByID)
    }
    catch(err){
        return res.status(500).json({ message : 'Internal server error'})
    }
})


app.post('/musics', (req, res) => {
    let {name, author, genre} = req.body
    try{
        if(!name || !author || !genre){
            return res.status(401).json({message : 'All fields are required'})
        }
        const newMusic = {
            id : musics.length + 1,
            name,
            author,
            genre
        }
        musics.push(newMusic)
        return res.status(201).json(musics)
    }
    catch(err){
        return res.status(500).json({ message : 'Internal server error'})
    }
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🟢`))


// CRUD : Create / Read / Update / Delete