import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SigninPage from './pages/signin';
// import GlobalStyles from './components/GlobalStyles';


function App() {
  return (
    <Router >
      
      <Routes>
        
        <Route path='/' element={<Home/>} exact />
        <Route path='/signin' element={<SigninPage/>} exact />
      </Routes>
    
    </Router>
  );
}

export default App;
