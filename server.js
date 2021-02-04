const express = require('express');

const app = express()
const port = 8080;

app.get('/', (req, resp) => {
    resp.send('Tô rodando no heroku')
})

app.listen(port, () => console.log('SERVER ON'))