const express = require('express')
const app = express()

app.get('/redirect', (req, res) => res.redirect(301, 'https://www.oneu.me/'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))