import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProF from './components/ProFile';
import SetFooter from './components/Footer';


const App = () => {
  return (
    <div className='App'>
      <Header />
      <Navigation />
      <ProF />
      <SetFooter />
    </div>
  )
}

export default App