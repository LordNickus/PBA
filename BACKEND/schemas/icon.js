const { Schema, Types, model} = require('mongoose')


const icon = new Schema ({
        iconId : {
            type: Types.ObjectId,
            required: true
        },
        
        name : {
            type: String,
            required: true
        },

        icon : {
            type: Types.ObjectId,
            ref : "icon",
            required: true
        },


})

module.exports = model('icon', icon)