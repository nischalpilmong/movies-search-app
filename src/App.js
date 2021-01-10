import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';
import Landing from './components/home/Landing';
import store from './store';
import {Provider} from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import MovieDetails from './components/home/MovieDetails'

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Router>
          <div>
             <Navbar />
             <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/movie/:id" component={MovieDetails}/>
             </Switch>
             <Footer />
          </div>         
        </Router>       
      </Provider>
    );
  }
}

export default App;
