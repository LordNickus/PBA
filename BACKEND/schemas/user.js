const { Schema, Types, model} = require('mongoose')


const user = new Schema ({
        userId : {
            type: Types.ObjectId,
            required: true
        },
        name : {
            type: String,
            required: true
        },
        lastName : {
            type: String,
            required: true
        },
        eMail : {
            type: String,
            required: true
        }


})

module.exports = model('user', user)