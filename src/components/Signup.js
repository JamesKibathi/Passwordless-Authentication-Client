import './signup.css'
function Signup(){
    return(
        <div className="signup-body">
        <h1>Create Account</h1>
        <form>
        <div className="container">
            <label>Username : </label>
            <input  type="text" placeholder="Enter Username"  name="username"    />
            <label>Email : </label>
            <input  type="email" placeholder="Enter Email"  name="email" />
            <label>Phone : </label>
            <input type="text" placeholder="Enter Phone Number" name="phone_number" />
            <button type="submit">Sign Me Up</button>
          </div>

        </form>
        </div>
    )
}
export default Signup