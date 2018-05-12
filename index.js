const express = require('express');
const { urlencoded } = require('body-parser');
const { Singer } = require('./connectDb');

const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    Singer.find()
    .then(singers => res.render('singer', { singers }));
});

app.get('/add', (req, res) => res.render('create'));

app.post('/add', (req, res) => {
});

app.get('/update/:id', (req, res) => {
});

app.post('/update/:id', (req, res) => {
});

app.get('/remove/:id', (req, res) => {
});

app.listen(process.env.PORT || 3000, () => console.log('Server started!'));

app.locals.isDev = process.env.NODE_ENV !== 'production';

if (app.locals.isDev) {
    const reload = require('reload');
    reload(app);
}
