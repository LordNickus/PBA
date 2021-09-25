const { Schema, Types, model} = require('mongoose')


const user = new Schema ({
        name : {
            type: String,
            // required: true
        },
        lastName : {
            type: String,
            // required: true
        },
        email : {
            type: String,
            // required: true
        },
        password : {
            type: String,
            // required: true
        },
        uid : {
            type: String,
            // required: true
        }

})

module.exports = model('user', user)