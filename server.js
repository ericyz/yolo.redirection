const express = require('express')
const app = express()

app.get('/', (req, res) => res.redirect(302, 'https://www.oneu.me/'))
var port = process.env.PORT || 3000;
app.listen(port);
