import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
// import { Card, Col, Row, Container } from 'react-bootstrap'
import PlacardGallery from "../PlacardGallery/PlacardGallery";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Icon from "@material-ui/core/Icon";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connectHits, createClassNames } from "react-instantsearch-dom";
import { CardMedia } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  listingCard: {
    maxWidth: "100%",
    borderRadius: "15px",
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    border: "2px solid rgba(151,151,151,.2)",
    boxShadow: "0 2px 3px 0 rgba(0,0,0,.05)",
    "&:hover": {
      border: "2px solid #00A3B0",
      boxShadow: "0 3px 10px 0 rgba(0,0,0,.25)",
      transition: "border ease-in .1s",
    },
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    textDecoration: "none",
    padding: theme.spacing(1),
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    padding: theme.spacing(1),
  },
  cardContent: {
    display: "flex",
  },
  media: {
    maxWidth: "50%",
  },
  button: {
    width: "100%",
  },
  buttonPadding: {
    padding: theme.spacing(1),
  },
}));

function Hits({ hits }) {
  const classes = useStyles();

  return (
    <ol>
      {hits.map((hit) => (
        <Card className={classes.listingCard}>
          <CardMedia>
            <PlacardGallery images={hit.photo_main} listing={hit.objectID} />
          </CardMedia>
          <CardContent className={classes.content}>
            <Link
              className={classes.hover}
              color="textPrimary"
              href={`/listings/${hit.objectID}`}
            >
              <Typography variant="h5">{hit.title}</Typography>
              <Typography variant="subtitle1">{hit.property_address}</Typography>
              <Typography variant="subtitle1">Available Now</Typography>
              <Typography variant="subtitle1">
                ${hit.price_min} - ${hit.price_max}
              </Typography>
              <Typography variant="subtitle1">
                {hit.bedrooms_min} - {hit.bedrooms_max} Bedrooms
              </Typography>
            </Link>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<PhoneIcon />}
            >
              Call
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<EmailIcon />}
            >
              Email
            </Button>
          </CardActions>
        </Card>
      ))}
    </ol>
  );
}

export const CustomHits = connectHits(Hits);
