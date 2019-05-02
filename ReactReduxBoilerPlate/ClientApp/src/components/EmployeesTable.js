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
        this.renderNewEmployeeInputs = this.renderNewEmployeeInputs.bind(this)
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

    renderEmployeesTable(props) {
        debugger
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
                    {this.props.employees.map(employee => this.renderEmployee(employee))}
                </tbody>
            </table>
            )
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


    renderNewEmployeeInputs(props) {
        if (props.employees.length === 0) { return <tr/> }
        const keyArray = Object.keys(props.employees[0])
        keyArray.shift()
        const output = keyArray.map( key => {
            const title = key.charAt(0).toUpperCase() + key.slice(1, key.length)
            return (
                <tr key={key}>
                    <td>{title}:</td>
                    <td>
                        <input
                            type="text"
                            id={`employee${title}`}
                            value={this.state.key}
                            onChange={(e) => this.setState({ [key]: e.target.value })}
                        />
                    </td>
                </tr>
            )
        })
        return output
    }

    render() {
        return (
            <React.Fragment>
                <h1>NESS Employees</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {this.renderEmployeesTable(this.props)}
                <table id="employees-table-form">
                    <tbody>
                        {this.renderNewEmployeeInputs(this.props)}
                        <tr>
                            <td>
                                <button onClick={this.addEmployee.bind(this)} id="employees-table-form-button">
                                    Add
                                </button>
                            </td>
                        </tr>
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
