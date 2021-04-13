import './App.css';

import HomePage from './pages/homepage/homepage.component'

import ShopPage from './pages/shop/shop.component'

import Header from './components/header/header.component'

import { Switch, Route, BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component= {ShopPage} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
