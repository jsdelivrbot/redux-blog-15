import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validateAuth from '../reducers/validate_auth';
import * as actions from '../actions'


const signInFields = field =>  // Define stateless component to render input and errors
  <div>
    <input {...field.input} className="form-control" type={field.type}/>
    {field.touched &&
     field.error &&
     <div className={`text-help ${field.error ? 'error-text' : ''}`}>{field.error}</div>}
  </div>


class Signin extends Component {
  handleSignin({ email, password }) {
    console.log(email, password);

    this.props.signInUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return(
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSignin.bind(this))}>
        <fieldset className="form-group">
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
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error}
}

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'signin',
  validateAuth
})(Signin));

// export default reduxForm({
//   form: 'signin',
//   validateAuth
// })(Signin);