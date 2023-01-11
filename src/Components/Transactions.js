import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import './Transactions.css'
const API = process.env.REACT_APP_API_URL

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios
        .get(`${API}/transactions`)
        .then((res) => {
            console.log(res.data)
            setTransactions(res.data)
        })
        .catch((err) => console.error(err))
    }, [])

    let total = transactions.reduce((acc, transaction) => {
        if (transaction.category === 'Income') {
          acc += Number(transaction.amount);
        } else if (transaction.category === 'Expense') {
          acc -= Number(transaction.amount);
        }
        return acc;
      }, 0);

    return (
        <div className='transactions'>
            <h2 className='pageTitle'>All Transactions</h2>
            <h2 className='funds'>Total Funds: <h2 style={{ color: total > 1000 ? 'green' :  total < 0 ? 'red' : 'gray' }}> ${total} </h2></h2>
            <hr></hr>
            {transactions.map((transaction, index) => {
                return (
                    <div className='transactionInfo' key={index}>
                        <h4 className="date">{transaction.date}</h4>
                        <Link to={`/transactions/${index}`}>
                            <h4>{transaction.item_name}</h4>
                        </Link>
                        <h4>${transaction.amount}</h4>
                        <h4>{transaction.category}</h4>
                        <hr></hr>
                        </div>
                    )
            })}
        </div>
    )
}