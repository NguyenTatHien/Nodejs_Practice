const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://hiendeptrai:hien123456789@cluster1.iqhwen4.mongodb.net/OptimusFaker_dev');
        console.log('Connect successfully');
    } catch (error) {
        console.log('Connect failure!!!');
    }

}

module.exports = { connect }