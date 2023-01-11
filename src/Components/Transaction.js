import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const API = process.env.REACT_APP_API_URL

export default function Transaction() {
    const { index } = useParams()
    const [transaction, setTransaction] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        axios
        .get(`${API}/transactions/${index}`)
        .then((res) => setTransaction(res.data))
        .catch((err) => console.error(err))
    }, [index])

    function handleDelete() {
        axios
        .delete(`${API}/transactions/${index}`)
        .then(() => {
            navigate("/")
        })
        .catch((err) => console.error(err))
    }

    return (
        <div>
            <article>
                <h3>
                    {transaction.item_name}
                </h3>
                <table>
                    <tr>
                    Date Of Transaction: {transaction.date}
                    </tr>
                    <tr>
                    Amount: {transaction.amount}
                    </tr>
                    <tr>
                    From: {transaction.from}
                    </tr>
                    <tr>
                    Category: {transaction.category}
                    </tr>
                </table>
            </article>
            <div>
                <button onClick={() => navigate('/')}>Back</button>
                <button onClick={() => navigate(`/transactions/${index}/edit`)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}