import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import LoginHandler from './components/login/LoginHandler';

//pages
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginHandler />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
