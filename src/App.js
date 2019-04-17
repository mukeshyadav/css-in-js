import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link } from "react-router-dom"
import PageRoutes from "./routes.js"


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
      <BrowserRouter>
        <Wrapper>
          <Link to="/button">Button</Link>
          <PageRoutes />
        </Wrapper>
      </BrowserRouter>
    )
  }
}
