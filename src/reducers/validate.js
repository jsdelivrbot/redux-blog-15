const validate = values => {
  const errors = {};

  if (!values.title || values.title.trim() === '') {
    errors.title = 'Enter a title';
  }

  if (!values.categories || values.categories.trim() === '') {
    errors.categories = 'Enter a categories';
  }

  if (!values.content || values.content.trim() === '') {
    errors.content = 'Enter a content';
  }

  return errors;
}

export default validate;