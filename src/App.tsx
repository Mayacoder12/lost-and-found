import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import Signup from './components/signup';
import ReportLost from './components/reportlost';
import ReportFound from './components/reportfound';
import Profile from './components/profile';
import LostItems from './components/lostitem';
import FoundItems from './components/founditem';

const App: React.FC = () => {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/report-found" element={<ReportFound />} />
        <Route path="/lost" element={<LostItems />} />
        <Route path="/found" element={<FoundItems />} />
      </Routes>      
    </Router>
  );
};

export default App;
