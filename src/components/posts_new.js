import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import validate from '../reducers/validate';

const renderField = field =>   // Define stateless component to render input and errors
  <div>
    <input {...field.input} className="form-control" type={field.type}/>
    {field.meta.touched &&
     field.meta.error &&
     <div className={`text-help ${field.meta.error ? 'error-text' : ''}`}>{field.meta.error}</div>}
  </div>


class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <Field
            name="title"
            type="text"
            className="form-control"
            component={renderField} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <Field name="categories"
            type="text"
            className="form-control"
            component={renderField} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <Field name="content"
            type="text"
            className="form-control"
            component={renderField} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

export default connect(null, { createPost })(reduxForm({
  form: 'blogForm',
  validate
})(PostsNew));