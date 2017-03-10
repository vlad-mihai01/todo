import { email, signUpPassword, retypePassword, requiredField } from '../../../../helpers/redux_form/redux_validation.js';

const validate = values => {
  const errors = {}

  errors.email = email(values.email);
  errors.password = signUpPassword(values.password);
  errors.repassword = retypePassword(values.password, values.repassword);
  errors.firstname = requiredField(values.firstname);
  //errors.lastname = requiredField(values.lastname);

  return errors;
}

export default validate;
