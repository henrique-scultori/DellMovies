import React from "react";
import Header from "./header/header.js"
import Carousel from './carousel/carousel.js'
import Main from './main/main.js'
import NavComponent from './navbar/navbar.js'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

`

export default function App (){
  return(
    <>
    <GlobalStyle />
    <Header />
    <Main />
    <Carousel />
    <NavComponent />
    </>
  )
}