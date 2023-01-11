import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import './Edit.css'

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
        <div className='edit-form'>
            <h3 className='edit-title'>Edit Transaction</h3>

            <form onSubmit={handleSubmit}>
                
                <label>
                    <b>Name:</b>{' '}
                    <input
                    className='name'
                    type='text'
                    id='item_name'
                    value={transaction.item_name}
                    onChange={handleTextChange}>
                    </input>
                </label>
                <br />
                <label>
                    <b>Amount:</b> {' '}
                    <input
                    className='amount'
                    id='amount'
                    value={transaction.amount}
                    type='number'
                    onChange={handleTextChange}>
                    </input>
                </label>
                <br />
                <label>
                    <b>Date:</b> {' '}
                    <input
                    className='date'
                    id='date'
                    value={transaction.date}
                    type='text'
                    onChange={handleTextChange}>
                    </input>
                </label>
                <br />
                <label>
                    <b>From:</b> {' '}
                    <input
                    className='from'
                    id='from'
                    value={transaction.from}
                    type='text'
                    onChange={handleTextChange}>
                    </input>
                </label>
                <br />
                <label>
                    <b>Category:</b>{' '}
                    <select
                    className='category'
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
                
                <button type='submit'>
                    Save
                </button>

            </form>
        </div>
    )
}
