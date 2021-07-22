import * as React from "react";
import {NavigationBar} from "./navigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {About} from "./about";
import {ExperiencePanel} from "./ExperiencePanel";


export const App = () => {

    return <Router>
        <NavigationBar/>
        <Switch>
            <Route path ="/about">
                <About/>
            </Route>

            <Route path ="/ExperiencePanel">
                <ExperiencePanel/>
                <experience/>
            </Route>
        </Switch>
    </Router>
}