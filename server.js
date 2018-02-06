const express = require('express')
const app = express()

app.get('/redirect', (req, res) => res.redirect(301, 'https://www.oneu.me/'))
var port = process.env.PORT || 3000;
app.listen(port);
