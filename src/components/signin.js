import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


const signInFields = field =>  // Define stateless component to render input and errors
  <div>
    <input {...field.input} className="form-control" type={field.type}/>
    {field.meta.touched &&
     field.meta.error &&
     <div className={`text-help ${field.meta.error ? 'error-text' : ''}`}>{field.meta.error}</div>}
  </div>


class Signin extends Component {
  handleSignin({ email, password }) {
    console.log(email, password)
  }

  render() {
    const { handleSubmit, fields: { email, password} } = this.props;

    return (
      <form>
        <fieldset onSubmit={handleSubmit(this.handleSignin.bind(this))} className="form-group">
          <label>Email:</label>
          <Field
            className="form-control"
            name="email"
            type="text"
            component={signInFields}/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field
            className="form-control"
            name="password"
            type="text"
            component={signInFields}/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);