import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import algoliasearch from "algoliasearch/lite";
import {
  GoogleMapsLoader,
  GeoSearch,
  Control,
  Marker,
} from "react-instantsearch-dom-maps";
import { InstantSearch, SearchBox, Pagination, Hits } from "react-instantsearch-dom";
import Header from "../../components/Header/Header";
import { CustomHits } from "../../components/CustomHits/CustomHits";
import ListingsFooter from "../../components/ListingsFooter/ListingsFooter";
import { CustomGeoSearch } from "../../components/CustomGeoSearch/CustomGeoSearch";
import { CustomSearchBox } from "../../components/CustomSearchBox/CustomSearchBox";
import { CustomSortBy } from "../../components/CustomSortBy/CustomSortBy";
import { PriceNumericMenu } from "../../components/PriceNumericMenu/PriceNumericMenu";
import { BedsNumericMenu } from "../../components/BedsNumericMenu/BedsNumericMenu";
import { CustomRefinementList } from "../../components/CustomRefinementList/CustomRefinementList";
import "instantsearch.css/themes/algolia.css";
import { connect } from "react-redux";

const searchClient = algoliasearch("0K8NJFG4JX", "d084a720871c4f1cb8e2dd7478c03b57");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  listingForm: {
    minHeight: "3rem",
    padding: 0,
    paddingLeft: theme.spacing(3),
  },
  listingPage: {
    paddingRight: 0,
    maxHeight: "calc(100vh - 8rem)",
    width: "100%",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  pagination: {
    marginBottom: theme.spacing(2),
  },
  map: {
    position: "relative",
    height: "100%",
    marginLeft: theme.spacing(3),
  },
}));

export default function ListingView() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <InstantSearch
        indexName="TalisTest_test_LISTING_dev"
        searchClient={searchClient}
      >
        <Container
          disableGutters
          maxWidth="false"
          style={{ marginTop: "4.5rem", padding: 0 }}
        >
          {/* <Form className="listings-form"> */}
          <Grid container direction="row" xs={12} className={classes.listingForm}>
            <CustomSearchBox />
            <PriceNumericMenu
              attribute="price_min"
              items={[
                { label: "$1000", end: 1000 },
                { label: "$2000", end: 2000 },
                { label: "$3000", end: 3000 },
                { label: "$4000", end: 4000 },
                { label: "$5000", end: 5000 },
              ]}
            />
            <BedsNumericMenu
              attribute="bedrooms_max"
              items={[
                { label: "1", end: 1 },
                { label: "2", end: 2 },
                { label: "3", end: 3 },
                { label: "4", end: 4 },
              ]}
            />

            <CustomRefinementList
              attribute="property_type"
              values={[
                { label: "Townhome", value: "Townhome" },
                { label: "House", value: "House" },
                { label: "Condo", value: "Condo" },
                { label: "Apartment", value: "Apartment" },
              ]}
            />
            {/* <CustomSortBy items={[
                            { value: 'instant_search_price_asc', label: 'Price asc.' },
                            { value: 'instant_search_price_desc', label: 'Price desc.' },
                        ]} /> */}
          </Grid>
          {/* </Form> */}
        </Container>

        <Container disableGutters maxWidth="false">
          <Grid container direction="row" xs={12}>
            <Grid item md={7}>
              <div className={classes.map}>
                <CustomGeoSearch>
                  {({ hits }) => (
                    <div>
                      <Control />
                      {hits.map((hit) => (
                        <Marker
                          style={{ backgroundColor: "#00A3B0" }}
                          key={hit.objectID}
                          hit={hit}
                        />
                      ))}
                    </div>
                  )}
                </CustomGeoSearch>
                {/* <GoogleMapsLoader apiKey="AIzaSyC00vQGfJ3FNZ2oM-GkUMT4vYJOxyXQv64">
                  {(google) => (
                    <GeoSearch
                      google={google}
                      initialZoom={10}
                      initialPosition={{
                        lat: 5.55602,
                        lng: -0.1969,
                      }}
                    >
                      {({ hits }) => (
                        <div>
                          <Control />
                          {hits.map((hit) => (
                            <Marker
                              style={{ backgroundColor: "#00A3B0" }}
                              key={hit.objectID}
                              hit={hit}
                            />
                          ))}
                        </div>
                      )}
                    </GeoSearch>
                  )}
                </GoogleMapsLoader> */}
              </div>
              {/* <ListingsMap /> */}
            </Grid>
            <Grid item md={5} className={classes.listingPage}>
              <CustomHits />
              <Pagination
                showNext={true}
                showPrevious={true}
                showLast={true}
                className={classes.pagination}
              />
              <ListingsFooter />
            </Grid>
          </Grid>
        </Container>
      </InstantSearch>
    </div>
  );
}
