const mongoose = require('mongoose');
const apod = require('../../config/Schema/apod.schema');

async function saveApod(){
    //const apod = mongoose.model('apod', apodSchema);
    const apodToday = new apod({title: 'my apod'});
    apodToday.save((err, apodToday) => {
        if (err) return console.log(err);
        console.log('new element added to DB', apodToday);
    });
    return {status: 'ok'};
};

module.exports = {saveApod};