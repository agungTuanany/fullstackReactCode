// SurveyFormReview to shows users their form input for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyFormReview = ({ Oncancel, formValues }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 btn-flat" onClick={onCancel}>
            </button>
        </div>

    );
};

function mapStateToProps(state) {
    // console.log(state);
    return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps)(SurveyFormReview);