/**
@param BrowserRouter: is a brain react-router, a think tells react-router
 how to behave is a think that's look the current URL and changes the side
 of components later on visible on the screen any given time

@param Route : is a object of react component it's use to setup a rule
 between certain route that user might visit inside our application and
 set of the component so that will be actualy visible on the screen

 @param componentDidMount:
In future version of react the componentWillMount() method might be getting called multiple time automatically.
By convention componentDidMount() look upon as prefer location
 to make any tipe initial AJAX request

Essentially no big different with componentDidMount() and componentWillMout() from speed and request

 */

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
    // add on lifecycle method for fetch the current user
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
