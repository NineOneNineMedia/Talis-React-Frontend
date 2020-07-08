import React from 'react';
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
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import TalisLogo from '../../assets/img/navbar-logo.svg'
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import { LinearProgress } from '@material-ui/core';
import { Redirect } from "react-router-dom";
// import { TextField } from 'formik-material-ui';
import * as actions from '../../store/actions/auth';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Talis
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    logo: {
        width: 250,
        height: "auto",
        marginBottom: theme.spacing(3)
    }
}));

function SignUpForm(props, { loading, error }) {
    const classes = useStyles();

    if (props.isAuthenticated) {
        return <Redirect to="/" />;
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFieldsAndScroll((err, values) => {
    //         if (!err) {
    //             this.props.onAuth(
    //                 values.userName,
    //                 values.email,
    //                 values.password,
    //                 values.confirm
    //             );
    //             this.props.history.push('/');
    //         }
    //     });
    // }

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
                    Sign up
                </Typography>
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password1: '',
                        password2: '',
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required("required"),
                        email: Yup.string()
                            .email()
                            .required('Required'),
                        password1: Yup.string()
                            .min(8, "Password must contain at least 8 characters")
                            .required("Enter your password"),
                        password2: Yup.string()
                            .required("Confirm your password")
                            .oneOf([Yup.ref("password1")], "Password does not match")
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
                                            id="password1"
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
                                            id="password2"
                                            value={values.password2}
                                            onChange={handleChange}
                                            helperText={touched.password2 ? errors.password2 : ""}
                                            error={touched.password2 && Boolean(errors.password2)}
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
                                    Sign Up
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="/login" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                </Formik>
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
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignUp(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);


// import React from "react";
// import { Button, Form } from 'react-bootstrap';

// const SignUpForm = (props) => {
//     return (
//         <Form className="mx-auto mt-4 text-center">
//             <Form.Group controlId="formBasicEmail">
//                 <Form.Control type="username" placeholder="Create Username" />
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//                 <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//                 <Form.Control type="password" placeholder="Enter password" />
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//                 <Form.Control type="password" placeholder="Confirm password" />
//             </Form.Group>
//             <Button variant="primary" type="submit" block>
//                 Submit
//             </Button>
//         </Form>
//     );
// };

// export default SignUpForm;