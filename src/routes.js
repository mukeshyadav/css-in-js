import React from "react"
import { Route } from "react-router-dom"
import Home from "./components/Home.js"
import Button from "./components/Button.js"
import Card from "./components/Card.js"
import Alert from "./components/Alert.js"


export default function PageRoutes(){
    return(
        <React.Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/button" component={Button} />
            <Route path="/card" component={Card} />
            <Route path="/alert" component={Alert} />
        </React.Fragment>
    )
}