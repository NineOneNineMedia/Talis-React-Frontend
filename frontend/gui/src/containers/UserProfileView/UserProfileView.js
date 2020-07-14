import React from "react";
import Header from '../../components/Header/Header';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';


const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    content: {
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
    verticleDivder: {
        height: "100vh",
    }
}));

export default function HomeView() {


    const classes = useStyles();

    return (
        <div>
            <Header />

            <Grid container direction="row" spacing={0}>
                <Grid item xs={3}>
                    <Toolbar />
                    <List>
                        <ListItem button>
                            <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                        <Divider className={classes.divder} />
                        <ListItem button>
                            <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItem>
                        <Divider className={classes.divder} />
                        <ListItem button>
                            <ListItemIcon><SearchIcon /></ListItemIcon>
                            <ListItemText primary="Saved Listings" />
                        </ListItem>
                        <Divider className={classes.divder} />
                        <ListItem button>
                            <ListItemIcon><SettingsIcon /></ListItemIcon>
                            <ListItemText primary="Edit Profile" />
                        </ListItem>
                        <Divider className={classes.divder} />
                        <ListItem button>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary="Notification Prefrences" />
                        </ListItem>
                        <Divider className={classes.divder} />
                    </List>
                </Grid>

                <Divider className={classes.verticleDivder} orientation="vertical" flexItem />

                <Grid item xs={8}>
                    <main className={classes.content}>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                            donec massa sapien faucibus et molestie ac.
                    </Typography>
                        <Typography paragraph>
                            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                    </main>
                </Grid>
            </Grid>
        </div>
    )
}



