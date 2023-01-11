import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuid } from "uuid";
const API = process.env.REACT_APP_API_URL

export default function New() {
    const navigate = useNavigate()
    const [transaction, setTransaction] = useState({
            item_name: "",
            amount: 0,
            date: "",
            from: "",
            category: "",
            id: uuid(),
        })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .post(`${API}/transactions`, transaction)
        .then(() => navigate('/'))
        .catch((err) => console.error(err))
    }

    const handleTextChange = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    }

    return (
        <div>
            <h3>Add New Transaction</h3>

            <form onSubmit={handleSubmit}>
                
                <label>
                    Transaction Name: {' '}
                    <input
                    type='text'
                    id='item_name'
                    value={transaction.item_name}
                    onChange={handleTextChange}>
                    </input>
                </label>
                <br />
                <label>
                    Amount: {' '}
                    <input
                    id='amount'
                    value={transaction.amount}
                    type='number'
                    onChange={handleTextChange}>
                    </input>
                </label>
                <br />
                <label>
                    Date: {' '}
                    <input
                    id='date'
                    value={transaction.date}
                    type='text'
                    onChange={handleTextChange}>
                    </input>
                </label>
                <br />
                <label>
                    From: {' '}
                    <input
                    id='from'
                    value={transaction.from}
                    type='text'
                    onChange={handleTextChange}>
                    </input>
                </label>
                <br />
                <label>
                    Category: {' '}
                    <select
                    id='category'
                    value={transaction.category}
                    onChange={handleTextChange}>
                        <option value='' id=''>
                            Choose Category
                        </option>
                        <option value='Income'>Income</option>
                        <option value='Expense'>Expense</option>
                    </select>
                </label>
                <br />
                
                <input type='submit' />

            </form>
        </div>
    )
}