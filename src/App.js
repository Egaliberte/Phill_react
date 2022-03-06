import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import ProF from './components/Main/ProFile/ProFile';
import SetFooter from './components/Footer/Footer';


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