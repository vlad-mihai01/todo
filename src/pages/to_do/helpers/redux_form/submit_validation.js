import axios from 'axios';
import { Field, reduxForm, SubmissionError, reset } from 'redux-form';

import {getTasks} from '../../../../actions';

const taskCreateRequest = (text, id) => (dispatch) => {
  return axios.post('./php/task_create.php',
    {
      text:text,
      account_id:id,
      done:0
    }).then((response)=>{
      if (!response.data.error) {
        dispatch(getTasks(id)).then()
        dispatch(reset('ToDo'));
      }
    })
}

export default taskCreateRequest;
