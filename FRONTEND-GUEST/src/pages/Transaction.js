import NavigationBar from "../components/NavigationBar"
import {Container, Row, Col, Table, Button, Form, FloatingLabel} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react"


function Transaction(){
    const [transaction, setTransaction ] = useState({})
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:4005/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
    }, [])

    function handleInput (e){
        setTransaction({
            ...transaction,
            [e.target.name] : e.target.value,
        })
    }

    function handleSubmit (e){
        e.preventDefault()
        fetch('http://localhost:4005/transactions', {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(transaction)
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
                    <h1> Transactions </h1>
                    </div>

                <Form onSubmit={handleSubmit}> 
                    <FloatingLabel
                        label="Type"
                        controlId="floatingSelect"
                        className="mb-3"
                    >
                        <Form.Select name="type" onInput={handleInput}>
                            <option value=""></option>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                            
                        </Form.Select> 
                    </FloatingLabel>                                 
                   
                    <FloatingLabel
                        label="Category"
                        controlId="floatingInput"
                        className="mb-3"
                    >
                        <Form.Select name="category" onInput={handleInput}>
                            <option value=""></option>
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
                        <Form.Control name="amount" onInput={handleInput}/>
                    </FloatingLabel>

                    <FloatingLabel
                        label="Date"
                        controlId="floatingInput"
                        className="mb-3"
                    >
                        <Form.Control name="date" onInput={handleInput}/>
                    </FloatingLabel>

                

                <div className="d-grid gap-2">
                    <Button onClick={handleSubmit} variant="primary" size="lg">
                        <Link href='/home'>
                        Save</Link>
                    </Button>
                </div>
                </Form>              
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Transaction