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
