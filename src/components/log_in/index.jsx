import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Link, browserHistory } from 'react-router';

import ReduxField from '../../helpers/redux_form/redux_field.jsx';
import validate from './helpers/redux_form/local_validation.js'
import asyncValidate from './helpers/redux_form/local_async_validation.js'
import loginRequest from './helpers/redux_form/submit_validation.js'
import {login}  from '../../actions';

class LogIn extends Component {
  constructor(props){
    super(props)

    this.submit=this.submit.bind(this)
  }

  submit(data){

    return this.props.loginRequest(data);

      // return loginRequest(data)
      // .then((resolve) => {
      //
      //   throw new SubmissionError({  email: 'TEst', password: 'Password incorrect', _error: 'Login failed!' })
      //
      //
      //       console.log('resolve', resolve)
      //       if (!resolve.data) {
      //         alert('test')
      //       }
      //       else {
      //         this.props.login(resolve.data);
      //         sessionStorage.setItem('login', true);
      //         browserHistory.push('/todo/');
      //         }
      //       }
      // )
  }

  render(){
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.submit)} className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h3>Log In</h3>

          <Field name="email"
                 component={ReduxField}
                 type="text" label="E-mail"
                 placeholder="E-mail"
                 className="form-control"
                 success="has-success"/>

          <Field name="password"
                 component={ReduxField}
                 type="password" label="Password"
                 placeholder="Password"
                 className="form-control" />


        <Link to="/todo/signup"><p>You don't have an account ?</p></Link>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    );
  }
}

LogIn = reduxForm({
  form: 'LogIn',
  validate,
  asyncValidate,
  asyncBlurFields: [ 'email' ]
})(LogIn);


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login, loginRequest }, dispatch);
}

LogIn = connect(null, mapDispatchToProps)(LogIn)

export default LogIn;
