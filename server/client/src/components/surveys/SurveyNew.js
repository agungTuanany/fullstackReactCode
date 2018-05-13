/**
@param state = {fromReview: false} is equivalent with classic way
    constructor(props) {
        super(props);
        this.state = {new: false};
    }

for creating component-level-state, with babel plugin that allow us
 initialize the state with slightly different passion.

@param onSurveySubmit: is a callback, was called if SurveyForm is successfully submitted on
*/
// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <SurveyFormReview />
        }

        return <SurveyForm
            onSurveySubmit={() => this.setState({ showFormReview: true })}
        />
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default SurveyNew;