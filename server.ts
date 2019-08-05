import express from 'express'
import next from 'next'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import api from './server/api'

dotenv.config()

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mongoose.connect(
  process.env.MDB || 'sorry',
  { useNewUrlParser: true },
  () => { console.log('Connected to DB') } // tslint:disable-line:no-console
)

app.prepare().then(() => {
  const server = express()

  server.use(express.json())
  server.use('/api', api)

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    return app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    // tslint:disable-next-line
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`)
  })
})
.catch((ex: any) => {
  // tslint:disable-next-line
  console.error(ex.stack)
  process.exit(1)
})
