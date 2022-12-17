import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Homepage from './page/Homepage';
import ServicePage from './page/ServicePage';
import Contact from './page/Contact';
import About from './page/About';
import Topbar from './component/Topbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
