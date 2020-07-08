import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Col, Container, Jumbotron, ListGroup, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileContract, faShieldAlt, faCar, faDumbbell, faWifi, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ListingGallery from "../../components/ListingGallery/ListingGallery";
import ListingContactCard from "../../components/ListingContactCard/ListingContactCard";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography, Grid, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListSubheader from '@material-ui/core/ListSubheader';
import DescriptionIcon from '@material-ui/icons/Description';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SecurityIcon from '@material-ui/icons/Security';
import WifiIcon from '@material-ui/icons/Wifi';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';



import { Jumbotron, Image } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
    sectionPadding: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6)
    },

    heroSection: {
        marginTop: '5rem',
    }
}));

function ListItems({ data }) {
    if (!data) {
        return null;
    } else if (!Array.isArray(data)) {
        return (
            <List dense>
                <ListItem>
                    <ListItemText
                        primary={data}
                    />
                </ListItem>
            </List>
        );
    } else {
        return (
            <List dense>
                {data.map(item => (
                    <ListItem key={item.id}><ListItemText primary={item} /></ListItem>
                ))}
            </List>
        );
    }
}

export default function DetailListingView(props) {
    const classes = useStyles();
    const [listing, setListing] = useState([]);

    useEffect(() => {
        const listingID = props.match.params.listingID;
        axios.get(`http://127.0.0.1:8000/api/listings/listing/${listingID}`).then((res) => {
            setListing(res.data)
            console.log(res.data)
        });
    }, [])


    const leaseData = listing.lease_length
    const recreationData = listing.fitness_recreation
    const featuresData = listing.features
    const securityData = listing.security
    const servicesData = listing.service
    const parkingData = listing.parking


    return (
        <div>
            <Header />
            <Container className={classes.heroSection} maxWidth="md">
                <Grid item xs={12}>
                    <ListingGallery />
                </Grid>
            </Container>

            <Container className={classes.sectionPadding} maxWidth="md">
                <Grid container direction="row" align="center">
                    <Grid item direction="column" xs={12} md={7} align="start">
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                {listing.title}
                            </Typography>
                            <Typography variant="p">
                                {listing.property_address}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6">
                                Property Description
                            </Typography>
                            <Typography variant="p">
                                {listing.description}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5} align="start">
                        <ListingContactCard />
                    </Grid>
                </Grid>
                <Grid container direction="row" align="start">
                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" className={classes.title}>
                            <DescriptionIcon color="primary" />
                            Lease Options
                        </Typography>
                        <ListItems data={leaseData} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" className={classes.title}>
                            <FitnessCenterIcon color="primary" />
                            Fitness & Recreation
                        </Typography>
                        <ListItems data={recreationData} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" className={classes.title}>
                            <SecurityIcon color="primary" />
                            Security
                        </Typography>
                        <ListItems data={securityData} />
                    </Grid>
                </Grid>
                <Grid container direction="row" align="start">
                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" className={classes.title}>
                            <WifiIcon color="primary" />
                            Features
                        </Typography>
                        <ListItems data={featuresData} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" className={classes.title}>
                            <RoomServiceIcon color="primary" />
                            Services
                        </Typography>
                        <ListItems data={servicesData} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography variant="h6" className={classes.title}>
                            <DirectionsCarIcon color="primary" />
                            Parking
                        </Typography>
                        <ListItems data={parkingData} />
                    </Grid>
                </Grid>
            </Container>

            {/* <Container className={classes.sectionPadding} maxWidth="md">
                <Grid container direction="row" xs={12} spacing={0}>
                </Grid>
            </Container >

            <Container className={classes.sectionPadding} maxWidth="md">
                <Grid container xs={12} direction="row" align="center">

                </Grid>
            </Container> */}
            <Footer />
        </div>
    )
}


// class DetailListingView extends React.Component {
//     state = {
//         listing: [],
//     }

//     componentDidMount() {
//         const listingID = this.props.match.params.listingID;
//         axios.get(`http://127.0.0.1:8000/api/listings/listing/${listingID}`).then((res) => {
//             this.setState({
//                 listing: res.data,
//             })
//             console.log(res.data)
//         });
//     }

