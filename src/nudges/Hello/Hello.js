import React, { useState } from 'react'
import styled from "styled-components"
const StyledHello = styled.div`
height: 300px;
width: 300px;
display: flex;
flex-direction: column;
align-items: center;

 h4{
    font-size: 26px;
    margin: 0;
    padding: 0;
}
h5 {
    font-size: 22px;
    margin: 15;
    padding: 0;
}
`

const emojis = [
    {
        message: "You are on fire",
        emoji: "🔥"
    },
    {
        message: "Sky is the limit",
        emoji: "🚀"
    },

    {
        message: "Right On time",
        emoji: "📅"
    }
,
    {
        message: "One Billion",
        emoji: "💰"
    }
]
const Hello = () => {
    const [emoji, setEmoji] = useState(emojis[0])
    const handleRandom = () => {
        const rand = emojis[(Math.random() * emojis.length) | 0]
        setEmoji(rand)
    }
    return (
        <StyledHello>
            <h1>Hello Otello</h1>
            <h4>{emoji.emoji}</h4>
            <h5>{emoji.message}</h5>
            <button
                onClick={handleRandom}
            >
                Push Me
            </button>
        </StyledHello>
    )
}

export default Hello
