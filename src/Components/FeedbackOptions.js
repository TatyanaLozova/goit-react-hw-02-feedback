import React from 'react';
import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'



const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            <div  className={s.btn}>
            {options.map((feedbac) => (
              <button className={s.button } key={feedbac} type="button" name={feedbac} onClick={onLeaveFeedback}>
                    {feedbac}
                </button>                               
            ))}
            </div>
        </>
    );
};

FeedbackOptions.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;