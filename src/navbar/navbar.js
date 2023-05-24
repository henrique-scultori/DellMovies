import React from "react";
import styled from 'styled-components'

const NavBar = styled.nav`   
    height: 12vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
`
const NavList = styled.ul`
     width: 70%;
     display: flex;
     justify-content: space-around;
`

const NavItem = styled.li`
     list-style: none;
     font-size: 1.6rem;
     color: #f2f2f2;
     cursor: pointer;
 `

export default function NavComponent (){
    return(
        <NavBar>
            <NavList>
                <NavItem>Popular</NavItem>
                <NavItem>Drama</NavItem>
                <NavItem>Acao</NavItem>
                <NavItem>Aventura</NavItem>
                <NavItem>Comedia</NavItem>
                <NavItem>Crime</NavItem>
                <NavItem>Fantasia</NavItem>
                <NavItem>Familia</NavItem>
            </NavList>
        </NavBar>
    )
}