import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Link } from "react-router-dom"
import PageRoutes from "./routes.js"


const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(218, 163, 87) !important;
    height: 100vh;
    margin: 0 !important;
    padding: 0;
    font: normal 16px/normal Arial, sans-serif;
  }

  a {
    color: blue;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    } 
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
`

const StyledLink = styled(Link)`
  color: brown;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: red;
  }
`

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Wrapper>
          <Navigation>
            <StyledLink to="/button">Button</StyledLink>
            <StyledLink to="/card">Card</StyledLink>
            <StyledLink to="/alert">Alert</StyledLink>
          </Navigation>
          <PageRoutes />
        </Wrapper>
      </BrowserRouter>
    )
  }
}
