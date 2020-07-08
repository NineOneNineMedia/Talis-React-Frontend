import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ListingCards(props) {
    const classes = useStyles();

    return (
        <Grid container direction="row" xs={12} spacing={3} justify="center">
            {props.data.map((data) => {
                return (
                    <Grid item xs={12} md={6} lg={3}>
                        <a href={`/listings/${data.id}`}>
                            <Card key={data.id} className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="200"
                                        image={data.photo_main}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h2" align="center">
                                            {data.title}
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p" align="center">
                                            {data.neighborhood}
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p" align="center">
                                            {data.property_address}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                </Button>
                                </CardActions>
                            </Card>
                        </a>

                    </Grid>
                )

            })}
        </Grid>



    );
}

// import React from "react";

// const ListingCards = (props) => {
//     return (
//         <div className="row">
//             {props.data.map((data) => {
//                 return (
//                     <div className="col-md-6 col-lg-3 mb-4">
//                         <a href={`/listings/${data.id}`}>
//                             <div key={data.id} className="card shadow zoom rounded-0 listing-preview">
//                                 <img className="card-img-top rounded-0" src={data.photo_main} alt=""></img>
//                                 <div className="card-body">
//                                     <div className="row text-black-50 justify-content-center text-center p-0">
//                                         <div className="col-10">
//                                             <span className="text-dark">{data.title}</span>
//                                             <br></br>
//                                             {data.neighborhood}
//                                             <br></br>
//                                     Price: {data.lease_length[0]}
//                                             <br></br>
//                                     Beds: {data.bedrooms.lower}-{data.bedrooms.upper} | Baths:
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </a>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// }

// export default ListingCards;