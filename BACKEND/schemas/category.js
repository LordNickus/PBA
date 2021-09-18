const { Schema, Types, model} = require('mongoose')


const category = new Schema ({
        title : {
            type: String,
            required: true
        },
        type : {
            type: String,
            required: true
        }


})

module.exports = model('category', category)