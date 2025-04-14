import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "./Login";
import { Chatbot } from "./Chatbot";
import { Home } from "./Home";
const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link>||
        <Link to="/">Chatbot</Link>
        <Link to="/Home">Home</Link>
      </nav>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Chatbot />} />
            <Route path="/Home" element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;