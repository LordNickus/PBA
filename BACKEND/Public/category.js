const { Schema, Types, model} = require('mongoose')


const category = new Schema ({
        // categoryId : {
        //     type: Types.ObjectId,
        //     required: true
        // },
        title : {
            type: String,
            required: true
        },
        // icon : {
        //     type: Types.ObjectId,
        //     ref : "icon",
        //     required: true
        // },
        type : {
            type: String,
            // ref : "type",
            required: true
        }


})

module.exports = model('category', category)