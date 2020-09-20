import React from "react";
import Header from '../../components/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Avatar, AppBar, Button, Drawer, InputLabel, Typography, TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
        overflow: 'auto',
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

export default function HomeView() {


    const classes = useStyles();

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
                                    <Avatar variant="square">
                                        N
                                    </Avatar>
                                    <Typography>
                                        User Name
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <Divider className={classes.divder} />
                        <Link href="/myTalis/profile">
                            <ListItem button>
                                <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItem>
                        </Link>
                        <Divider className={classes.divder} />
                        <Link href="/myTalis/favorites">
                            <ListItem button>
                                <ListItemIcon><SearchIcon /></ListItemIcon>
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
                <Typography h1>
                    Favorite Listings
                </Typography>
            </main>
        </div>
    );
}