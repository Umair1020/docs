import './App.css';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Quickstart from './Pages/Quickstart';
import Resources from './Pages/Resources';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quickstart" element={<Quickstart />} />
      <Route path="/resourcing" element={<Resources />} />
    </Routes>
  );
}

export default App;
