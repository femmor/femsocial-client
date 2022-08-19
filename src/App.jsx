import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopBar } from './components';
import { Profile, Home, Login, Register } from './pages';

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
