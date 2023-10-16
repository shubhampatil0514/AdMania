import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'
import CreateAd from './components/CreateAd';
import TextAdForm from './components/TextAdForm'
import MediaAdForm from './components/MediaAdForm'
import AdsSubmitted from './components/AdsSubmitted'


function App() { 
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/adpage" element={<CreateAd />} />
        <Route path="/text-ad" element={<TextAdForm />} />
        <Route path="/media-ad" element={<MediaAdForm />} />
        <Route path="/submit" element={<AdsSubmitted />} />
      </Routes>
    </Router> 
  );
}

export default App;
