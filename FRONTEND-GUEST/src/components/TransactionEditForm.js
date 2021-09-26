import NavigationBar from "./NavigationBar"
import {Container, Row, Col, Button, Form, FloatingLabel} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

function TransactionEditForm(){
    const params = useParams()
    const [transaction, setTransaction ] = useState({
        type: "",
        amount: "",
        category: "",
        date:""
    })
    const [transactions, setTransactions] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:4005/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:4005/transactions/${params.id}`)
            .then(res => res.json())
            .then(json => setTransaction(json))
        
        fetch(`http://localhost:4005/transactions`)
            .then(res => res.json())
            .then(json => setTransactions(json))    
    }, [])

    function handleInput (e){
        setTransaction({
            ...transaction,
            [e.target.name] : e.target.value,
        })
    }

    function handleSubmit (e){
        e.preventDefault()
        fetch(`http://localhost:4005/transactions/${params.id}`, {
            method : "PATCH",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(transaction),
            success: window.location = '/home',
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (<>
        <NavigationBar/>
    
        <Container>
            <Row>
            <Col className="my-3">
                    <div className="my-3">
                    <h1> Transactions Edit</h1>
                    </div>

                <Form onSubmit={handleSubmit}> 
                <FloatingLabel
                        label="Type"
                        controlId="floatingInput"
                        className="mb-3"
                    >
                        <Form.Control name="type" value={transaction.type} onInput={handleInput} readOnly/>
                    </FloatingLabel>                             
                   
                    <FloatingLabel
                        label="Category"
                        controlId="floatingInput"
                        className="mb-3"
                    >
                        <Form.Select name="category" onInput={handleInput}>
                            <option defaultValue={transaction.category}>{transaction.category}</option>
                            {categories.map(function(category){
                                return <option key={category._id} value={category.title}>{category.title}</option>
                            })}                            
                            
                        </Form.Select> 
                    </FloatingLabel>

                    <FloatingLabel
                        label="Amount"
                        controlId="floatingInput"
                        className="mb-3"
                    >
                        <Form.Control name="amount" value={transaction.amount} onInput={handleInput}/>
                    </FloatingLabel>

                    <FloatingLabel
                        label="Date"
                        controlId="floatingInput"
                        className="mb-3"
                    >
                        <Form.Control onInput={handleInput} value={transaction.date} name="date"/>
                    </FloatingLabel>

                

                <div className="d-grid gap-2">
                    <Button onClick={handleSubmit} variant="primary" size="lg">
                        Save
                    </Button>
                </div>
                </Form>
                
                                  
                
                
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default TransactionEditForm