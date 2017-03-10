import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Link, browserHistory } from 'react-router';

import ReduxField from '../../helpers/redux_form/redux_field.jsx';
import validate from './helpers/redux_form/local_validation.js'
import asyncValidate from './helpers/redux_form/local_async_validation.js'
import signUpRequest from './helpers/redux_form/submit_validation.js'


class SignUp extends Component {
  constructor(props){
    super(props)
  }

  submit(data){
   return signUpRequest(data)
  }

  render(){
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.submit)} className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h3>Sign Up</h3>

         <Field name="email"
                component={ReduxField}
                type="text" label="* E-mail"
                placeholder="E-mail"
                className="form-control"
                success="has-success"
              />
          <Field name="password"
                 component={ReduxField}
                 type="password" label="* Password"
                 placeholder="Password"
                 className="form-control"
               />
         <Field name="repassword"
                component={ReduxField}
                type="password" label="* Retype password"
                placeholder="Retype password"
                className="form-control"
                success="has-success"
              />
         <Field name="firstname"
                component={ReduxField}
                type="text" label="* First name"
                placeholder="First name"
                className="form-control"
              />
        <Field name="lastname"
               component={ReduxField}
               type="text" label="Last name"
               placeholder="Last name"
               className="form-control"
             />

        <button type="submit" className="btn btn-primary">Sign Up</button>


      </form>
    );
  }
}

SignUp = reduxForm({
  form: 'SignUp',
  validate,
  asyncValidate,
  asyncBlurFields: [ 'email' ]
})(SignUp);
//
// function mapStateToProps(state) {
//   return state;
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({}, dispatch);
// }

//SignUp = connect(mapStateToProps)(SignUp);

export default SignUp;
