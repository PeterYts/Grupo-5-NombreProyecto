const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3050, () => {
    console.log('Servidor funcionando');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/compras', (req, res) => {
    res.sendFile(__dirname + '/views/compras.html');
});

app.get('/product', (req, res) => {
    res.sendFile(__dirname + '/views/product-detail.html');
});