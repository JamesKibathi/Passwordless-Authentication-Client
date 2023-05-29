import './verifyotp.css'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
function VerifyOTP() {
    const [otp, setOTP] = useState('');
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true)

        const formData = new FormData();
        formData.append('otp', otp);

        // draftds
        // fetch("http://127.0.0.1:8000/verify-otp/", {
        //     method: "POST",
        //     body: formData
        // }).then(res => res.json()).then(data => console.log(data))
        // localStorage.setItem("jwtToken", data.jwt_token)
        // navigate("/dashboard")
        // console.log(data)}).catch(err => console.log(err))
        try {




            const response = await fetch('http://127.0.0.1:8000/verify-otp/', {
                method: 'POST',
                body: formData

            });
            const data = await response.json();

            if (response.ok) {
                if (data.status === 'error') {
                    setMessage(data.message);
                }
                else {
                    // OTP Verified successfully
                    const jwtToken = data.jwt_token;
                    // console.log(jwtToken)

                    // Store JWT on local storage
                    localStorage.setItem('jwtToken', jwtToken);

                    // Redirect to dashboard
                    // window.location.href = '/dashboard';
                    navigate('/dashboard')
                }
            } else {
                setMessage('OTP verification failed.Please try again!')
            }
        } catch (error) {
            setMessage('There was an error. Please try again later')
        }

        setLoading(false);

    };

    const handleOTPChange = (e) => {
        setOTP(e.target.value)
    }

    return (
        <div className="verify">
            <h1>Verify your OTP code here</h1>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <input
                        type="text"
                        placeholder="Enter OTP Code Received"
                        value={otp}
                        onChange={handleOTPChange}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Verifying... ' : 'Verify'}
                    </button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>

    );
};
export default VerifyOTP