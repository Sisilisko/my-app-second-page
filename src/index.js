import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Summer from './Summer';
import Price from './prices';
import About_us from './about_us';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {createStore, combineReducers} from "redux";
import reducers from "./reducers";
import {Provider} from "react-redux"

const store = createStore(combineReducers(reducers), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Rout = function() {
    return (<Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/schedule/" component={App} />
            <Route path="/summer_school/" component={Summer} />
            <Route path="/prices/" component={Price} />
            <Route path="/about_us/" component={About_us} />
        </Switch>
    </Router>);
};

ReactDOM.render(<Provider store={store}><Rout/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
