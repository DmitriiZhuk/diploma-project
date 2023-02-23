import express from 'express'
import path from 'path'

const app = express()
const port = 3000

const __dirname = path.resolve();
app.use(express.static(path.resolve(__dirname, 'assets')))
app.use(express.static(path.resolve(__dirname, 'assets/html')))

app.get('/request', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

