import {useState, useEffect} from 'react'
import NavigationBar from "./Navbar"
import {Container, Row, Col, Table, Button, Dropdown, Pagination} from 'react-bootstrap'
import {Link} from 'react-router-dom'



function UsersList(){
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:4005/users')
            .then(res => res.json())
            .then(json => setUsers(json))
    }, [])
    return <>
    <NavigationBar/>

    <Container>
        <Row>
            <Col>
            <div className="my-3">
            <h1> Users </h1>
            </div>
                
                <Table striped bordered hover className="shadow">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Uid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(function (user){
                            return (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.uid}</td>
                                </tr>

                            )

                        })}
                        
                        
                        
                    </tbody>
                 </Table>
                </Col>
            </Row>
        </Container>
</>
}

export default UsersList