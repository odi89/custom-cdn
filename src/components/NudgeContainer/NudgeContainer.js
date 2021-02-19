import React, { Children } from 'react'
import styled from "styled-components"
const StyledNudgeContainer = styled.div`
color: #000;
font-size: 16px;
line-height: 18px;
-webkit-font-smoothing: antialiased;
font-family: IBMPlex, "Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
box-sizing: border-box;
right: 0px;
bottom: 90px;
z-index: 10;
position: absolute;
border-radius: 14px;
background: rgb(255, 255, 255);
box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 15px 1px;
animation-timing-function: ease;
animation-iteration-count: 1;
animation-fill-mode: forwards;
animation-duration: 300ms;
animation-name: SzHHc;
width: auto;
height: auto;
max-height: 800px;
`

const NudgeContainer = (props) => {
    return (
        <StyledNudgeContainer>
        {props.children}
        </StyledNudgeContainer>
    )
}

export default NudgeContainer
