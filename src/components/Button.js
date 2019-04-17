import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    background-color: ${ props => props.primary ? "blue" : props.secondary ? "green" : "red" };
    color: white;
    cursor: pointer;
    padding: 20px;
    font-size: 16px;
`

export default function Button(props){
    return(
        <React.Fragment>
            <StyledButton> Normal </StyledButton>
            <StyledButton primary> Primary </StyledButton>
            <StyledButton secondary> Secondary </StyledButton>
            
        </React.Fragment>
    )
}