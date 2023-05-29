import './verifyotp.css'
function VerifyOTP(){
    return(
        <div className="verify">
            <h1>Verify your OTP code here</h1>
        <form>
       <div className='container'>
            <input
            type = "text"
            placeholder = "Enter OTP Code Received"
            name ="otp"
            />
            <button type="submit">Verify</button>
            </div>
        </form>
    </div>    
     
    )
}
export default VerifyOTP