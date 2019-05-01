import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actionCreators } from '../store/Employees'

class EmployeesTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            job: "",
            location: "",
            email: "",
            catchPhrase: "",
            employees: []
        }
    }

    componentWillMount() { this.props.requestEmployees() }

    addEmployee() {
        const newEmployee = {
            name: this.state.name,
            job: this.state.job,
            location: this.state.location,
            email: this.state.email,
            catchPhrase: this.state.catchPhrase
        }
        this.props.addEmployee(newEmployee)
        this.props.requestEmployees()
    }

    renderEmployee(employee) {
        return (
            <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.job}</td>
                <td>{employee.location}</td>
                <td>{employee.email}</td>
                <td>{employee.catchPhrase}</td>
            </tr>
        )
    }

    renderEmployeesTable(props) {
        return (
            <table className="table index-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>Catch Phrase</th>
                </tr>
                </thead>
                <tbody>
                    {props.employees.map(employee => this.renderEmployee(employee))}
                </tbody>
            </table>
            )
    }

    render() {
        return (
            <React.Fragment>
                <h1>NESS Employees</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {this.renderEmployeesTable(this.props)}

                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    id="employeeName"
                                    type="text"
                                    value={this.state.name}
                                    onChange={(e) => this.setState({ name: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Job:</td>
                            <td>
                                <input
                                    id="employeeJob"
                                    type="text"
                                    value={this.state.job}
                                    onChange={(e) => this.setState({ job: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>
                                <input
                                    id="employeeLocation"
                                    type="text"
                                    value={this.state.location}
                                    onChange={(e) => this.setState({ location: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input
                                    id="employeeEmail"
                                    type="text"
                                    value={this.state.email}
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Catch Phrase:</td>
                            <td>
                                <input
                                    id="employeeCatchPhrase"
                                    type="text"
                                    value={this.state.catchPhrase}
                                    onChange={(e) => this.setState({ catchPhrase: e.target.value })}
                                />
                            </td>
                        </tr>
                        <tr><td><button onClick={this.addEmployee.bind(this)}>Add</button></td></tr>
                    </tbody>
                </table>
            </React.Fragment>
         )
    }
}


export default connect(
    state => state.employees,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(EmployeesTable)
