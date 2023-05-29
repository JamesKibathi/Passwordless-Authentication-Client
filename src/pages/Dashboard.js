import "./dashboard.css"
function Dashboard(){
    return(
        <div className="dashboard-container">
       
          <div className="welcome-message">
            <h2>Welcome, James!</h2>
            <button>Hide Welcome Message</button>
          </div>
        
  
        <button className="logout-button">Logout</button>
      </div>
    );
}

export default Dashboard