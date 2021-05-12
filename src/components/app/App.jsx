import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import RandMContainer from '../../containers/RandMContainer';
import RandMDetailContainer from '../../containers/RandMDetailContainer';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RandMContainer} />
        <Route path="/:id" component={RandMDetailContainer} />
      </Switch>
    </Router>
  )
}
