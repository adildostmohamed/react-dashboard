import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from 'actions/index';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  return errors;
};

class SignIn extends Component {
  handleFormSubmit = (values) => {
    this.props.signInUser(values);
  };

  renderField = ({ input, label, type, id, meta: { touched, error } }) => (
    <div>
      <div className={`${touched && error ? 'c-field__wrapper--error' : 'c-field__wrapper'}`}>
        <label htmlFor={id} className="c-label--light">{label}</label>
        <input id={id} {...input} className="c-input--light" type={type} />
        <span className="c-input__border--light"></span>
      </div>
      {touched && error && <div className="c-field__error-text help-block">{error}</div>}
    </div>
  );

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return <div className="c-form__notification--error">{ this.props.authenticationError }</div>;
    }
    return;
  }

  render() {
    return(
      <div className="p-auth">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                <fieldset>
                  <legend className="legend--light">Sign in</legend>
                  { this.renderAuthenticationError() }
                  <Field id="email" name="email" component={this.renderField} className="form-control" type="text" label="Email"/>
                  <Field id="password" name="password" component={this.renderField} className="form-control" type="password" label="Password"/>
                  <button action="submit" className="c-btn-primary">Sign In</button>
                </fieldset>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  }
}

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'signin',
  validate
})(SignIn));
