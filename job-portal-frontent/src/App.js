// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import JobForm from "./JobForm";
import JobList from "./JobList";
import Login from "./Login";
import "./App.css";

// Dummy Components
function Home() {
  const fullText = "  Find Your Dream Job Now  ";
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <h2 className="tagline">{displayedText}</h2>
      <p>Your one-stop platform to post and manage job listings!</p>
    </div>
  );
}

function Register() {
  return (
    <div className="form-container">
      <h2>📝 Register Page</h2>
      <p>(Registration form to be implemented)</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="nav-container">
            <h1 className="logo">💼 Job Portal</h1>
            <nav className="nav-bar">
              <NavLink to="/" className="nav-button">Home</NavLink>
              <NavLink to="/add" className="nav-button">Add Job</NavLink>
              <NavLink to="/jobs" className="nav-button">View Jobs</NavLink>
              <NavLink to="/login" className="nav-button">Login</NavLink>
              <NavLink to="/register" className="nav-button">Register</NavLink>
            </nav>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<JobForm />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
