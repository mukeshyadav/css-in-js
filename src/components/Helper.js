import { css } from "styled-components"

export const ELLIPSIS = (width=200) => 
    css`
        width: ${width}px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `
