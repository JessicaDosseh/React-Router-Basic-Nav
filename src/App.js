import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom'; 

const App = () => {
  return (
    <div>

      <Route exact path='/' comment={Home} />
      <Route path='/about' componment={About} />
      <Route path='/contact' componment={Contact}/>

      <Navigation />
    </div>
  ); 
};
  

export default App;
