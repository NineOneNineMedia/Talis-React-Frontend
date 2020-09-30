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
}));

function ProfileView(props) {
  const classes = useStyles();
  const [profile, setProfile] = useState([]);

  const getUserProfile = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/profiles/profile/${props.userId}`)
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      });
  };

  useEffect(() => {
    getUserProfile();
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
        <Typography h1>PROFILE</Typography>
        <hr />
        <Grid container direction="row" align="center">
          <Grid item direction="column" xs={12} md={4} align="start">
            <Avatar variant="square" className={classes.square}>
              N
            </Avatar>
            <Typography>Upload Profile Photo</Typography>
          </Grid>
          <Grid item direction="column" xs={12} md={8} align="start">
            <Typography>Email</Typography>
            <Typography>user@mail.com Edit</Typography>
            <Typography>Password</Typography>
            <Typography>******* Edit</Typography>
            <InputLabel>Full Name</InputLabel>
            <TextField
              fullWidth
              size="small"
              id="outlined-secondary"
              variant="outlined"
              color="secondary"
              value={profile.full_name}
            />
            <InputLabel>Phone Number</InputLabel>
            <TextField
              fullWidth
              size="small"
              id="outlined-secondary"
              variant="outlined"
              color="secondary"
              value={profile.phone_number}
            />
            <InputLabel>Location</InputLabel>
            <TextField
              fullWidth
              size="small"
              id="outlined-secondary"
              variant="outlined"
              color="secondary"
              value={profile.location}
            />
          </Grid>
        </Grid>
        <hr />
        <Grid container direction="row" justify="flex-end">
          <Grid item>
            <Button variant="contained" color="primary" size="large">
              SAVE
            </Button>
          </Grid>
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

export default connect(mapStateToProps)(ProfileView);
