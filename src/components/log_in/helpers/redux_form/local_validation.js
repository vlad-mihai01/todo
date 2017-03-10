import { email, logInPassword } from '../../../../helpers/redux_form/redux_validation.js';

const validate = values => {
  const errors = {}

  errors.email = email(values.email);
  errors.password = logInPassword(values.password);

  return errors;
}

export default validate;
