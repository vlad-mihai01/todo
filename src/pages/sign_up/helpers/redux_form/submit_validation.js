import axios from 'axios';
import {  SubmissionError } from 'redux-form';
import { browserHistory } from 'react-router';

const signUpRequest = (data) => {
  return axios.post('./php/account_create.php',
    {
      email: data.email,
      password: data.password,
      first_name: data.firstname,
      last_name: data.lastname
    }
  ).then((response)=>{
    if (!response.data.error) {
      browserHistory.push('/todo/');
    }
  })
}

export default signUpRequest;
