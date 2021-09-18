const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')

mongoose.connect( 'mongodb://localhost:27017/PBA', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Category = require('./schemas/category')

app.use(cors())
app.use(express.json())


/**Categories */
app.get('/categories', function (req, res){
    Category
        .find()
        .then(data => {
            res.send (data)
        }).catch(err => {
            res.status(500).send({error : err.message})
    })
    
})


app.post('/categories', function (req, res) {
    let newCategory = new Category({
        title : req.body.title,
        type : req.body.type
    })

    newCategory
        .save()
        .then(data => {
            res.status(201).send({id : data._id})
    })
        .catch(err => {
            res.status(422).send({message : err.message})
    })
})

app.patch('/categories/:id', function(req, res) {
    res.status(201).end()


})


/**Transactions */
app.get('/transaction', function (req, res){
    Transaction
    .find()
    .then(data => {
        res.send (data)
    }).catch(err => {
        res.status(500).send({error : err.message})
})

})

app.patch('/transaction/:id', function(req, res) {
    res.status(201).end()
})

app.post('/transaction', function (req, res) {
    let newTransaction = new Transaction({
        id : req.body.id,
        concept : req.body.concept,
        category : req.body.category,
        amount :req.body.amount,
        date : req.body.date
    })

    newTransaction
        .save()
        .then( data =>{
            res.status(201).send({id : data._id})
    })
        .catch(err =>{
            res.status(422).send({message : err.message})
    })
})


/**Users */
app.get('/users', function (req, res){
    User
        .find()
        .then(data => {
            res.send (data)
        }).catch(err => {
            res.status(500).send({error : err.message})
    })
    
})

app.patch('/users/:id', function(req, res) {
    res.status(201).end()
})

app.post('/users', function (req, res) {
    res.status(201).send({id : 1234556})
})

app.listen(4005)