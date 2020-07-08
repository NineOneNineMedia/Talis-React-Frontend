import React from 'react';
import TalisLogo from '../../assets/img/navbar-logo.svg'
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#000",
        padding: theme.spacing(5)
    },
    logo: {
        width: 'auto',
        height: 60
    },
    textColor: {
        color: "#fff",
    },
    links: {
        padding: 0
    },
    divide: {
        backgroundColor: "#303030"
    }
}));

export default function Footer(props) {
    const classes = useStyles();
    const { description, title } = props;

    return (
        <footer className={classes.footer}>
            <Grid container direction="column" spacing={2}>
                <Grid item xs={12} container>
                    <Grid item xs={12} md={4}>
                        <Typography className={classes.textColor} component="div">
                            <img
                                className={classes.logo}
                                src={
                                    TalisLogo
                                }
                                alt="Talis Logo"
                            />
                            <Box lineHeight="normal" m={1}>
                                Transparent, honest, and sincere property management services for residential and commercial properties
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography className={classes.textColor} component="div">
                            <Typography variant="h6">
                                Neighborhoods
                            </Typography>
                            <ListItemLink className={classes.links} href="#simple-list">
                                <ListItemText primary="Airport" />
                            </ListItemLink>
                            <ListItemLink className={classes.links} href="#simple-list">
                                <ListItemText primary="Cantonments" />
                            </ListItemLink>
                            <ListItemLink className={classes.links} href="#simple-list">
                                <ListItemText primary="Dzorwulu" />
                            </ListItemLink>
                            <ListItemLink className={classes.links} href="#simple-list">
                                <ListItemText primary="East Legon" />
                            </ListItemLink>
                            <ListItemLink className={classes.links} href="#simple-list">
                                <ListItemText primary="Labone" />
                            </ListItemLink>
                            <ListItemLink className={classes.links} href="#simple-list">
                                <ListItemText primary="Roman Ridge" />
                            </ListItemLink>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography className={classes.textColor} varaint="h6">
                            Location
                        </Typography>
                        <Typography className={classes.textColor} varaint="p">
                            8 Sir Arku Korsah Rd
                        </Typography>
                        <Typography className={classes.textColor} varaint="p">
                            Airport, Accra, Ghana
                        </Typography>
                        <Typography className={classes.textColor} varaint="p">
                            +233 302 798 692
                        </Typography>
                        <Typography className={classes.textColor} varaint="p">
                            info@talispropertyservices.com
                        </Typography>
                    </Grid>
                </Grid>
                <Divider className={classes.divide} />
                <Grid item xs={12} container>
                    <Grid item xs={12}>
                        <Typography className={classes.textColor}>
                            Copyright &copy; <span className="year"></span> TALIS Property Services
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    );
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};


// import React from "react";
// import { Container, Col, Row } from 'react-bootstrap';
// import TalisLogo from '../../assets/img/navbar-logo.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
// import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// const Footer = () => {
//     return (
//         <div>
//             <footer className="footer">
//                 <Container className="text-white py-5">
//                     <Row>
//                         <Col xs={12} lg={5} lg={5} className="about-company">
//                             <a className="navbar-brand" href="{% url 'index' %}">
//                                 <img src={TalisLogo} alt="Talis Logo" />
//                             </a>
//                             <p className="pr-5 font-weight-light">
//                                 Transparent, honest, and sincere property management services for
//                                 residential and commercial properties
//                             </p>
//                             <p>
//                                 <a href="#home"><FontAwesomeIcon icon={faFacebookSquare} className="mr-1" /></a>
//                                 <a href="#home"><FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin-square" /></a>
//                             </p>
//                         </Col>
//                         <Col xs={12} lg={5} lg={3} className="links">
//                             <h4 className="mt-lg-0 mt-sm-3">Neighborhoods</h4>
//                             <ul className="m-0 p-0 font-weight-light">
//                                 <li>- <a href="#home">Airport</a></li>
//                                 <li>- <a href="#home">Cantonments</a></li>
//                                 <li>- <a href="#home">Dzorwulu</a></li>
//                                 <li>- <a href="#home">East Legon</a></li>
//                                 <li>- <a href="#home">Labone</a></li>
//                                 <li>- <a href="#home">Roman Ridge</a></li>
//                             </ul>
//                         </Col>
//                         <Col xs={12} lg={5} lg={4} className="location">
//                             <h4 className="mt-lg-0 mt-sm-4">Location</h4>
//                             <p className="mb-0 font-weight-light">8 Sir Arku Korsah Rd</p>
//                             <p className="font-weight-light">Airport, Accra, Ghana</p>

//                             <p className="mb-0"><FontAwesomeIcon icon={faPhone} className="mr-3" />+233 302 798 692</p>
//                             <p><FontAwesomeIcon icon={faEnvelope} className="mr-3" />info@talispropertyservices.com</p>
//                         </Col>
//                     </Row>
//                     <Row className="row mt-5">
//                         <div className="col copyright">
//                             <small>
//                                 <p className="">
//                                     Copyright &copy; <span className="year"></span> TALIS Property Services
//                             </p>
//                             </small>
//                         </div>
//                     </Row>
//                 </Container>
//             </footer>
//         </div >
//     );
// };

// export default Footer;
