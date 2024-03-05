import './App.css';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Quickstart from './Pages/Quickstart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quickstart" element={<Quickstart />} />
    </Routes>
  );
}

export default App;
