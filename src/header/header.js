import React from "react";
import styled from 'styled-components'
import Logo from './logo.svg'
import Lupa from './lupa.png'

const Img = styled.img`
    width:10rem;
    cursor: pointer;
    `

const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    `
const ImgDiv = styled.div`
    width: 30%;
    `
const NavDiv = styled.div`
    width: 30%;
    `

const ImgLupa = styled.img`
    position: relative;
    top:5px;
    width: 4rem;
    cursor: pointer;
    `

const HeaderStyle = styled.header`

    position: fixed;
    background-color: rgba(108, 122, 137 / 1) ;
    backdrop-filter: blur(25px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height:10vh;
    
    nav{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    ul{
        width: 50%;
        display:flex;
        justify-content: space-evenly;
        list-style:none;
    }

    a{
        text-decoration: none;
        color: white;
        font-size:1.5rem;
    }

    button{
        width: 10rem;
        height: 4rem;
        border-radius: 30px; 
        font-size: 1.6rem;
        border: none;
        color: white;
        background-color: #ffffff00
    }

    button: hover{
        border: none;
        background-color: #747474;
        cursor: pointer;
        color: #FFFFFF;
    }

`
export default function Header(){
    return(
    <HeaderStyle>
    <ImgDiv>
        <Img src={Logo} alt="logo" />
    </ImgDiv>
    <ButtonDiv>
        <button>Filmes</button>
        <button>Series</button>
    </ButtonDiv>
    <NavDiv>
        <nav>
        <ImgLupa src={Lupa} alt="lupa" />
        <ul>
            <li><a href="#filtro"> Filtro </a></li>
            <li><a href="#login"> Login </a></li>
        </ul>
        </nav>
    </NavDiv>
    </HeaderStyle>
    )
};