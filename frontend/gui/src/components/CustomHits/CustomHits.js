import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
// import { Card, Col, Row, Container } from 'react-bootstrap'
import PlacardGallery from "../PlacardGallery/PlacardGallery";
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { connectHits } from 'react-instantsearch-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(2)
    },
    cardHeader: {
        backgroundColor: theme.palette.primary.main,
        textDecoration: 'none',
        padding: theme.spacing(1)
    },
    padding0: {
        padding: 0,
    },
}));

function Hits({ hits }) {
    const classes = useStyles();
    return (
        <ol>
            {hits.map(hit => (
                <Card className={classes.root}>
                    <Link underline="none" component="a" color="textPrimary" href={`/listings/${hit.objectID}`}>
                        <CardHeader
                            title={hit.title}
                            subheader={hit.property_address}
                            className={classes.cardHeader}
                        />
                    </Link>
                    <CardContent className={classes.padding0}>
                        <Grid container direction="row">
                            <Grid item xs={8}>
                                <PlacardGallery />
                            </Grid>
                            <Grid item container xs={4}>
                                <Grid item xs={12}>
                                    Price
                                </Grid>
                                <Grid item xs={12}>
                                    Bedrooms
                                </Grid>
                                <Grid item xs={12}>
                                    Bathrooms
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
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