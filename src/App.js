import React, { Component } from 'react'
import logo from './logo.png'

export default class App extends Component {
  render () {
    return (
      <div className='app'>
        <img src={logo} alt='logo' />
        <h1>CSS in JS</h1>
      </div>
    )
  }
}
