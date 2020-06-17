import React from 'react';
import './App.css';
import Homepage from './components/pages/homepage/homepage.component'
import Shop from './components/pages/shop/shop.component'
import { Switch,Route } from 'react-router-dom';
import Header from './components/header/header.component'

function App() {
  return ( 
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
