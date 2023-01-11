import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Transaction.css'
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
        <div className='transaction-info'>
            <article className='transaction'>
                <h2 className='name'>
                    {transaction.item_name}
                </h2>
                <table className='info-table'>
                    <tr className='date'>
                   <b> Date Of Transaction: </b> {transaction.date}
                    </tr>
                    <tr className='amount'>
                    <b>Amount: </b>{transaction.amount}
                    </tr>
                    <tr className='from'>
                    <b>From: </b> {transaction.from}
                    </tr>
                    <tr className='category'>
                    <b>Category: </b> {transaction.category}
                    </tr>
                </table>
            </article>
            <div className='buttons'>
                <button className='back' onClick={() => navigate('/')}><b>Back</b></button>
                <button className='edit' onClick={() => navigate(`/transactions/${index}/edit`)}><b>Edit</b></button>
                <button className='delete' onClick={handleDelete}><b>Delete</b></button>
            </div>
        </div>
    )
}