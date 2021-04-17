import React from 'react';

import './App.css';

import HomePage from './pages/homepage/homepage.component'

import ShopPage from './pages/shop/shop.component'

import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'

import Header from './components/header/header.component'

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import {auth} from './firebase/firebase.util'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=> {
        this.setState({currentUser: user})
          console.log(user)
    })

  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component= {ShopPage} />
          <Route exact path='/signIn' component= {SignInSignUpPage} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
