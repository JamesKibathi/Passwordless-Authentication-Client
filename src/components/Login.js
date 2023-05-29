import { Link } from "react-router-dom"
function Login(){
    return(
        <div>
        <h2> Please Login to access your Account</h2>
        <form>
        <input    
          type="text"
          placeholder="Email or Phone"
          value="email or phone"
    
        />
        <button type ="submit">Generate OTP</button>
        
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