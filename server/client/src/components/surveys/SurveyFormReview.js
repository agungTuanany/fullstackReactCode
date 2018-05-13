// SurveyFormReview to shows users their form input for review
import React from 'react';

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

export default SurveyFormReview;