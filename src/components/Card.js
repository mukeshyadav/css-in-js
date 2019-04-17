import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
    background-color: #bbb;
    color: white;
    cursor: pointer;
    padding: 20px;
    font-size: 16px;
    margin: 20px;
`

const StyledCardLarge = styled(StyledCard)`
    padding: 30px;
    font-size: 22px;
`

export default function Card(props){
    return(
        <React.Fragment>
            <StyledCard>Normal</StyledCard>
            <StyledCardLarge>Extended large card</StyledCardLarge>
        </React.Fragment>
    )
}