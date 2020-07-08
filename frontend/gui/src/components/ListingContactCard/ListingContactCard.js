import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box m={2}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.card,
        width: "100%",
        padding: theme.spacing(1),
        '& .MuiTextField-root': {
            marginBottom: theme.spacing(2),
        },
    },
}));

export default function ListingContactCard() {
    const classes = useStyles();
    const theme = useTheme();
    const [selectedDate, handleDateChange] = React.useState(new Date());
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Card className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
            >
                <Tab label="Schedule A Tour" {...a11yProps(0)} />
                <Tab label="Request Info" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                clearable
                                fullWidth
                                value={selectedDate}
                                placeholder="10/10/2018"
                                onChange={date => handleDateChange(date)}
                                minDate={new Date()}
                                inputVariant="outlined"
                                label="Select a Date"
                                size="small"
                                format="MM/dd/yyyy"
                            />
                        </MuiPickersUtilsProvider>

                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-number"
                            label="Name"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-number"
                            label="Phone"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-number"
                            label="Email"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth>
                            Schedule a Tour
                        </Button>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <Grid container direction="column" justify="space-evenly">
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-number"
                            label="Name"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-number"
                            label="Phone"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-number"
                            label="Email"
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-number"
                            label="Message"
                            variant="outlined"
                            size="small"
                            multiline
                            rows={3}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth>
                            Request Info
                        </Button>
                    </Grid>
                </Grid>
            </TabPanel>
        </Card>
    );
}


// import React from 'react';
// import { Col, Row, Form, Card, Input, Nav, Tab, Tabs } from 'react-bootstrap'



// class ListingContactCard extends React.Component {
//     render() {
//         return (
//             <Row className="d-none d-md-block" id="contact-form">
//                 <Card>
//                     <Card.Header className="border-0">
//                         <Tabs fill defaultActiveKey="profile" id="uncontrolled-tab-example">
//                             <Tab eventKey="home" title="Home">
//                                 <p>Visit</p>
//                             </Tab>
//                             <Tab eventKey="profile" title="Profile">
//                                 <p>Request</p>
//                             </Tab>
//                         </Tabs>
//                     </Card.Header>
//                     <Card.Title className="text-center w-100 mb-0 py-3 border-0 text-white">
//                         <h2 className="mb-0">
//                             <i className="fas fa-phone"></i> developer phone
//                         </h2>
//                     </Card.Title>
//                     <Col className="col-12 color3 py-3">
//                         <Form.Group className="form-group m-0">
//                             <Form action="{% url 'contact' %}" method="POST">
//                                 <input type="hidden" name="user_id" value="UserID" />
//                                 <input type="hidden" name="user_id" value="0" />
//                                 <input type="hidden" name="realtor_email" value="Developer Email" />
//                                 <input type="hidden" name="listing_id" value="Listing ID" />
//                                 <input type="hidden" name="listing" className="form-control rounded-0" value="Title" />
//                                 <div className="form-group">
//                                     <input type="text" name="name" className="form-control rounded-0" placeholder="Name" value="Name" required />
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="email" name="email" className="form-control rounded-0" placeholder="Email Address" value="email" required />
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="text" name="phone" placeholder="Phone Number" className="form-control rounded-0" />
//                                 </div>
//                                 <div className="form-group mb-2">
//                                     <textarea name="message" className="form-control rounded-0" placeholder="Enter Your Message"></textarea>
//                                 </div>
//                                 <div className="form-check mb-2">
//                                     <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
//                                     <label className="form-check-label text-muted" for="defaultCheck1">
//                                         Schedule a tour
//                                     </label>
//                                     <br />
//                                     <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
//                                     <label className="form-check-label text-muted" for="defaultCheck2">
//                                         Confirm Availibity
//                                     </label>
//                                 </div>
//                                 <input type="submit" value="Request Info" className="btn btn-block btn-primary text-white" />
//                             </Form>
//                         </Form.Group>
//                     </Col>
//                 </Card>

//             </Row>
//         )
//     }
// }

// export default ListingContactCard;