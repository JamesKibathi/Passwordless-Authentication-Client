import { useNavigate } from "react-router-dom";
import "./dashboard.css"
function Dashboard() {
  const navigate = useNavigate()
  const token = localStorage.getItem("jwtToken")
  console.log(token)
  if (token) {
    return (
      <div className="dashboard-container">

        <div className="welcome-message">
          <h2>Welcome, James!</h2>
          <button>Hide Welcome Message</button>
        </div>


        <button onClick={() => {
          navigate("/")
          localStorage.clear()
        }} className="logout-button">Logout</button>
      </div>
    );
  } else {
    return <div>Unauthorized Access!!</div>
  }

}

export default Dashboard