//     render() {
//         const data = this.state.listing
//         const leaseData = data.lease_length
//         const recreationData = data.fitness_recreation
//         const featuresData = data.features
//         const securityData = data.security
//         const servicesData = data.service
//         const parkingData = data.parking
//         console.log(leaseData)
//         console.log(recreationData)
//         console.log(featuresData)
//         console.log(securityData)
//         console.log(servicesData)
//         console.log(parkingData)
//         return (
//             <div>
//                 <Header />
//                 <Container className="py-2" style={{ marginTop: "4.5rem" }}>
//                     <Row>
//                         <Col xs={3} md={1} className="my-auto p-0">
//                             <a id="back">
//                                 <Button className="rounded-0 text-primary">
//                                     <i className="fas fa-arrow-left fa-2x"> </i>
//                                 </Button>
//                             </a>
//                         </Col>
//                         <Col xs={9} md={6} className="text-center my-auto p-0">
//                             <h4 className="m-0">{this.state.listing.title}</h4>
//                             <h5 className="font-weight-light m-0">{this.state.listing.property_address}</h5>
//                         </Col>
//                         <Col md={4} className="d-none d-md-block text-center my-auto">
//                             <h4>Developer Name</h4>
//                         </Col>
//                         <Col md={1} className="d-none d-md-block text-center my-auto p-0" id="favorite-section">
//                             <a href="" className="text-primary">
//                                 <i className="fas fa-heart fa-3x"></i>
//                             </a>
//                             <a href="" className="text-primary">
//                                 <i className="far fa-heart fa-3x"></i>
//                             </a>
//                         </Col>
//                     </Row>
//                 </Container>
//                 <Container className="listing-info d-none d-md-block py-2">
//                     <Row className="justify-content-center align-items-center h-100">
//                         <Col xs={3} className="text-center px-0">
//                             <h5 className="mb-0">1 Bedroom <span
//                                 className="font-weight-light">$500-$600</span>
//                             </h5>
//                         </Col>
//                         <Col xs={3} className="text-center px-0">
//                             <h5 className="mb-0">2 Bedroom <span
//                                 className="font-weight-light">$700-$800</span>
//                             </h5>
//                         </Col>
//                         <Col xs={3} className="text-center px-0">
//                             <h5 className="mb-0">3 Bedroom <span
//                                 className="font-weight-light">$900-$1000</span>
//                             </h5>
//                         </Col>
//                     </Row>
//                 </Container>
//                 <Container>
//                     <Row>
//                         <Col md={12} className="p-0 m-0">
//                             {/* Photo Gallery */}
//                             <ListingGallery />
//                             {/* Description */}
//                             <Row className="mb-5">
//                                 <Container>
//                                     <Col className="col-md-8">
//                                         <h3 className="mb-3">About Property Residences</h3>
//                                         <p>
//                                             {this.state.listing.description}
//                                         </p>
//                                     </Col>
//                                 </Container>
//                             </Row>
//                             {/* Features */}
//                             <Row className="mb-5">
//                                 <Container>
//                                     <Col className="col-md-8">
//                                         <h3 className="mb-3">Amenities</h3>
//                                         <Row>
//                                             <Col className="col-lg-6">
//                                                 <div className=" d-flex">
//                                                     <Col className="col-1 d-flex justify-content-end p-0 text-primary">
//                                                         <FontAwesomeIcon icon={faFileContract} size="2x" className="mr-3" />
//                                                     </Col>
//                                                     <Col className="col-11">
//                                                         <h4>Lease Opitions</h4>
//                                                         <List data={leaseData} />
//                                                     </Col>
//                                                 </div>
//                                             </Col>
//                                             <Col className="col-lg-6">
//                                                 <div className=" d-flex">
//                                                     <Col className="col-1 d-flex justify-content-end p-0 text-primary">
//                                                         <FontAwesomeIcon icon={faShieldAlt} size="2x" className="mr-3" />
//                                                         <i className="fas fa-shield-alt fa-2x"></i>
//                                                     </Col>
//                                                     <Col className="col-11">
//                                                         <h4>Security</h4>
//                                                         <List data={securityData} />
//                                                     </Col>
//                                                 </div>
//                                             </Col>
//                                             <Col className="col-lg-6">
//                                                 <div className=" d-flex">
//                                                     <Col className="col-1 d-flex justify-content-end text-primary p-0">
//                                                         <FontAwesomeIcon icon={faCar} size="2x" className="mr-3" />
//                                                         <i className="fas fa-car fa-2x"></i>
//                                                     </Col>
//                                                     <Col className="col-11">
//                                                         <h4>Parking</h4>
//                                                         <List data={parkingData} />
//                                                     </Col>
//                                                 </div>
//                                             </Col>
//                                             <Col className="col-lg-6">
//                                                 <div className=" d-flex">
//                                                     <Col className="col-1 d-flex justify-content-end p-0 text-primary">
//                                                         <FontAwesomeIcon icon={faConciergeBell} size="2x" className="mr-3" />
//                                                         <i className="fas fa-concierge-bell fa-2x"></i>
//                                                     </Col>
//                                                     <Col className="col-11">
//                                                         <h4>Services</h4>
//                                                         <List data={servicesData} />
//                                                     </Col>
//                                                 </div>
//                                             </Col>
//                                             <Col className="col-lg-6">
//                                                 <div className=" d-flex">
//                                                     <Col className=" col-1 d-flex justify-content-end p-0 text-primary">
//                                                         <FontAwesomeIcon icon={faWifi} size="2x" className="mr-3" />
//                                                         <i className="fas fa-wifi fa-2x"></i>
//                                                     </Col>
//                                                     <Col className="col-11">
//                                                         <h4>Features</h4>
//                                                         <List data={featuresData} />
//                                                     </Col>
//                                                 </div>
//                                             </Col>
//                                             <Col className="col-lg-6">
//                                                 <div className=" d-flex">
//                                                     <Col className="col-1 d-flex justify-content-end p-0 text-primary">
//                                                         <FontAwesomeIcon icon={faDumbbell} size="2x" className="mr-3" />
//                                                         <i className="fas fa-dumbbell fa-2x"></i>
//                                                     </Col>
//                                                     <Col className="col-11">
//                                                         <h4>Fitness & Recreation</h4>
//                                                         <List data={recreationData} />
//                                                     </Col>
//                                                 </div>
//                                             </Col>
//                                         </Row>
//                                     </Col>
//                                 </Container>
//                             </Row>
//                         </Col>
//                         <Col md={4} className="m-0">
//                             {/* Contact Card */}
//                             <ListingContactCard />
//                         </Col>

//                     </Row>
//                 </Container>
//                 <Footer />
//             </div>
//         );
//     }
// }

// export default DetailListingView;

// function List({ data }) {
//     if (!data) {
//         return null;
//     } else if (data) {
//         return (
//             <ListGroup variant="flush">
//                 <ListGroup.Item>{data}</ListGroup.Item>
//             </ListGroup>
//         );
//     } else {
//         return (
//             <ListGroup variant="flush">
//                 {data.map(item => (
//                     <ListGroup.Item key={item.id}>{item}</ListGroup.Item>
//                 ))}
//             </ListGroup>
//         );
//     }
// }