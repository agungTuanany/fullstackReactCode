/**
@ param { reduxForm }: is a helper to allow communicate with redux store
 take care calling action-creator, pulling data from redux-store and providing another component.
Clearly reduxForm is a connect helper library.
 */

 // SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
    { label: 'Survey Title', name: 'title'},
    { label: 'Subject Line', name: 'subject'},
    { label: 'Email Body', name: 'body'},
    { label: 'Recipient List', name: 'emails'}
];

class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={SurveyField}
                    type="type"
                    label={label}
                    name={name}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
}) (SurveyForm);