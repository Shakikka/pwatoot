import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const Users = () => {

    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const [mode, setMode] = useState('online')

    const getUsers = async () => {
        const url = "https://jsonplaceholder.typicode.com/users"
        setError('')

        try {
            const response = await fetch(url)
            const users = await response.json()
            setUsers(users)
            localStorage.setItem("users", JSON.stringify(users))
        } catch(error) {
            setMode('offline')
            const collection = localStorage.getItem('users');
            setUsers(JSON.parse(collection))
            return caches.match('index.html');
        }
    }


    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            {mode === 'offline' && <p>You are in Offline mode</p>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                   {
                        users.map(user => {
                            return <tr key={user.id}>   
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.street}</td>
                                    </tr>    
                        })
                   }
                </tbody>
            </Table>
        </div>
    )
}

export default Users;