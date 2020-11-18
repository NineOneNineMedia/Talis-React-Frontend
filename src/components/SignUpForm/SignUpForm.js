import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import TalisLogo from "../../assets/img/navbar-logo.svg";
import Snackbar from "@material-ui/core/Snackbar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { LinearProgress } from "@material-ui/core";
import { Redirect } from "react-router-dom";
// import { TextField } from 'formik-material-ui';
import * as actions from "../../store/actions/auth";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Talis
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    width: 250,
    height: "auto",
    marginBottom: theme.spacing(3),
  },
}));

function SignUpForm(props /* { loading, authFail } */) {
  const classes = useStyles();
  // const responseGoogle = (response) => {
  //   console.log(response);
  //   const access_token = response.accessToken;
  //   props.googleAuth(access_token);
  // };

  // const responseFacebook = (response) => {
  //   console.log("Login Result", response);
  //   const access_token = response.accessToken;
  //   props.facebookAuth(access_token);
  // };

  // if (props.isAuthenticated) {
  //   return <Redirect to="/" />;
  // }

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      console.log("error");
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <a href="/">
          <img className={classes.logo} src={TalisLogo} alt="Talis Logo" />
        </a>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {error && alert(error)}
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="username"
                label="Create Username"
                name="username"
                // value={values.username}
                // onChange={handleChange}
                // helperText={touched.username ? errors.username : ""}
                // error={touched.username && Boolean(errors.username)}
                autoComplete="lname"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                inputRef={emailRef}
                // onChange={handleChange}
                // helperText={touched.email ? errors.email : ""}
                // error={touched.email && Boolean(errors.email)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="password1"
                label="Password"
                type="password"
                inputRef={passwordRef}
                // onChange={handleChange}
                // helperText={touched.password1 ? errors.password1 : ""}
                //error={touched.password1 && Boolean(errors.password)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="password2"
                label="Confirm Password"
                type="password"
                inputRef={passwordConfirmRef}
                //value={values.password2}
                // onChange={handleChange}
                // helperText={touched.password2 ? errors.password2 : ""}
                //error={touched.password2 && Boolean(errors.password2)}
              />
            </Grid>
          </Grid>
          <br />
          {loading && <LinearProgress />}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            Sign Up
          </Button>
        </form>
        {/* <Formik
          initialValues={{
            username: "",
            email: "",
            password1: "",
            password2: "",
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("required"),
            email: Yup.string().email().required("Required"),
            password1: Yup.string()
              .min(8, "Password must contain at least 8 characters")
              .required("Enter your password"),
            password2: Yup.string()
              .required("Confirm your password")
              .oneOf([Yup.ref("password1")], "Password does not match"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              props.onAuth(
                values.username,
                values.email,
                values.password1,
                values.password2
              );
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
        >
          {({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="username"
                    label="Create Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    helperText={touched.username ? errors.username : ""}
                    error={touched.username && Boolean(errors.username)}
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    helperText={touched.email ? errors.email : ""}
                    error={touched.email && Boolean(errors.email)}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password1"
                    label="Password"
                    type="password"
                    value={values.password1}
                    onChange={handleChange}
                    helperText={touched.password1 ? errors.password1 : ""}
                    error={touched.password1 && Boolean(errors.password)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password2"
                    label="Confirm Password"
                    type="password"
                    value={values.password2}
                    onChange={handleChange}
                    helperText={touched.password2 ? errors.password2 : ""}
                    error={touched.password2 && Boolean(errors.password2)}
                  />
                </Grid>
              </Grid>
              <br />
              {isSubmitting && <LinearProgress />}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isSubmitting}
              >
                Sign Up
              </Button>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={9}>
                  <GoogleLogin
                    clientId="546087303051-a1j9lmu3d4i7m49qq5chv84qnlsgnrb3.apps.googleusercontent.com"
                    //buttonText="Sign in with Google"
                    redirectUri="http://127.0.0.1:8000/accounts/google/login/callback/"
                    responseType="id_token code"
                    accessType="offline"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                    render={(renderProps) => (
                      <GoogleLoginButton
                        style={{ width: "100%" }}
                        align="center"
                        onClick={renderProps.onClick}
                      >
                        <span>Sign up with Google</span>
                      </GoogleLoginButton>
                    )}
                  />
                  <FacebookLogin
                    appId="993355947742556"
                    fields="name,email,picture"
                    responseType="id_token code"
                    // onSuccess={responseFacebook}
                    // onFailure={responseFacebook}
                    callback={responseFacebook}
                    render={(renderProps) => (
                      <FacebookLoginButton
                        style={{ width: "100%" }}
                        align="center"
                        onClick={renderProps.onClick}
                      >
                        <span>Sign up with Facebook</span>
                      </FacebookLoginButton>
                    )}
                  />
                </Grid>
                <Grid item>
                  <Link href="/login" variant="h6">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik> */}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    isAuthenticated: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignUp(username, email, password1, password2)),
    googleAuth: (access_token) => dispatch(actions.authGoogleUser(access_token)),
    facebookAuth: (access_token) => dispatch(actions.authFacebookUser(access_token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
