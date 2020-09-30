import React, { useState, useEffect } from "react";
import axios from "axios";
import headerImg from "../../assets/img/showcaseimage.jpg";
import cardImg1 from "../../assets/img/blackfam.jpg";
import cardImg2 from "../../assets/img/Kitchen.jpg";
import cardImg3 from "../../assets/img/familymovingin.jpg";
import ListingCards from "../../components/ListingCards/ListingCards";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "@material-ui/core/Button";
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { authGoogleSignUp } from "../../store/actions/auth";

const useStyles = makeStyles((theme) => ({
  sectionPadding: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },

  bgColor: {
    backgroundColor: "light-grey",
  },

  displayText: {
    marginTop: "auto",
    marginBottom: "auto",
    paddingLeft: 30,
    paddingRight: 30,
  },

  heroSection: {
    marginTop: "4rem",
    height: "70vh",
    textAlign: "center",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${headerImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
}));

export default function HomeView() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/pages/").then((res) => {
      setListings(res.data);
      console.log(res.data);
    });
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Header />
      <Container className={classes.heroSection} disableGutters maxWidth="false">
        <Grid item xs={12} md={6}>
          <Container disableGutters maxWidth="false"></Container>
        </Grid>
      </Container>

      <Container className={classes.sectionPadding} maxWidth="lg">
        <Grid container direction="column" align="center" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Latest Listings</Typography>
          </Grid>
          <Grid item>
            <ListingCards data={listings} />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" href="/listings">
              View More
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.sectionPadding} maxWidth="md">
        <Grid
          style={{ backgroundColor: "#D9D9D9" }}
          container
          direction="row"
          xs={12}
          spacing={0}
        >
          <Grid className={classes.displayText} item xs={12} md={6} align="start">
            <Typography variant="h6">Helping You Find the Perfect Fit</Typography>
            <Typography variant="p">
              orem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              debitis nam!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container disableGutters maxWidth="false">
              <img src={cardImg1} style={{ width: "100%", height: "auto" }} />
            </Container>
          </Grid>
        </Grid>
        <Grid
          style={{ backgroundColor: "#D9D9D9" }}
          container
          direction="row"
          xs={12}
          spacing={0}
        >
          <Grid item xs={12} md={6}>
            <Container disableGutters maxWidth="false">
              <img src={cardImg2} style={{ width: "100%", height: "auto" }} />
            </Container>
          </Grid>
          <Grid className={classes.displayText} item xs={12} md={6} align="start">
            <Typography variant="h6">Luxury at the Right Price</Typography>
            <Typography variant="p">
              orem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              debitis nam!
            </Typography>
          </Grid>
        </Grid>
        <Grid
          style={{ backgroundColor: "#D9D9D9" }}
          container
          direction="row"
          xs={12}
          spacing={0}
        >
          <Grid className={classes.displayText} item xs={12} md={6} align="start">
            <Typography variant="h6">
              Helping Investors Maximize Occupancy
            </Typography>
            <Typography variant="p">
              orem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              debitis nam!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container disableGutters maxWidth="false">
              <img src={cardImg3} style={{ width: "100%", height: "auto" }} />
            </Container>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.sectionPadding} maxWidth="md">
        <Grid container xs={12} direction="row" align="center">
          <Typography variant="h6">
            Search hundreds of listings including apartments, houses, condos and
            townhomes available for rent in Accra. You'll find your next home in any
            style you prefer.
          </Typography>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
