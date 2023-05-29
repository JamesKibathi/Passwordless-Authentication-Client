
import './App.css';
import Home from './pages/Home'
import Login from './components/Login';

import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import VerifyOTP from './components/VerifyOTP';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path ="register" element={<Signup/>}/>
        <Route path="verify_otp" element={<VerifyOTP/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
       
      </Routes>


    </div>
  );
}

export default App;
