const initialState = { employees: [], employee: {}, isLoading: false }

const requestEmployeesType = 'REQUEST_EMPLOYEES'
const receiveEmployeesType = 'RECEIVE_EMPLOYEES'
const requestEmployeeType = 'REQUEST_EMPLOYEE'
const receiveEmployeeType = 'RECEIVE_EMPLOYEE'
const addEmployeeType = 'ADD_EMPLOYEE_TYPE'

let employeesList = []
let newEmployeesList = []

export const actionCreators = {
    requestEmployees: () => async (dispatch, getState) => {
        dispatch({ type: requestEmployeesType })
        const url = `api/Employees`
        const response = await fetch(url) 
        const employeesList = await response.json()
        dispatch({ type: receiveEmployeesType, employeesList })
    },

    requestEmployee: (id) => async (dispatch, getState) => {
        dispatch({ type: requestEmployeeType })
        const url = `api/Employees/GetEmployee/${id}`
        const response = await fetch(url)
        const employee = await response.json()
        dispatch({ type: receiveEmployeeType, employee })
    },

    addEmployee: (employee) => async (dispatch, getState) => {
        const url = "/api/employees"
        const data = JSON.stringify({ name: employee.name, job: employee.job, location: employee.location, email: employee.email, catchPhrase: employee.catchPhrase })
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: data
        })
        .then( data => dispatch ({ type: addEmployeeType, employee: data }))
    }
}

export const reducer = (state, action) => {
    state = state || initialState
    switch (action.type) {
        case requestEmployeesType:
            return {
                ...state,
                isLoading: true
            }
        case receiveEmployeesType:
            return {
                ...state,
                employees: action.employeesList,
                isLoading: false
            }
        case requestEmployeeType:
            return {
                ...state,
                isLoading: true
            }
        case receiveEmployeeType:
            return {
                ...state,
                employee: action.employee,
                isLoading: false
            }
        case addEmployeeType:
            newEmployeesList = employeesList.push({
                name: action.employee.name,
                job: action.employee.job,
                location: action.employee.location,
                email: action.employee.email,
                catchPhrase: action.employee.catchPhrase
            })
            return {
                ...state,
                employees: newEmployeesList,
                isLoading: false
            }
        default:
            return state
    }
}
