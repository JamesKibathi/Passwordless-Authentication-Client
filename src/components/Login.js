import { Link } from "react-router-dom"
import "./forms.css"
function Login(){
    return(
        <div className="login-body">
        <h2> Please Login to access your Account</h2>
        <form>
        <div className="container">
        <input    
          type="text"
          placeholder="Email or Phone"
          value="email or phone"
    
        />
        <button type ="submit">Generate OTP</button>
       
      </div>  
        </form>
        <p>
        Don't have an account?
          <span>
          <Link to="register">Sign up here</Link>
          </span>
        </p>
       
        </div>
    )
}

export default Login