const express = require('express')
const app = express()
const port = 3000
const controllers = require('./api/controllers/controllers');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/articles', (req, res) => {
    res.send(controllers.articlesController.get());
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))