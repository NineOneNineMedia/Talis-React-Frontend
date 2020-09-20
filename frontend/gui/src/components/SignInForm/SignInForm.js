import React from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import TalisLogo from '../../assets/img/navbar-logo.svg'
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import { LinearProgress } from '@material-ui/core';
import * as actions from '../../store/actions/auth';
import { withRouter, Redirect } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    logo: {
        width: 250,
        height: "auto",
        marginBottom: theme.spacing(3),
    }
}));

function SignInForm(props, { loading, error }) {
    const classes = useStyles();
    const responseGoogle = (response) => {
        console.log(response);
        const access_token = response.accessToken;
        props.googleAuth(
            access_token
        );
    }

    const responseFacebook = (response) => {
        console.log("Login Result", response);
        const access_token = response.accessToken;
        props.facebookAuth(
            access_token
        );
    }

    if (props.isAuthenticated) {
        return <Redirect to="/" />;
    }

    let errorMessage = null;
    if (error) {
        errorMessage = (
            <p>{error.message}</p>
        );
    }



    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <a href="/">
                    <img
                        className={classes.logo}
                        src={
                            TalisLogo
                        }
                        alt="Talis Logo"
                    />
                </a>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {errorMessage}
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required("required"),
                        password: Yup.string()
                            .min(6, "Password must contain at least 8 characters")
                            .required("Enter your password"),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            props.onAuth(values.username, values.password);
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {({ values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset, }) => (
                            <Form className={classes.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="username"
                                            label="Username"
                                            name="username"
                                            value={values.username}
                                            onChange={handleChange}
                                            helperText={touched.username ? errors.username : ""}
                                            error={touched.username && Boolean(errors.username)}
                                            autoComplete="username"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            helperText={touched.password ? errors.password : ""}
                                            error={touched.password && Boolean(errors.password)}
                                        />
                                    </Grid>
                                    {/* <Grid item xs={12}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="I want to receive inspiration, marketing promotions and updates via email."
                                        />
                                    </Grid> */}
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
                                    Sign In
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
                                            cookiePolicy={'single_host_origin'}
                                            render={renderProps => (
                                                <GoogleLoginButton style={{ width: '100%' }} align="center" onClick={renderProps.onClick}>
                                                    <span>Sign in with Google</span>
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
                                            render={renderProps => (
                                                <FacebookLoginButton style={{ width: '100%' }} align="center" onClick={renderProps.onClick}>
                                                    <span>Sign in with Facebook</span>
                                                </FacebookLoginButton>

                                            )}
                                        />
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="/register" variant="subtitle1">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="#" variant="subtitle1">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                </Formik>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)),
        googleAuth: (access_token) => dispatch(actions.authGoogleUser(access_token)),
        facebookAuth: (access_token) => dispatch(actions.authFacebookUser(access_token)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInForm));


// import React from "react";
// import { Button, Form } from 'react-bootstrap';


// const SignInForm = () => {
//     return (
//         <Form className="mx-auto mt-4 text-center">
//             <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="email" placeholder="Username" />
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//                 <Form.Control type="password" placeholder="Password" />
//             </Form.Group>
//             <Button variant="primary" type="submit" block>
//                 Sign In
//             </Button>
//             <hr />
//             Forgot password? | Create a new Talis account
//         </Form>
//     );
// };

// export default SignInForm;