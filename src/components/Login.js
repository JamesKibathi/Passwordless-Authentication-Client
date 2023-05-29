import { useNavigate,Link } from "react-router-dom"
import "./login.css"
import { useState } from "react";
function Login(){

  const [identifier, setIdentifier] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('identifier', identifier);

    try {
      const response = await fetch('http://localhost:8000/login/',{
        method: 'POST',
        body: formData,

      });
      const data = await response.json();

      if(response.ok){
        if (data.status =='error'){
          setMessage(data.message);
        } else{
          setMessage('Login successful. Check phone or email for OTP code');
           // Redirect to verify_otp route
            // window.location.href = '/verify_otp';
          navigate('/verify_otp')  
        }
      }else{
        setMessage('Login failed. Please try again')
      }
    }catch(error){
      setMessage('An error occured. Please try again later')
    }
     setLoading(false);
  };

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value);
  };


    return(
        <div className="login-body">
        <h2> Please Login to access your Account</h2>
        <form onSubmit={handleSubmit}>
        <div className="container">
        <input    
          type="text"
          placeholder="Email or Phone"
          value={identifier}
          onChange ={handleIdentifierChange}
    
        />
        <button type ="submit" disabled={loading}>
          {loading ? 'Generating OTP...' : 'Generate OTP'}
          
          </button>
       
      </div>  
        </form>
        <p>
        Don't have an account?
          <span>
          <Link to="register">Sign up here</Link>
          </span>
        </p>
       {message && <p>{message}</p>}
        </div>
    );
}

export default Login