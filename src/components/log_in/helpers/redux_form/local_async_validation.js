import axios from 'axios';


  const emailRequest = value => new Promise((resolve, reject)=>{
    axios.post('./php/login_email_check.php',
    {
        email: value
    })
      .then(resolve)
      .catch(reject)
    })


      const asyncValidate = (values) => {
        return emailRequest(values.email)
    .then((resolve) => {
      if (resolve.data.email == false) {
        throw { email: 'This e-mail is not registered' }
      }
    })
}



export default asyncValidate;
