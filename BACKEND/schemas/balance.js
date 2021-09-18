const { Schema, Types, model} = require('mongoose')


const balance = new Schema ({
        balanceId : {
            type: Types.ObjectId,
            required: true
        },
        date : {
            type: Date,
            required: true
        }, 

        amount : {
            type: Number,
            required: true
        },


})

module.exports = model('balance', balance)