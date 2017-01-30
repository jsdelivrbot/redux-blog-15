import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import validate from '../reducers/validate';

const renderInput = field =>   // Define stateless component to render input and errors
  <div>
    <input {...field.input} className="form-control" type={field.type}/>
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>


class PostsNew extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <Field
            name="title"
            type="text"
            className="form-control"
            component={renderInput} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <Field name="categories"
            type="text"
            className="form-control"
            component={renderInput} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <Field name="content"
            type="text"
            className="form-control"
            component={renderInput} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default connect(null, { createPost })(reduxForm({
  form: 'blogForm',
  validate
})(PostsNew));