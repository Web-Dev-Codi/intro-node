import express from 'express'

const app = express()

app.get('/', (request, response) => {
    response.send(`Welcome to my API`)
})


app.listen(8000, () => console.log(`Server is running on port 8000 🟢`))


// CRUD : Create / Read / Update / Delete