import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import formStyles from "../shared/formStyles.scss";
import FacebookLogin from "react-facebook-login";

const LoginForm = (props, context) => (
  <div className={formStyles.formComponent}>
    <form className={formStyles.form} onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        className={formStyles.textInput}
        name="username"
        value={props.usernameValue}
        onChange={props.handleInputChange}
      />
      <input
        type="password"
        placeholder="Password"
        className={formStyles.textInput}
        name="password"
        value={props.passwordValue}
        onChange={props.handleInputChange}
      />
      <input type="submit" value="Log in" className={formStyles.button} />
    </form>
    <span className={formStyles.divider}>or</span>

    <FacebookLogin
      appId="183543915797617"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.responseFacebook}
      cssClass={formStyles.facebookLink}
      icon="fa-facebook-square"
    />

    <span className={formStyles.forgotLink}>
      {context.t("Forgot password?")}
    </span>
  </div>
);

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  responseFacebook: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  t: PropTypes.func.isRequired
};

export default LoginForm;
