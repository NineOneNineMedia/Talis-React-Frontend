import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TalisLogo from "../../assets/img/navbar-logo.svg";
import { connect } from "react-redux";
import * as actions from "../../store/actions/auth";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000",
  },
  phoneButton: {
    marginLeft: theme.spacing(2),
    color: "#000",
  },
  link: {
    flexDirection: "start",
  },
  logo: {
    width: 135,
    height: 43.54,
  },
}));

function TemporaryDrawer({ isAuthenticated, logout }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed" color="white">
          <Toolbar>
            <IconButton
              edge="start"
              onClick={handleDrawerOpen}
              className={classes.menuButton}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography xs={1}>
              <Link href="/">
                <img className={classes.logo} src={TalisLogo} alt="Talis Logo" />
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <div
          className={classes.list}
          role="presentation"
          onClick={handleDrawerClose}
        >
          <List>
            <Link href="/">
              <ListItem button>Home</ListItem>
            </Link>
            <Link href="/about">
              <ListItem button>About</ListItem>
            </Link>
            <Link href="/listings">
              <ListItem button>Listings</ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            {isAuthenticated ? (
              <List>
                <Link href="/myTalis/profile">
                  <ListItem button>myTalis</ListItem>
                </Link>
                <ListItem button key="2" onClick={logout}>
                  Logout
                </ListItem>
              </List>
            ) : (
              <List>
                <Link href="/login/">
                  <ListItem button>Login</ListItem>
                </Link>
                <Link href="/register/">
                  <ListItem button>Register</ListItem>
                </Link>
              </List>
            )}
          </List>
          <Divider />
          <List>
            <Link href="/">
              <ListItem>
                <Grid xs={1} item>
                  <img className={classes.logo} src={TalisLogo} alt="Talis Logo" />
                </Grid>
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer);
