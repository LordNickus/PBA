const { Schema, Types, model} = require('mongoose')


const typeTransaction = new Schema ({
        typeTransactionId : {
            type: Types.ObjectId,
            required: true
        },
        name : {
            type: String,
            required: true
        },
        
})

module.exports = model('typeTransaction', typeTransaction)