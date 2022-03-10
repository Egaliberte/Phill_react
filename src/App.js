import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ProF from './components/Main/ProFile/ProFile';
import SetFooter from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';


const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header />
      <Navigation />

      <div className='Main-Class-Wrapper'>
        <Routes>
        <Route path="/ProFile" element={<ProF />} />
        <Route path="/Dialogs" element={<Dialogs />} />
        <Route path="/News" element={<News />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Videos" element={<Videos />} />
        </Routes>
      </div>

      <SetFooter />
    </div>
    </BrowserRouter>
  )
}


export default App 