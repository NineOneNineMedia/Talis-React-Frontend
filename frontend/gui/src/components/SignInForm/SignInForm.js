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

    let errorMessage = null;
    if (error) {
        errorMessage = (
            <p>{error.message}</p>
        );
    }

    if (props.isAuthenticated) {
        return <Redirect to="/" />;
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
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/register" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
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
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
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