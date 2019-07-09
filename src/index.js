import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ImageDetail from './components/image-detail'
import NotFound from './components/not-found'
import './styles/_main.scss';

const routing = (
  <Router>
      <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/imagedetail" component={ImageDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));


