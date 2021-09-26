
import {Container, Row, Col, Button, Form, FloatingLabel} from 'react-bootstrap'

function LoginPage(){
    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),
        // });
      };

    return (<>
    
        <Container>
            <Row>
                <Col>
                <div className="my-3">
                    <h1>Sign In</h1>
                </div>
                
                <Form onSubmit={handleSubmit}> 
                    <FloatingLabel
                        label="User"
                        controlId="floatingInput"
                        className="mb-3"
                    >
                        <Form.Control name="user" />
                    </FloatingLabel>                                 
                   
                    <FloatingLabel
                        label="Password"
                        controlId="floatingInput"
                        className="mb-3"
                    >
                        <Form.Control name="password" />
                    </FloatingLabel>

                

                <div className="d-grid gap-2">
                    <Button href="/home" variant="dark" size="lg" >
                        SignIn
                    </Button>
                </div>
                </Form>
                </Col>
            </Row>
        </Container>
        </>
    )

}

export default LoginPage