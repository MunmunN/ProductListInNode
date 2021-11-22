const mongoose = require('mongoose');

//define schema
const product= mongoose.Schema({

    sno:{
        type:Number,
        required: true

    },

    name:{
        type:String,
        required: true

    },

    type:{
        type:String,
        default:"Regular"
        

    },

    createDate:{
        type:Date,
        default: Date.now

    }
});

module.exports =mongoose.model('Product',product);
