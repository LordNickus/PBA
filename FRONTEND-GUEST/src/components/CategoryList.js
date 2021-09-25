import {useState, useEffect} from 'react'
import NavigationBar from "./NavigationBar"
import {Container, Row, Col, Table, Button, Dropdown, Pagination} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function CategoryList(){
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:4005/categories')
            .then(res => res.json())
            .then(json => setCategories(json))
    }, [])

    return (<>
        <NavigationBar/>
    
        <Container>
            <Row>
                <Col className="my-3">
                    <div className="my-3">
                    <h1> Categories </h1>
                    </div>

                    <Table striped bordered hover className="shadow">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Category</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            { categories.map(function (category) {
                                    return (
                                        <tr key={category._id}>
                                            <td>{ category.title }</td>
                                            <td>{ category.type }</td>
                                            <td>
                                            <Button variant="dark" size="sm">
                                                 <Link className="nav-link" to={`/categories/${category._id}/edit`}>Edit</Link>
                                            </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                 </Table>

                <div bg="primary">
                    <div className="d-grid gap-2 my-3">
                        <Button variant="outlined" size="lg" >
                            <Link className="nav-link" to="/category/create">Create</Link>
                        </Button>
                    </div>
                    
                    

                </div>
                </Col>
            </Row>
        </Container>
        </>
    )

}

export default CategoryList