const express = require('express')
const app = express()
var markdown = require( 'markdown' ).markdown
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Bem vindo ao conversor de Markdown para HTML o/')
})

app.post('/markdown_to_html', (req, res) => {
    res.send(markdown.toHTML(req.body.markdown_text))
})

app.listen(3000, () => { console.log("Server OK") })