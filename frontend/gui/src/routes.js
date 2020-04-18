import React from "react";
import { Route } from "react-router-dom";

import HomeView from "./containers/HomeView";

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={HomeView} />
    </div>
);

export default BaseRouter;