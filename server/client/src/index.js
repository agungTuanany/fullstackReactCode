/**
@param Provider is react component that knows how to rechanges from our redux store,
 anytime that redux store get some new state produce of it,
 the provider will inform all the child compoent.

@param store={store} is give as the ability to access data inside our application
 from deeply nested component by reaching directly to 'redux store'

The part IDEA behind redux is some arbitrary components can access the global data or
 global state inside our application by reaching directly to 'redux store'.

 @param materialzieCSS we import it after installing with npm. We not use
 relative path name ",/", whenever webpack parse anything import like this
 if you do not put relative path, webpack automatically assume that you try
 to specified npm module when module was installed on module directory
*/
import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// for test purpose only
import axios from "axios";
window.axios = axios;

// make a redux store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
