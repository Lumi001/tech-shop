import React from 'react';
import './App.css';
import Homepage from './components/pages/homepage/homepage.component'
import Shop from './components/pages/shop/shop.component'
import { Switch,Route } from 'react-router-dom';
import Header from './components/header/header.component'
import SignInAndSignUp from './components/pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }
  
unsubscribeFromAuth = null;

componentDidMount() {
 this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user });

    console.log(user)
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render(){
  return ( 
    <div>
      <Header currentUser= {this.state.currentUser} />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route  path='/shop' component={Shop} />
      <Route  path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}
}

export default App;
