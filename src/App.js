import './App.css';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Quickstart from './Pages/Quickstart';
import Resources from './Pages/Resources';
import Slackbot from './Pages/Slackbot';
import Get_Al from './Pages/Get_Al';
import Configration from './Pages/Configration';
import System from './Pages/System';
import Contact from './Pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quickstart" element={<Quickstart />} />
      <Route path="/resourcing" element={<Resources />} />
      <Route path='/slack_bot_setup' element={<Slackbot />} />
      <Route path='/gen_ai_configs/overview' element={<Get_Al />} />
      <Route path='/configuration_guide' element={<Configration />} />
      <Route path='/system_overview' element={<System />} />
      <Route path='/contact_us' element={<Contact />}  />
    </Routes>
  );
}

export default App;
