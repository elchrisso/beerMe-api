import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import monk from 'monk'

const db = monk('localhost:27017/shopping-cart')
const Product = db.get('products')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/products', (req, res) => {
  Product.find({}).then((products) => {
    res.json(products)
  })
})

app.post('/products', (req, res) => {
  Product.insert(req.body).then((product) => {
    res.json(product)
  })
})

/*
 C - Create
 R - Read (or fetch documents)
 U - Update
 D - Delete
 */

// REST

/*
  GET - We're going to "get" some data
  POST - We're going to add or save new data
  PUT - We're going to update existing data
  PATCH - We're going to update PIECES of existing data
  DELETE - We're going to remove data
*/

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
