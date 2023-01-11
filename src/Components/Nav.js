import { Link } from 'react-router-dom'
import "./Nav.css";

export default function Nav() {
    return (
        <header className='navbar'>
            <article>
                <h1 className='title'>
                    <Link to="/">
                        Budgeting App
                    </Link>
                </h1>
            </article>
            <nav>
                <ul className='links'>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/transactions/new">
                            New
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}