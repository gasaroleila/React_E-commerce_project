import React from 'react';

import './App.css';

import HomePage from './pages/homepage/homepage.component'

import ShopPage from './pages/shop/shop.component'

import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'

import Header from './components/header/header.component'

import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'


import setCurrentUser from '../src/redux/user/user.action'

import {auth, createUserProfileDocument } from './firebase/firebase.util'



class App extends React.Component {

  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot=> {
           setCurrentUser({
             currentUser: {
               id: snapShot.id,
               ...snapShot.data()
             }
           })
        })

        
      }else {
        setCurrentUser({currentUser: userAuth})
      }

    })

  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component= {ShopPage} />
          <Route exact path='/signIn' render={ ()=> this.props.currentUser ? (
            <Redirect to='/'/>
          ):
          (
            <SignInSignUpPage/>
          )
        } />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
  
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
}) 

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
