const validateAuth = values => {
  const errors = {};

  if (!values.email || values.email.trim() === '') {
    errors.email = 'Enter a email';
  }

  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter a password';
  }

  return errors;
}

export default validateAuth;