import React from "react";
import { Route } from "react-router-dom";

import AboutView from "./containers/AboutView/AboutView";
import HomeView from "./containers/HomeView/HomeView";
import ListingsView from "./containers/ListingsView/ListingsView";
import DetailListingView from "./containers/DetailListingView/DetailListingView";
import DashboardView from "./containers/DashboardView/DashboardView";

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/about" component={AboutView} />
        <Route exact path="/listings" component={ListingsView} />
        <Route exact path="/listings/:listingID" component={DetailListingView} />
        <Route exact path="/dashboard" component={DashboardView} />
    </div>
);

export default BaseRouter;