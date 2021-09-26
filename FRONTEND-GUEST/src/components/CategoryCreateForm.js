import { useState, useEffect } from "react"
import NavigationBar from "./NavigationBar"
import {Container, Row, Col, Table, Button, Form, FloatingLabel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function CategoryCreateForm(){
    const [category, setCategory ] = useState({})
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:4005/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
    }, [])

    function handleInput (e){
        setCategory({
            ...category,
            [e.target.name] : e.target.value,
        })
    }

    function handleSubmit (e){
        e.preventDefault()
        fetch('http://localhost:4005/categories', {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(category),
            success: window.location = '/category',
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    
    return (
    <>
        <NavigationBar/>
    
        <Container>
            <Row>
                <Col>
                <div className="my-3">
                    <h1>Category Create</h1>
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
                        label="Title"
                        controlId="floatingInput"
                        className="mb-3"
                    >
                        <Form.Control name="title" onInput={handleInput}/>
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

export default CategoryCreateForm