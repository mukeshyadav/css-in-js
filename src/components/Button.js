import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    background-color: blue;
    color: white;
    cursor: pointer;
    padding: 20px;
    font-size: 16px;

    & ~ & {
        background-color: gray;
    }

    &.otherButton{
        background-color: magenta;
    }

    &:hover {
        background-color: green;
        color: white;
    }

    &:active {
        background-color: red;
    }
`

export default function Button(props){
    return(
        <React.Fragment>
            <StyledButton> Normal </StyledButton>
            <StyledButton> Next </StyledButton>
            <StyledButton className="otherButton"> Other </StyledButton>
        </React.Fragment>
    )
}