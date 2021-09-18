const { Schema, Types, model} = require('mongoose')


const transaction = new Schema ({
        id : {
            type: Types.ObjectId,
            ref : "category",
            required: true,
            
        },

        concept : {
            type: Types.ObjectId,
            ref : "type",
            required: true,
            
        },
        category : {
            type: Types.ObjectId,
            ref : "category",
            required: true,
        },

        // icon : {
        //     type: Types.ObjectId,
        //     ref : "icon",
        //     required: true
        // },

        amount : {
            type: Number,
            required: true
        },

        date : {
            type: Date,
            required: true
        }, 
})

module.exports = model('transaction', transaction)