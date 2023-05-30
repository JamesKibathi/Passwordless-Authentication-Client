import { useNavigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./dashboard.css"
import { useEffect, useState } from "react";

function Dashboard() {
  const navigate = useNavigate()
  const location = useLocation()
  const [decodedToken, setDecodedToken] = useState(undefined)
  const [showWelcome, setShowWelcome] = useState(true);
  const queryParams = new URLSearchParams(location.search);
  const queryToken = queryParams.get("token");


  useEffect(() => {

    try {
      const token = jwt_decode(queryToken);

      if (token) {
        console.log("valid token")
        setDecodedToken(token)
        return
      }
      console.log("invalid token")
    } catch (error) {
      console.log(error.message)
    }

    console.log(decodedToken)
  }, [decodedToken])


  const token = localStorage.getItem("jwtToken")
  // console.log(token)

  if (token) {
    return (
      <div className="dashboard-container">
        {showWelcome && (
          <div className="welcome-message">
            <h2>Hello & Welcome!</h2>
            <button onClick={() => setShowWelcome(false)}>Hide Welcome Message</button>
          </div>
        )}


        <button onClick={() => {
          navigate("/")
          return localStorage.clear()
        }} className="logout-button">Logout</button>
      </div>
    );
  } else if (decodedToken) {
    return (
      <div className="dashboard-container">
        {showWelcome && (
          <div className="welcome-message">
            <h2>Hello & Welcome!</h2>
            <button onClick={() => setShowWelcome(false)}>Hide Welcome Message</button>
          </div>
        )}

        <button onClick={() => {
          navigate("/")
          return localStorage.clear()
        }} className="logout-button">Logout</button>
      </div>
    );

  } else {
    return <div>Unauthorized Access!!</div>
  }

}

export default Dashboard