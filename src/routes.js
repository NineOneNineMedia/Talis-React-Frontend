import React from "react";
import { Route } from "react-router-dom";


import AboutView from "./containers/AboutView/AboutView";
import HomeView from "./containers/HomeView/HomeView";
import ListingView from "./containers/ListingView/ListingView";
import DetailListingView from "./containers/DetailListingView/DetailListingView";
import UserProfileView from "./containers/UserProfileView/UserProfileView";
import UserFavListings from "./containers/UserFavListings/UserFavListings";
import UserLoginView from "./containers/UserLoginView/UserLoginView";

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/login/" component={UserLoginView} />
        <Route exact path="/register/" component={UserLoginView} />
        <Route exact path="/about" component={AboutView} />
        <Route exact path="/listings" component={ListingView} />
        <Route exact path="/listings/:listingID" component={DetailListingView} />
        <Route exact path="/myTalis/profile" component={UserProfileView} />
        <Route exact path="/myTalis/favorites" component={UserFavListings} />
        <Route exact path="/myTalis/account" component={UserProfileView} />
    </div>
);

export default BaseRouter;