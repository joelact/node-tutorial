const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.headers);
    next();
});

app.get('/hello', (req, res, next) => {
    res.send({ hello: 'World'});
    next();
});

app.get('/world', (req, res, next) => {
    res.send({ hello: 'Hello'});
    next();
});

app.use((req, res, next) => {
    console.log('Resposta');
    next();
});

app.listen(8080, '0.0.0.0', () => {
    console.log("Listening on port", 8080);
})
