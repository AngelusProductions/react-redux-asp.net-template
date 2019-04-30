import React from 'react';
import { connect } from 'react-redux';

const data = [
    {
        "id": 1,
        "name": "Alex",
        "job": "Tutorial Wiz",
        "location": "Siberia",
        "email": "alexb@nesurvey.com",
        "catchPhrase": "OK, here's what I will say..."
    },
    {
        "id": 2,
        "name": "Ben",
        "job": "Codemaster Lv. 11",
        "location": "Black Sea",
        "email": "benc@nesurvey.com",
        "catchPhrase": "(bizarre and unrelated ranting)"
    },
    {
        "id": 3,
        "name": "Corey",
        "job": "Codemaster Lv. 12",
        "location": "Gulag",
        "email": "coreya@nesurvey.com",
        "catchPhrase": "I'm a dude, he's a dude, she's a dude, and we're all dudes, yeah"
    },
    {
        "id": 4,
        "name": "Omkar",
        "job": "Office Beard Reserve",
        "location": "Black Sea",
        "email": "omkarp@nesurvey.com",
        "catchPhrase": "Hey I'm from LA, look at me"
    },
    {
        "id": 5,
        "name": "John",
        "job": "Boss Man",
        "location": "Everywhere",
        "email": "johnr@nesurvey.com",
        "catchPhrase": "No, don't do that again"
    }
]

const Table = props => (
    <div>
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
            {data.map(employee => {
                    return (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.job}</td>
                            <td>{employee.location}</td>
                            <td>{employee.email}</td>
                            <td>{employee.catchPhrase}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
);

export default connect()(Table);
