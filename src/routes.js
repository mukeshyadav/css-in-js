import React from "react"
import { Route } from "react-router-dom"
import Home from "./components/Home.js"
import Button from "./components/Button.js"


export default function PageRoutes(){
    return(
        <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/button" component={Button} />
        </React.Fragment>
    )
}