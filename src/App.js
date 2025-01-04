// import React from 'react';
// import { Header } from './components/Header';
// import { Balance } from './components/Balance';
// import { IncomeExpenses } from './components/IncomeExpenses';
// import { TransactionList } from './components/TransactionList';
// import { AddTransaction } from './components/AddTransaction';

// import { GlobalProvider } from './context/GlobalState';

// import './App.css';

// function App() {
//   return (
//     <GlobalProvider>
//       <Header />
//       <div className="container">
//         <Balance />
//         <IncomeExpenses />
//         <TransactionList />
//         <AddTransaction />
//       </div>
//     </GlobalProvider>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Login from './Compound/Login/Login'
import Home from './Compound/Home/Home';
import History from './Compound/History/History';
import MonthlyTransaction from './Compound/MonthlyTransaction/MonthlyTransaction';
import Signup from './Compound/Login/Signup';
import Priority from './Compound/Priority/Priority';
import { Link } from 'react-scroll';





function App() {
   

  return (
    <div>
       
       
      
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/History' element={<History/>}></Route>
        <Route path='/MonthlyTransaction' element={<MonthlyTransaction/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Priority' element={<Priority/>}></Route>
      
       
       
        
      </Routes>
   
    </BrowserRouter>
    
    </div>
    
    
  )
}

export default App
