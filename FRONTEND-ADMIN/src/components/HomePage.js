import NavigationBar from "./Navbar"
import {Container, Row, Col, Table} from 'react-bootstrap'

function HomePage(){
    return (<>
        <NavigationBar/>
    
        <Container>
            <Row>
                <Col>
                        <h1>Home</h1>
                </Col>
            </Row>
        </Container>
        </>
    )

}

export default HomePage