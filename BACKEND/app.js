const express = require('express')
const app = express()
const cors = require('cors')

const mongoose = require('mongoose')

mongoose.connect( 'mongodb://localhost:27017/PBA', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Category = require('./schemas/category')
const Transaction = require('./schemas/transaction')

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

app.get('/categories/:id', function (req, res){
    Category
        .findById(req.params.id)
        .then(data => {
            if (data) {
                res.send (data)
            } else {
                res.status(404).end()
            }
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
    Category
        .findByIdAndUpdate(req.params.id, {
            title : req.body.title,
            type : req.body.type
        })
        .then(data => {
            res.status(201).send({message : 'updated'})
        }).catch(err => {
            res.status(422).send({error : err.message})
    })
    
})


/**Transactions */
app.get('/transactions', function (req, res){
    Transaction
    .find()
    .then(data => {
        res.send (data)
    }).catch(err => {
        res.status(500).send({error : err.message})
})

})

app.get('/transactions/:id', function (req, res){
    Transaction
    .findById(req.params.id)
        .then(data => {
            if (data) {
                res.send (data)
            } else {
                res.status(404).end()
            }
        }).catch(err => {
            res.status(500).send({error : err.message})
    })
    
})

app.patch('/transactions/:id', function(req, res) {
    Transaction
    .findByIdAndUpdate(req.params.id, {
        category : req.body.category,
        amount :req.body.amount,
        date : req.body.date
    })
    .then(data => {
        res.status(201).send({message : 'updated'})
    }).catch(err => {
        res.status(422).send({error : err.message})
})

})

app.post('/transactions', function (req, res) {
    let newTransaction = new Transaction({
        type : req.body.type,
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