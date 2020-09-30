import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {
  Avatar,
  AppBar,
  Button,
  Drawer,
  InputLabel,
  Typography,
  TextField,
  Grid,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  /* content: {
        flexGrow: 1,
        marginTop: '4rem',
        padding: theme.spacing(3),
        zIndex: theme.zIndex.drawer
    },
    divder: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    drawer: {
        width: drawerWidth,
    },
    square: {
        height: 200,
        width: 200
    },
    verticleDivder: {
        height: "100vh",
    } */
}));

function FavoriteListingsView(props) {
  const classes = useStyles();
  const [listings, setListings] = useState([]);

  const getFavoriteListings = () => {
    axios
      .get("http://127.0.0.1:8000/api/profiles/profile/favorite-listings", {
        headers: {
          Authorization: `Token ${props.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setListings(res.data);
      });
  };

  useEffect(() => {
    getFavoriteListings();
  }, [props]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem>
              <Grid container direction="column" align="center">
                <Grid item>
                  <Avatar variant="square">N</Avatar>
                  <Typography>User Name</Typography>
                </Grid>
              </Grid>
            </ListItem>
            <Divider className={classes.divder} />
            <Link href="/myTalis/profile">
              <ListItem button>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
            </Link>
            <Divider className={classes.divder} />
            <Link href="/myTalis/favorites">
              <ListItem button>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Saved Listings" />
              </ListItem>
            </Link>
            <Divider className={classes.divder} />
            {/* <ListItem button>
                            <ListItemIcon><SettingsIcon /></ListItemIcon>
                            <ListItemText primary="Edit Profile" />
                        </ListItem>
                        <Divider className={classes.divder} />
                        <ListItem button>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Notification Prefrences" />
                        </ListItem>
                        <Divider className={classes.divder} /> */}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Typography h1>Favorite Listings</Typography>
        <hr />
        <Grid container direction="row" xs={12} spacing={2}>
          {listings.map((listing) => {
            return (
              <Grid item xs={12} md={3} lg={3}>
                <a href={`/listings/${listing.id}`}>
                  <Card key={listing.id} className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="200"
                        image={listing.photo_main}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="h2"
                          align="center"
                        >
                          {listing.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          component="p"
                          align="center"
                        >
                          {listing.neighborhood}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          component="p"
                          align="center"
                        >
                          {listing.property_address}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          component="p"
                          align="center"
                        >
                          {listing.bedrooms_min}-{listing.bedrooms_max}Bedrooms | $
                          {listing.price_min}-${listing.price_max}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </a>
              </Grid>
            );
          })}
        </Grid>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
    userId: state.userId,
    token: state.token,
  };
};

export default connect(mapStateToProps)(FavoriteListingsView);
