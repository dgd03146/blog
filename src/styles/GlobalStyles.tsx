'use client'

// import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  body,button,input,textarea{
    ${tw`text-normal`}
  }

  h1, h2, h3{
    ${tw`font-bold`}
  }

  ul{
    list-style: none;
  }
 
  a{
    text-decoration: none;
  }
 
  button{
    cursor: pointer;
    border: none;
    outline: none;
    display: inline-block;
    padding: 1.2rem 2rem;
    border-radius: 1rem;
    font-weight:  ${tw`font-medium`}
  }

  button:hover{
    background-color: black;
  }

  img{
    max-width: 100%;
    height: auto;
  }
 
`

export default GlobalStyles
