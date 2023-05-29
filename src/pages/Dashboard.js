import { useNavigate, useLocation } from "react-router-dom";
import "./dashboard.css"
function Dashboard() {
  const navigate = useNavigate()
//   const search = useLocation().search
//   const browserToken = search.split("=")[1]
// if (browserToken){
//   console.log("i have token")
// }else{
//   console.log("i dont have")
// }


  // console.log(browserToken)
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
          return localStorage.clear()
        }} className="logout-button">Logout</button>
      </div>
    );
  } else {
    return <div>Unauthorized Access!!</div>
  }

}

export default Dashboard