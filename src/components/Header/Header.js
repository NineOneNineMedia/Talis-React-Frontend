import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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
            <Grid xs={1} item>
              <img className={classes.logo} src={TalisLogo} alt="Talis Logo" />
            </Grid>
            {/* <Button className={classes.link} color="inherit">Login</Button> */}
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
            {/* // <Link href="/login/">
                        //     <ListItem button>
                        //         Login
                        //         </ListItem>
                        // </Link>
                        // <Link href="/register/">
                        //     <ListItem button>
                        //         Register
                        //         </ListItem>
                        // </Link> */}
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

// import React from "react";
// import { Navbar, Nav, Container, Row } from 'react-bootstrap';
// import TalisLogo from '../../assets/img/navbar-logo.svg'

// const Header = () => {
//     const [modalShow, setModalShow] = React.useState(false);
//     const [defaultActionKey, setDefaultActionKey] = React.useState("");
//     return (
//         <div>
//             <Navbar collapseOnSelect expand="md" fixed="top">
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler" />
//                 <Navbar.Brand href="/" className="mr-auto text-black-75 pl-2 pl-md-0"><img src={TalisLogo} alt="Talis Logo" /></Navbar.Brand>
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="mr-auto text-white">
//                         <Nav.Link href="/">HOME</Nav.Link>
//                         <Nav.Link href="/about">ABOUT</Nav.Link>
//                         <Nav.Link href="/listings">AVAILABLE LISTINGS</Nav.Link>
//                         <Nav.Link href="/myTalis/profile">myTalis</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="ml-auto text-white">
//                         <Nav.Link href="/register/">Register</Nav.Link>
//                         <Nav.Link href="/login/">Sign In</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </div >
//     );
// };

// export default Header;
