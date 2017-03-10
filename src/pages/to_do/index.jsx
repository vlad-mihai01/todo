import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Link, browserHistory } from 'react-router';

import ReduxField from '../../helpers/redux_form/redux_field.jsx';
import { getTasks, taskDelete } from '../../actions';

import taskCreateRequest from './helpers/redux_form/submit_validation';
import validate from './helpers/redux_form/local_validation.js'

class ToDo extends Component {
  constructor(props){
    super(props)

    this.submit=this.submit.bind(this);
  }

componentWillMount(){
  if (this.props.account && this.props.account.id) {
    this.props.getTasks(this.props.account.id);
  }
  else {
    browserHistory.push('/todo/');
  }
}

renderTasks(){
  if (this.props.tasks && this.props.tasks[0]) {
    return this.props.tasks.map((task)=>{
      return(
        <li className="list-group-item" key={task.id}>
          <div className="col-10">
            {task.text}
          </div>
          <div className="col-2">
            <button onClick={()=>{this.props.taskDelete(task.id)}}
                    className="btn btn-success btn-sm float-right">Done</button>
          </div>
        </li>
      )
    })
  }
  else {
    return <p>Find something to do first</p>
  }
}

submit(data){
  this.props.taskCreateRequest(data.task, this.props.account.id);
}

render(){
  const { handleSubmit } = this.props;
  return(
  <div className="col-12">

    <form onSubmit={handleSubmit(this.submit)} className="row">
      <div className="col-8 col-sm-10 ">
        <Field name="task"
               component={ReduxField}
               placeholder="Add new task"
               type="text"
               className="form-control"
             />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </form>

    <div className="row">
      <div className="col-12">
        <h4>{this.props.account.first_name} you have to:</h4>
      </div>
      <div className="col-12">
        <div className="list-group">
          {this.renderTasks()}
        </div>
      </div>
    </div>
  </div>
  );
}

}

ToDo = reduxForm({
  form: 'ToDo',
  validate
})(ToDo);

function mapStateToProps(state) {
  return {
            account: state.account,
            tasks: state.tasks
          }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getTasks, taskDelete, taskCreateRequest}, dispatch);
}

ToDo= connect(mapStateToProps, mapDispatchToProps)(ToDo)

export default ToDo;
