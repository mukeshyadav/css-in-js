import React from "react"
import styled from "styled-components"
import { ELLIPSIS } from "./Helper.js"

const StyledCard = styled.div`
    background-color: #bbb;
    color: white;
    cursor: pointer;
    padding: 20px;
    font-size: 16px;
    margin: 20px;
    max-width: 600px;
`

const StyledCardLarge = styled(StyledCard)`
    padding: 30px;
    font-size: 22px;
`

const StyledDescription = styled.p`
    font-size: 14px;
    ${ELLIPSIS(200)}
`

export default function Card(props){
    return(
        <React.Fragment>
            <StyledCard>Normal
                <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet iaculis ipsum. Sed cursus bibendum sapien in feugiat. Suspendisse sit amet rutrum massa. Fusce tincidunt magna ac aliquet tincidunt. Phasellus nec malesuada mauris, finibus fringilla metus. Fusce tristique varius eros, eu tincidunt nulla elementum in</StyledDescription>
            </StyledCard>
            <StyledCardLarge>Extended large card</StyledCardLarge>
        </React.Fragment>
    )
}