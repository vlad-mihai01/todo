import React from 'react';

const ReduxField = ({ input, label, type, meta: { touched, error, warning }, className, success, placeholder }) => {


  return(
  <div className={`form-group ${touched && error ? 'has-danger' : ''} ${touched && !error ? success : ''}`}>
    {label && <label className="form-control-label">{label}</label>}
    <div>
      <input {...input} placeholder={placeholder} type={type} className={`${className}`}/>
      {touched && ((error && <div className="form-control-feedback">{error}</div>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);
}

export default ReduxField;
