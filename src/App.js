import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './logo.png'

const Wrapper = styled.div`
  background-color: rgb(218, 163, 87);
  font: normal 16px / normal Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default class App extends Component {
  render () {
    return (
      <Wrapper>
        <img src={logo} alt='logo' />
        <h1>CSS in JS</h1>
        <p>
          sddsf
        </p>
      </Wrapper>
    )
  }
}
