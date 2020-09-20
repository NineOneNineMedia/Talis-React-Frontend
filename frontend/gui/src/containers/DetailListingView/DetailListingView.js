import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ListingGallery from "../../components/ListingGallery/ListingGallery";
import ListingContactCard from "../../components/ListingContactCard/ListingContactCard";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SecurityIcon from '@material-ui/icons/Security';
import WifiIcon from '@material-ui/icons/Wifi';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';


const useStyles = makeStyles((theme) => ({
    sectionPadding: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6)
    },

    heroSection: {
        marginTop: '5rem',
    },

    marginT: {
        marginTop: theme.spacing(2)
    },

    icon: {
        marginRight: theme.spacing(1)
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
                        <Grid item className={classes.marginT} xs={12}>
                            <Typography variant="h6">
                                Property Description
                            </Typography>
                            <Typography variant="p">
                                {listing.description}
                            </Typography>
                        </Grid>
                        <Grid container className={classes.marginT} direction="row" align="start">
                            <Grid item xs={6} md={4}>
                                <Typography variant="h6" className={classes.title}>
                                    <DescriptionIcon className={classes.icon} color="primary" />
                            Lease Options
                        </Typography>
                                <ListItems data={leaseData} />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Typography variant="h6" className={classes.title}>
                                    <FitnessCenterIcon className={classes.icon} color="primary" />
                            Fitness & Recreation
                        </Typography>
                                <ListItems data={recreationData} />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Typography variant="h6" className={classes.title}>
                                    <SecurityIcon className={classes.icon} color="primary" />
                            Security
                        </Typography>
                                <ListItems data={securityData} />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" align="start">
                            <Grid item xs={6} md={4}>
                                <Typography variant="h6" className={classes.title}>
                                    <WifiIcon className={classes.icon} color="primary" />
                            Features
                        </Typography>
                                <ListItems data={featuresData} />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Typography variant="h6" className={classes.title}>
                                    <RoomServiceIcon className={classes.icon} color="primary" />
                            Services
                        </Typography>
                                <ListItems data={servicesData} />
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Typography variant="h6" className={classes.title}>
                                    <DirectionsCarIcon className={classes.icon} color="primary" />
                            Parking
                        </Typography>
                                <ListItems data={parkingData} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5} align="start">
                        <ListingContactCard />
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

