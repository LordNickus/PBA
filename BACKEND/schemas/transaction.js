const { Schema, Types, model} = require('mongoose')


const transaction = new Schema ({
        
    type : {
        type: String,
        ref: "type",
        required: true
        },

    category : {
        type: String,
        ref: "category",
        required: true
        },

    amount : {
        type: Number,
        required: true
    },    

    date : {
        type: String,
        required: true
    }
})

module.exports = model('transaction', transaction)