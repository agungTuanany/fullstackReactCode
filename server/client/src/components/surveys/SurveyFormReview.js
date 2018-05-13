// SurveyFormReview to shows users their form input for review
import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ Oncancel }) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>
            <button
            className="yellow darken-3 btn-flat"
            onClick={onCancel}
            >
            </button>
        </div>

    );
};

function mapStateToProps(state) {
    // console.log(state);
    return { formValues: state.form.surveyForm.values};
};

export default connect(mapStateToProps)(SurveyFormReview);