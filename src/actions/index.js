import React from 'react';
import axios from 'axios';
import { SubmissionError } from 'redux-form'

export const LOGIN = "LOGIN";
export function login (data) {
    return{
      type:LOGIN,
      payload:data
    }
}


export const SIGNOUT = "SIGNOUT";
export function signOut () {
  sessionStorage.removeItem('login');
  const out = false;

  return{
    type: SIGNOUT,
    payload: out
  }
}

export const GETTASKS = "GETTASKS";
export function getTasks(id){
  const request = axios({
    method:'post',
    url:'./php/task_retrieve.php',
    data:{
      account_id:id
    }
  })

  return {
    type: GETTASKS,
    payload: request
  }
}

export const DELETTASK = "DELETTASK";
export function taskDelete(id){
  const request = axios({
    method:'delete',
    url:'./php/task_delete.php',
    data:{
      task_id:id
    }
  })

  return(dispatch)=>{
    request.then((response)=>{
      if (!response.data.error) {
        dispatch({type: DELETTASK, payload: id})
      }
    })
  }
}
