import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import formStyles from "../shared/formStyles.scss";
import FacebookLogin from "react-facebook-login";

const SignupForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <h3>{context.t("Sign up to see photos and videos from your friends.")}</h3>
    <FacebookLogin
      appId="183543915797617"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.handleFacebookLogin}
      cssClass={formStyles.button}
      icon="fa-facebook-square"
    />
    <span className={formStyles.divider}>{context.t("or")}</span>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type="email"
        placeholder={context.t("Email")}
        className={formStyles.textInput}
        name="email"
        value={props.emailValue}
        onChange={props.handleInputChange}
      />
      <input
        type="text"
        placeholder={context.t("Full Name")}
        className={formStyles.textInput}
        name="fullName"
        value={props.fullNameValue}
        onChange={props.handleInputChange}
      />
      <input
        type="username"
        placeholder={context.t("Username")}
        className={formStyles.textInput}
        name="username"
        value={props.usernameValue}
        onChange={props.handleInputChange}
      />
      <input
        type="password"
        placeholder={context.t("Password")}
        className={formStyles.textInput}
        name="password"
        value={props.passwordValue}
        onChange={props.handleInputChange}
      />
      <input
        type="submit"
        value={context.t("Sign up")}
        className={formStyles.button}
      />
    </form>
    <p>
      {context.t("By signing up, you agree to our")}{" "}
      <span>{context.t("Terms & Privacy Policy")}</span>.
    </p>
  </div>
);

SignupForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  fullNameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default SignupForm;
