import { requiredField } from '../../../../helpers/redux_form/redux_validation.js';

const validate = values => {
  const errors = {}

  errors.task = requiredField(values.task);
  //errors.lastname = requiredField(values.lastname);

  return errors;
}

export default validate;
