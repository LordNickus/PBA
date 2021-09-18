import {Container, Row, Col, Table} from 'react-bootstrap'

import NavigationBar from './Navbar'


function UsersList(){
    return <>
    <NavigationBar/>

    <Container>
        <Row>
            <Col>
            <div className="my-3">
            <h1> Clientes </h1>
            </div>
                
                <Table striped bordered hover className="shadow">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                 </Table>
                </Col>
            </Row>
        </Container>
</>
}

export default UsersList