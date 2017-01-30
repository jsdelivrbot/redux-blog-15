const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.categories) {
    errors.categories = 'Enter a categories';
  }

  if (!values.content) {
    errors.content = 'Enter a content';
  }

  return errors;
}

export default validate;