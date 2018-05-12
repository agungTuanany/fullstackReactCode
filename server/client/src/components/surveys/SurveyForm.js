/**
@ param { reduxForm }: is a helper to allow communicate with redux store
 take care calling action-creator, pulling data from redux-store and providing another component.

 Clearly reduxForm is a connect helper library.
 */
// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends Component {
    render() {
        return (
            <div>
                SurveyForm!
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
}) (SurveyForm);