// Validation functions

// E-mail validation
export const email = (value) => {
  if (!value || value.trim() === "" ){
    return "E-mail is required"
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return "That is not an e-mail address"
  }
}

// Log In password validation
export const logInPassword = (value) => {
  if (!value || value.trim() === "" ){
    return "Password is required"
  }
  else if (value.length <= 5) {
    return "Your password is longer then 5 charachters"
  }
}

// Sign Up password validation
export const signUpPassword = (value) => {
  if (!value || value.trim() === "" ){
    return "Password is required"
  }
  else if (value.length <= 5) {
    return "Your password needs to be longer then 5 charachters"
  }
}

// Sign Up retype password
export const retypePassword = (password, field) => {
  if (!field || field.trim() === "" ){
    return "Retype the password"
  }
  else if(password != field){
    return "Passwords don't match"
  }
}

// required field
export const requiredField = (value) => {
  if(!value || value.trim() === "" ){
    return "The field is required"
  }
}
