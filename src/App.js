import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Components
import Nav from './Components/Nav'
import Transactions from './Components/Transactions';
import Transaction from './Components/Transaction';
import New from './Components/New';
import Edit from './Components/Edit';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Transactions />} />
          <Route path='/transactions/:index' element={<Transaction />} />
          <Route path='/transactions/new' element={<New />} />
          <Route path='/transactions/:index/edit' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
