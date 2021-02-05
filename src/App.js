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
            <Route exact path='/' render={rProps => !!token ? <HomePage /> : <LogIn />} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" exact component={LogIn} />
            <Route
              path="/home"
              render={(props) => <HomePage {...props} />}
            />
            <Route
              path="/news"
              render={(props) => <NewsPage {...props} />}
            />
            <Route
              path="/tracker"
              render={(props) => <TrackerPage {...props} />}
            />
          </Switch>
        </Router>
      </div>
    )
}

export default App;