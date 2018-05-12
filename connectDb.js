const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean1704')
.then(() => console.log('Database connected.'))
.catch(error => console.log('Cannot connect database', error));
