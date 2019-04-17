import React from 'react'
import logo from '../logo.png'

export default function Home(){
    return(
        <React.Fragment>
            <img src={logo} alt='logo' />
            <h1>CSS in JS</h1>
        </React.Fragment>
    )
}

