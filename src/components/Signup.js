import './signup.css';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root');

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true); // Show the confirmation modal
  };

  const handleConfirmation = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('phone_number', phone);

    try {
      const response = await fetch('http://127.0.0.1:8000/register/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        if (data.status === 'error') {
          setMessage(data.message);
        } else {
          setMessage('Account created successfully. Check your email and phone for OTP.');
          // Redirect to verify_otp route or perform any other desired action
          navigate('/verify_otp');
        }
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }

    setLoading(false);
    setShowConfirmation(false); // Hide the confirmation modal
  };

  const handleCancelConfirmation = () => {
    setShowConfirmation(false); // Hide the confirmation modal
    setMessage('Account creation canceled.');
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="signup-body">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label>Username : </label>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label>Email : </label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
          <label>Phone : </label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={handlePhoneChange}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Signing...' : 'Sign Me Up'}
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}

      <Modal
        isOpen={showConfirmation}
        onRequestClose={handleCancelConfirmation}
        contentLabel="Confirmation"
      >
        <h3>Confirm Account Creation</h3>
        <p>
          Username: {username}<br />
          Email: {email}<br />
          Phone: {phone}
        </p>
        <div>
          <button onClick={handleConfirmation} disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
          <button onClick={handleCancelConfirmation} disabled={loading}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Signup;
