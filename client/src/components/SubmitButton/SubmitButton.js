import React from 'react';

import './SubmitButton.css';

const SubmitButton = (props)=>{
    let {onSubmitClick, submitText} = props;
    return (
    <div className='smtBtnContainer'>
      <button className='smtBtn' type='submit' onClick={onSubmitClick}>{submitText}</button>
    </div>
    )
}

export default SubmitButton;