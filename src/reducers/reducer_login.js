import {LOGIN, SIGNOUT} from '../actions';

export default function(state=[], action){
  switch (action.type) {
    case LOGIN:

      return {...action.payload.account}


    case SIGNOUT:
      return { ...action.payload}

    default:
        return state;
  }

}
