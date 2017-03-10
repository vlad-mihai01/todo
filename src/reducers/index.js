import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LogInReducer from './reducer_login';
import TasksReducer from './reducer_tasks';

const rootReducer = combineReducers({
  form: formReducer,
  account: LogInReducer,
  tasks: TasksReducer
});

export default rootReducer;
