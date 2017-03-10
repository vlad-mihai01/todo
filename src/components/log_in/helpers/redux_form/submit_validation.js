import axios from 'axios';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Link, browserHistory } from 'react-router';

import {login}  from '../../../../actions';


const loginRequest = (data) => (dispatch) => {

  return axios.post('./php/login.php',
    {
        email: data.email,
        password: data.password
    }).then((response) => {

      if(response.data.status == 'error') {
        console.log('Error!', response);

        throw new SubmissionError(response.data.error);

      } else {
        dispatch(login(response.data));
        sessionStorage.setItem('login', true);
        browserHistory.push('/todo/');

      }
    });

}


export default loginRequest;




//
// const loginRequest = (data) => new Promise((resolve, reject)=>{
//   axios.post('./php/login.php',
//   {
//       email: data.email,
//       password: data.password
//   })
//   .then(resolve)
//   .catch(reject)
// })
//
// export default loginRequest;
