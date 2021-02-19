import React from 'react'
import styled from "styled-components"
const StyledChatBubble = styled.div`
position: absolute;
position: fixed;
    bottom: calc(30px);
    right: calc(30px);
    z-index: 15;

svg {
-webkit-font-smoothing: antialiased;
cursor: pointer;
text-align: center;
d: path("M 64.557 65.487 c -4 0.482 -7.42 1.138 -10.86 1.257 c -5.824 0.201 -11.693 0.466 -17.483 -0.018 c -11.677 -0.976 -22.173 -4.749 -29.675 -14.559 C -7.841 33.36 2.774 5.123 25.93 0.64 c 18.296 -3.542 35.275 7.95 38.513 26.317 c 1.854 10.52 -0.945 19.876 -8.035 27.882 l -1.501 1.699 l 9.65 8.949 Z");
box-sizing: border-box;
stroke-width: 2px;
stroke: rgb(54, 181, 54);
fill: rgb(54, 181, 54);
transition: stroke 0.15s ease 0s;
}
`

const ChatBubble = () => {
    return (
        <StyledChatBubble>
            <svg active="0" width="65" height="67"  xmlns="https://www.w3.org/2000/svg"><path d="M64.557 65.487c-4 .482-7.42 1.138-10.86 1.257-5.824.201-11.693.466-17.483-.018-11.677-.976-22.173-4.749-29.675-14.559C-7.841 33.36 2.774 5.123 25.93.64c18.296-3.542 35.275 7.95 38.513 26.317 1.854 10.52-.945 19.876-8.035 27.882l-1.501 1.699 9.65 8.949z" ></path></svg>
        </StyledChatBubble>
    )
}

export default ChatBubble
