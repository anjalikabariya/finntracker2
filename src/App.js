import React, {useContext} from 'react';
import { LogIn, SignUp} from './components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {HomePage, NewsPage, TrackerPage} from './Pages';
import {firebaseAuth} from './context/Auth';

function App () {
  const {token} = useContext(firebaseAuth);
    return (
      <div>
        <Router>
          
          <Switch>
            <Route exact path='/' render={rProps => !!token ? <HomePage {...rProps}/> : <LogIn />} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" exact component={LogIn} />
            <Route
              path="/home"
              render={rProps => !!token ? <HomePage {...rProps}/> : <LogIn />} 
            />
            <Route
              path="/news"
              render={rProps => !!token ? <NewsPage {...rProps}/> : <LogIn />} 
            />
            <Route
              path="/tracker"
              render={rProps => !!token ? <TrackerPage {...rProps}/> : <LogIn />} 
            />
          </Switch>
        </Router>
      </div>
    )
}

export default App;