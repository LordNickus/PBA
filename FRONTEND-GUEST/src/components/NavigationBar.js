import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function NavigationBar(){
    return (
        <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="me-auto">
        <Link className="nav-link" to="/transaction">Transaction</Link>
        <Link className="nav-link" to="/category">Categories</Link>
        
        </Nav>
        </Container>
    </Navbar>
    )
}
export default NavigationBar