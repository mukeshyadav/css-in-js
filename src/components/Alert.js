import React from "react"
import styled from "styled-components"

const StyledAlert = styled.div.attrs({
    className: props => {
        console.log(props)
        const types = ['warning', 'info', 'danger', 'success']
        const type = types.find(item => props[item]) || 'info'
        return ` alert-${type}`
    }
})`
    border-radius: 10px;
    padding: 20px;
    & + & {
        margin-top: 15px;
    }
`

export default function Alert(){
    return(
        <React.Fragment>
            <StyledAlert success>Success</StyledAlert>
            <StyledAlert danger>Danger</StyledAlert>
            <StyledAlert>Info</StyledAlert>
            <StyledAlert warning>Warning</StyledAlert>
        </React.Fragment>
    )
}