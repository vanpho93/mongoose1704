const mongoose = require('mongoose');

mongoose.connect('mongodb://mlab:123@ds237707.mlab.com:37707/mean1704')
.then(() => console.log('Database connected.'))
.catch(error => console.log('Cannot connect database', error));

const singerSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    link: { type: String, required: true, unique: true },
    image: { type: String }
});

const Singer = mongoose.model('Singer', singerSchema);

module.exports = { Singer };
// READ Doc tat ca document
// ---------------------------
// Singer.find({})
// .then(singers => console.log(singers));
// ---------------------------
// Tim 1 document voi _id
// Singer.findById('5af6e78fd3b2a465e2b31f04')
// .then(singer => console.log(singer))
// ---------------------------
// Query documents
// Singer.find({ name: 'Karik' })
// .then(singers => console.log(singers));
// ---------------------------
// Query 1 document
// Singer.findOne({ name: 'Karik111' })
// .then(singer => console.log(singer));
// ---------------------------


// CREATE
// tao 1 document
// ---------------------------
// const singer = new Singer({ name: 'ERIK', link: 'https://mp3.zing.vn/nghe-si/ERIK', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/b/a/1/0/ba10c66afe56f9b300096005245db92f.jpg' });

// singer.save()
// .then(s => console.log(s))
// .catch(error => console.log(error));
// ---------------------------
// tao nhieu document
// Singer.insertMany([
//     { name: 'Karik', link: 'https://mp3.zing.vn/nghe-si/Karik', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/a/0/a0927398989d4c5b18c56880bd56442b_1509531352.jpg' },
//     { name: 'Đức Phúc', link: 'https://mp3.zing.vn/nghe-si/Duc-Phuc', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/d/7/d7f34aa6b1112e4b605f6c6e7eccd162_1509437674.jpg' },
//     { name: 'Châu Khải Phong', link: 'https://mp3.zing.vn/nghe-si/Chau-Khai-Phong', image: 'https://zmp3-photo.zadn.vn/thumb/240_240/avatars/c/a/ca59799621e1c9fd8652cd947713acfa_1509951552.jpg' },
// ])
// .then(x => console.log(x));
// ---------------------------
// UPDATE
// ---------------------------
// Singer.findByIdAndUpdate('5af6e78fd3b2a465e2b31f02', { name: 'karik' }, { new: true })
// .then(singer => console.log(singer))
// .catch(error => console.log(error));

// ---------------------------
// Singer.findOneAndUpdate({ name: 'karik' }, { name: 'KARIK' }, { new: true })
// .then(singer => console.log(singer))
// .catch(error => console.log(error));

// ---------------------------
// Singer.updateMany({}, { __v: 100 }, { new: true })
// .then(x => console.log(x))
// .catch(error => console.log(error));


// ---------------------------
// DELETE
// ---------------------------
// Singer.findByIdAndRemove('5af6e78fd3b2a465e2b31f04')
// .then(singer => console.log(singer))
// .catch(error => console.log(error));
// ---------------------------
// Singer.findOneAndRemove({ name: 'KARIK' })
// .then(singer => console.log(singer))
// .catch(error => console.log(error));
// ---------------------------
// Singer.deleteMany({})
// .then(x => console.log(x))
// .catch(error => console.log(error));
