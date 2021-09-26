import {useState, useEffect} from 'react'
import NavigationBar from "./Navbar"
import {Container, Row, Col, Table, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'



function HomePage(){

    const [transactions, setTransactions ] = useState([])

    useEffect(() => {
        fetch('http://localhost:4005/transactions')
            .then(res => res.json())
            .then(json => setTransactions(json))
    }, [])

        var incomes = transactions.filter(inMoney => inMoney.type === "Income")
        var sumIncome = incomes.reduce((sum, value) => (sum + value.amount),0)
        var expenses = transactions.filter(inMoney => inMoney.type === "Expense")       
        var sumExpense = expenses.reduce((sum, value) => (sum + value.amount),0)
        var sumBalance = sumIncome - sumExpense


    return (<>
        <NavigationBar/>
    
        <Container>
            <Row>
                <Col className="my-2">
                    <div className="my-3">
                    <h1> Balance </h1>
                    </div>
                    <Table striped bordered hover className="shadow">
                        <thead>
                            <tr>
                                <th>Total Balance</th>
                                <th>${sumBalance}</th>
                            </tr>
                            <tr>
                                <th>Total Income</th>
                                <th>${sumIncome}</th>
                            </tr>
                            <tr>
                                <th>Total Expense</th>
                                <th>${sumExpense}</th>
                            </tr>
                        </thead>
                    </Table>    
                </Col>
            </Row>        
            
            <Row>
                <Col className="my-2">
                    <div className="my-3">
                    <h1> Last Transactions </h1>
                    </div>

                    <Table striped bordered hover className="shadow">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            { transactions.map(function (transaction) {
                                    return (
                                        <tr key={ transaction._id }>
                                            <td>{ transaction.type }</td>
                                            <td>{ transaction.category }</td>
                                            <td>${ transaction.amount }</td>
                                            <td>{ transaction.date }</td>
                                            <td>
                                                <Button variant="dark" size="sm">
                                                    <Link className="nav-link" to={`/transaction/${transaction._id}/edit`}>Edit</Link>
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                 </Table>
                </Col>
            </Row>
            <Row>
                <div className="my-3">
                            <h5>App para challenge  </h5>
                    </div>
            </Row>       
            
        </Container>
        </>
        )
    }      

export default HomePage