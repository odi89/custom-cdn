import React from 'react'
import styled from "styled-components"
const StyledNav = styled.div`
height: 100px;
background: pink;
display: flex;
justify-content: space-between;
align-items: center;
`
const StyledColumn = styled.div`
`
const Build = styled.div`
cursor: pointer;
`



const Nav = () => {
    const handleBuild = ()=>{
        alert("handle build")
    }
    return (
        <StyledNav>
            <StyledColumn>
                <h1>Otello</h1>
            </StyledColumn>
            <Build onClick={handleBuild}>
                build
        </Build>
            <StyledColumn>
            </StyledColumn>
        </StyledNav>
    )
}

export default Nav
