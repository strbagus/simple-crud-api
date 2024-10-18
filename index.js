import express from 'express'
import dotenv from 'dotenv'
import fs, { writeFileSync } from 'fs'
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(
  cors({
    origin: '*'
  })
)
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  res.send('Hello World!')
})
app.get('/books', (_, res) => {
  const datas = JSON.parse(fs.readFileSync('./src/db/books.json', 'utf-8'))
  return res.status(200).json({
    data: datas.books
  })
})
app.get('/books/:id', (req, res) => {
  const datas = JSON.parse(fs.readFileSync('./src/db/books.json', 'utf-8'))
  const data = datas.books.find((i) => i.id == req.params.id)
  return res.status(200).json({
    data: data
  })
})
app.post('/books', (req, res) => {
  const datas = JSON.parse(fs.readFileSync('./src/db/books.json', 'utf-8'))
  const newId = datas.books.at(-1)?.id + 1
  const body = {
    id: newId,
    name: req.body.name,
    author: req.body.author
  }
  datas.books.push(body)
  writeFileSync('./src/db/books.json', JSON.stringify(datas))

  return res.status(200).json({
    message: 'Book Created',
    data: body
  })
})
app.put('/books/:id', (req, res) => {
  const datas = JSON.parse(fs.readFileSync('./src/db/books.json', 'utf-8'))
  const idx = datas.books.findIndex((i) => i.id == req.params.id)

  const body = {
    id: parseInt(req.params.id),
    name: req.body.name,
    author: req.body.author
  }
  datas.books[idx] = body
  writeFileSync('./src/db/books.json', JSON.stringify(datas))

  return res.status(200).json({
    message: 'Book Updated',
    data: body
  })
})
app.delete('/books/:id', (req, res) => {
  const datas = JSON.parse(fs.readFileSync('./src/db/books.json', 'utf-8'))
  const filtered = datas.books.filter((i) => i.id != req.params.id)
  fs.writeFileSync('./src/db/books.json', JSON.stringify({ books: filtered }))
  return res.status(200).json({
    message: 'Book Deleted'
  })
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
