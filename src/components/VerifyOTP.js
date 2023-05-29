import './verifyotp.css'
function VerifyOTP(){
    return(
        <div className="verify">
            <h1>Verify your OTP code here</h1>
        <form>
       <div className='container'>
            <input
            type = "text"
            placeholder = "OTP"
            name ="otp"
            />
            <button type="submit">Verify OTP</button>
            </div>
        </form>
    </div>    
     
    )
}
export default VerifyOTP