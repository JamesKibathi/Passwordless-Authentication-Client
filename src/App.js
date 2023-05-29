
import './App.css';
import Home from './pages/Home'
import Login from './components/Login';

import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path ="register" element={<Signup/>}/>
       
      </Routes>


    </div>
  );
}

export default App;
