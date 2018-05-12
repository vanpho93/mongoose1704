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
    const { name, link, image } = req.body;
    const singer = new Singer({ name, link, image });
    singer.save()
    .then(() => res.redirect('/'))
    .catch(error => res.send(error));
});

app.get('/update/:id', (req, res) => {
    Singer.findById(req.params.id)
    .then(singer => {
        if (!singer) throw new Error('Cannot find singer');
        res.render('update', { singer });
    })
    .catch(error => res.send(error));
});

app.post('/update/:id', (req, res) => {
    const { image, name, link } = req.body;
    Singer.findByIdAndUpdate(req.params.id, { name, link, image })
    .then(singer => {
        if (!singer) throw new Error('Cannot find singer');
        res.redirect('/');
    })
    .catch(error => res.send(error));
});

app.get('/remove/:id', (req, res) => {
    Singer.findByIdAndRemove(req.params.id)
    .then(singer => {
        if (!singer) throw new Error('Cannot find singer');
        res.redirect('/');
    })
    .catch(error => res.send(error));
});

app.listen(process.env.PORT || 3000, () => console.log('Server started!'));

app.locals.isDev = process.env.NODE_ENV !== 'production';

if (app.locals.isDev) {
    const reload = require('reload');
    reload(app);
}
