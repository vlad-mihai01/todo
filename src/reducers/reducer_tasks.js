import { GETTASKS, DELETTASK } from '../actions';

export default function(state=[], action){
  switch (action.type) {
    case GETTASKS:
        return [...action.payload.data.tasks.reverse()]

    case DELETTASK:
      return state.filter(task=>task.id != action.payload);


    default:
    return state;

  }
}
