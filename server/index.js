import express from 'express'
import { renderToNodeStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import fs from 'fs'
import App from '../src/pages/App'


const PORT = process.env.port || 3000
const html = fs.readFileSync('dist/index.html').toString()
const parts = html.split('Not rendered')
const server = express()


server
  .use('/dist', express.static('dist'))
  .use((req, res) => {
    res.write(parts[0])

    const staticContext = {}
    const reactMarkup = (
      <StaticRouter url={req.url} context={staticContext}>
        <App />
      </StaticRouter>
    )

    const stream = renderToNodeStream(reactMarkup)
    stream.pipe(res, { end: false })
    stream.on('end', () => {
      res.status(staticContext || 200)
      res.write(parts[1])
      res.end()
    })
  })

console.log(`Listening on http://localhost:${PORT}`)
server.listen(PORT)
