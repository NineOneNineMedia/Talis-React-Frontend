import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
// import { Card, Col, Row, Container } from 'react-bootstrap'
import PlacardGallery from "../PlacardGallery/PlacardGallery";
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Icon from '@material-ui/core/Icon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { connectHits, createClassNames } from 'react-instantsearch-dom';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        borderRadius: '15px',
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    },
    cardHeader: {
        backgroundColor: theme.palette.primary.main,
        textDecoration: 'none',
        padding: theme.spacing(1)
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
        padding: theme.spacing(1)
    },
    cardContent: {
        display: 'flex',
    },
    media: {
        maxWidth: '50%',
    },
    button: {
        marginTop: theme.spacing(5),
        width: '100%'
    },
    buttonPadding: {
        padding: theme.spacing(1)
    }
}));

function Hits({ hits }) {
    const classes = useStyles();
    return (
        <ol>
            {hits.map(hit => (
                <Card className={classes.root}>
                    {/* <Link underline="none" component="a" color="textPrimary" href={`/listings/${hit.objectID}`}>
                        <CardHeader
                            title={hit.title}
                            subheader={hit.property_address}
                            className={classes.cardHeader}
                        />
                    </Link>
                    <div className={classes.cardContent}>
                        <CardMedia className={classes.media}>
                            <PlacardGallery />
                        </CardMedia>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography variant="subtitle1" >
                                    Available Now
                                </Typography>
                                <Typography variant="subtitle1" >
                                    {hit.price_range.lower}
                                </Typography>
                                <Typography variant="subtitle1" >
                                    Bedrooms
                                </Typography>
                                <Typography variant="subtitle1" >
                                    Telephone #
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={<EmailIcon />}
                                >
                                    Email
                                </Button>
                            </CardContent>
                        </div>
                    </div> */}

                    <Link underline="none" component="a" color="textPrimary" href={`/listings/${hit.objectID}`}>
                        <Grid container direction="row">
                            <Grid item xs={12} md={6}>
                                <PlacardGallery />
                            </Grid>
                            <Grid item container xs={12} md={6} >
                                <CardContent className={classes.content}>
                                    <Typography variant="h5" >
                                        {hit.title}
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        {hit.property_address}
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        Available Now
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        ${hit.price_min} - ${hit.price_max}
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        {hit.bedrooms_min} - {hit.bedrooms_max} Bedrooms
                                    </Typography>
                                </CardContent>
                                <Grid container className={classes.buttonPadding} spacing={2}>
                                    <Grid item xs={4}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            startIcon={<PhoneIcon />}
                                        >
                                            Call
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            startIcon={<EmailIcon />}
                                        >
                                            Email
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Link>
                </Card >
                // <Card key={hit.id} className="mb-2">
                //     <a href={`/listings/${hit.objectID}`}>
                //         <Card.Header>
                //             <Row>
                //                 <Col sm={9}>
                //                     <Row>{hit.title}</Row>
                //                     <Row>{hit.address}</Row>
                //                 </Col>
                //                 {/* <Col sm={3}>{data.developer}</Col> */}
                //             </Row>
                //         </Card.Header>
                //     </a>
                //     <Card.Body className="p-0">
                //         <Row>
                //             <Col sm={8}>
                //                 <PlacardGallery />
                //             </Col>
                //             <Col>
                //                 {/* <Row>{data.price}</Row>
                //                 <Row>{data.bedrooms.lower}</Row>
                //                 <Row>{data.bathrooms}</Row> */}
                //             </Col>
                //         </Row>
                //     </Card.Body>
                // </Card>
            ))
            }
        </ol >
    )

};

export const CustomHits = connectHits(Hits);