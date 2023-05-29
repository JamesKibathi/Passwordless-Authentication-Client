function VerifyOTP(){
    return(
        <div className="verify">
        <form>
            <input
            type = "text"
            placeholder = "OTP"
            name ="otp"
            />
            <button type="submit">Verify OTP</button>
        </form>
        </div>
    )
}
export default VerifyOTP