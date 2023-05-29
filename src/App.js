
import './App.css';
import Home from './pages/Home'
import Login from './components/Login';

import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import VerifyOTP from './components/VerifyOTP';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path ="register" element={<Signup/>}/>
        <Route path="verify_otp" element={<VerifyOTP/>}/>
       
      </Routes>


    </div>
  );
}

export default App;
