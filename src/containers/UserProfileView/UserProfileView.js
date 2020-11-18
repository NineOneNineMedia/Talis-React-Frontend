import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import Header from "../../components/Header/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Button, Drawer, Typography, TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
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
  input: {
    display: "none",
  },
  profileImg: {
    width: 150,
    height: 150,
    border: "5 dashed red",
  },
}));

function ProfileView(props) {
  const classes = useStyles();
  const { currentUser } = useAuth();
  // const [profile, setProfile] = useState({
  //   fullName: "",
  //   phoneNumber: "",
  //   location: "",
  //   //profileImage: null,
  // });

  // const getUserProfile = async () => {
  //   await axios
  //     .get(`http://127.0.0.1:8000/api/profiles/profile/${props.userId}`, {
  //       headers: {
  //         Authorization: `Token ${props.token}`,
  //       },
  //     })
  //     .then((res) => {
  //       const data = res.data;
  //       setProfile({
  //         fullName: data.full_name,
  //         phoneNumber: data.phone_number,
  //         location: data.location,
  //         //profileImage: data.profile_image,
  //       });
  //     });
  // };

  // useEffect(() => {
  //   getUserProfile();
  // });

  // const handleChange = (event) => {
  //   const val = event.target.value;
  //   setProfile({
  //     ...profile,
  //     [event.target.name]: val,
  //   });
  // };

  // const mySubmitHandler = (event) => {
  //   event.preventDefault();
  //   //alert(profile.fullName + " " + profile.phoneNumber);
  //   let data = new FormData();
  //   data.append("full_name", profile.fullName);
  //   data.append("phone_number", profile.phoneNumber);
  //   data.append("location", profile.location);
  //   console.log(data);
  //   axios
  //     .put(
  //       `http://127.0.0.1:8000/api/profiles/profile/${props.userId}`,
  //       data,
  //       // {
  //       //   full_name: profile.fullName,
  //       //   phone_number: profile.phoneNumber,
  //       //   location: profile.location,
  //       //   profile_image: profile.profileImage,
  //       // },
  //       {
  //         headers: {
  //           Authorization: `Token ${props.token}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       const data = res.data;
  //       console.log(data);
  //       setProfile({
  //         fullName: data.full_name,
  //         phoneNumber: data.phone_number,
  //         location: data.location,
  //       });
  //       window.location.reload();
  //     })
  //     .catch((err) => console.log(err));
  // };

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
            {/* <ListItem>
              <Grid container direction="column" align="center">
                <Grid item>
                  <Avatar variant="square">N</Avatar>
                  <Typography>{profile.fullName}</Typography>
                </Grid>
              </Grid>
            </ListItem>
            <Divider className={classes.divder} /> */}
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
        <form /* onSubmit={mySubmitHandler} */>
          <Grid container direction="row" align="center">
            {/* <Grid item direction="column" xs={12} md={4} align="start">
              <Avatar
                variant="square"
                src={profile.profileImage}
                className={classes.profileImg}
              />
              <input
                type="file"
                accept="image/*"
                name="image"
                className={classes.input}
                id="upload"
                onChange={handleImageChange}
              />
              <label htmlFor="upload">
                <Button color="primary" component="span">
                  Upload Image
                </Button>
              </label>
            </Grid> */}
            <Grid
              container
              item
              direction="column"
              xs={12}
              md={8}
              align="start"
              spacing={2}
            >
              <Grid item>
                <Typography>Email</Typography>
                <Typography>{currentUser.email} Edit</Typography>
              </Grid>
              <Grid item>
                <Typography>Password</Typography>
                <Typography>******* Edit</Typography>
              </Grid>
              <Grid item>
                <Typography>Full Name</Typography>
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-secondary"
                  variant="outlined"
                  color="primary"
                  name="fullName"
                  // value={profile.fullName}
                  // onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <Typography>Phone Number</Typography>
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-secondary"
                  variant="outlined"
                  color="primary"
                  name="phoneNumber"
                  // value={profile.phoneNumber}
                  // onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <Typography>Location</Typography>
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-secondary"
                  variant="outlined"
                  color="primary"
                  name="location"
                  // value={profile.location}
                  // onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <hr />
          <Grid container direction="row" justify="flex-end">
            <Grid item>
              <Button variant="contained" color="primary" size="large" type="submit">
                SAVE
              </Button>
            </Grid>
          </Grid>
        </form>
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
