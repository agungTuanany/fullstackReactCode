/**
@param BrowserRouter: is a brain react-router, a think tells react-router how to behave is a think that's look the current URL and changes the side of components later on visible on the screen any given time

@param Route : is a object of react component it's use to setup a rule between certain route that user might visit inside our application and set of the component so that will be actualy visible on the screen
*/

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//dumy commponets
const Header = () => <h2> Header </h2>
const Dashboard = () => <h2> Dashboard </h2>
const SurveyNew = () => <h2> SurveyNew </h2>
const Landing = () => <h2> Landing </h2>

const App = () => {
    return (
        <div>
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
};

export default App;