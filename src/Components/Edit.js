import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function Edit() {
    let { index } = useParams()
    const navigate = useNavigate()
    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
        id: 0,
    })

    const handleTextChange = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    }

    useEffect(() => {
        axios
          .get(`${API}/transactions/${index}`)
          .then((res) => {
            setTransaction(res.data);
          })
          .catch((err) => console.log(err));
      }, [index])

      const handleSubmit = (e) => {
        e.preventDefault()
        axios
        .put(`${API}/transactions/${index}`, transaction)
        .then((res) => {
            setTransaction(res.data)
            navigate(`/transactions/${index}`)
        })
        .catch((err) => console.error(err))
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
                    <input
                    id='category'
                    value={transaction.category}
                    type='text'
                    onChange={handleTextChange}>
                    </input>
                </label>
                <br />
                
                <button type='submit'>
                    Save
                </button>

            </form>
        </div>
    )
}
