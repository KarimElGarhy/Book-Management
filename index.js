import express from 'express'
import { dbConnect } from './db/dbConnection.js';
import { authorRouter } from './src/modules/author/author.module.js';
import bookRouter from './src/modules/books/book.module.js';

const app = express()

const port = 3000;

app.use(express.json())


dbConnect()
app.use('/authors',authorRouter)
app.use('/books',bookRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


