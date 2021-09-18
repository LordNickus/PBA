import { useState } from "react"
import NavigationBar from "./Navbar"
import {Container, Row, Col, Table, Button, Form, FloatingLabel} from 'react-bootstrap'


function CategoryCreateForm(){
    const [category, setCategory ] = useState({})

    function handleInput (e){
        console.log( e.target.tittle, e.target.type)
    }

    return (<>
        <NavigationBar/>
    
        <Container>
            <Row>
                <Col>
                <div className="my-3">
                    <h1>Alta de categorias</h1>
                </div>
                
                <Form>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Tittle"
                    className="mb-3"
                >
                    <Form.Control type="Tittle"  onInput={handleInput}/>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput"
                    label="Type"
                    className="mb-3"
                >
                    <Form.Control type="Type"  onInput={handleInput}/>
                </FloatingLabel>

                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Guardar
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