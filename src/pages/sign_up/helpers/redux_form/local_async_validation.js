import axios from 'axios';

const asyncValidate = (values) => {
  return axios.post('./php/validation_email_username.php',
  {
    email:values.email,
    field:'email'
  }).then((response)=>{
    if(response.data.error){
        throw { email: response.data.message }
    }
  })
}

export default asyncValidate;
