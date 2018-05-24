import React from "react";
import styles from "./styles.scss";
import { LoginForm, SignupForm } from "components/AuthForms";
import PropTypes from "prop-types";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <img
        src={require("images/androidandiphone.png")}
        alt="Checkout our app. Is cool"
      />
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("images/logo.png")} alt="Logo" />
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "login" && (
          <p>
            {context.t("Don't have an account?")}{" "}
            <span className={styles.changeLink} onClick={props.changeAction}>
              {context.t("Sign up")}
            </span>
          </p>
        )}
        {props.action === "signup" && (
          <p>
            {context.t("Have an account?")}{" "}
            <span className={styles.changeLink} onClick={props.changeAction}>
              {context.t("Log in")}
            </span>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>{context.t("Get the app")}</span>
        <div className={styles.appstores}>
          <img
            src={require("images/AppStore.png")}
            alt="Download it on the Apple Appstore"
          />
          <img
            src={require("images/GooglePlay.png")}
            alt="Download it on the Apple Appstore"
          />
        </div>
      </div>
    </div>
  </main>
);

Auth.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Auth;
