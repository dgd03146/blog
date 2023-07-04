import { keyframes } from 'styled-components'
import tw, { styled } from 'twin.macro'

const Animate = keyframes`
   0% {
     transform: rotate(0deg)
   }

   100% {
    transform: rotate(360deg)
   }
`

export const ImageWrapper = styled.div<{ current_theme?: string }>`
  position: relative;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  background: inherit;
  overflow: hidden;
  cursor: pointer;

  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    inset: -10px 150px;

    background: ${({ current_theme }) =>
      current_theme === 'light'
        ? 'linear-gradient(315deg, #a4253b, #053a86)'
        : 'linear-gradient(315deg, #cab539, #116668)'};

    transition: 0.5s;
    animation: ${Animate} 4s linear infinite;
  }

  &:hover::before {
    inset: -20px 0px;
  }

  &:hover {
    img {
      opacity: 0;
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 6px;
    ${({ current_theme }) =>
      current_theme === 'light' ? tw`bg-light` : tw`bg-dark`}

    border-radius: 50%;
    z-index: 0;
  }
`

export const Content = styled.div`
  position: absolute;
  inset: 30px;
  border: 6pxc solid white;
  z-index: 3;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
    pointer-events: none;
    z-index: 1;
  }

  h2 {
    position: relative;
    font-size: 1rem;
    text-align: center;

    font-weight: 600;
    letter-spacing: 0.05;

    span {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }

  a {
    position: relative;
    margin-top: 10px;
    padding: 10px 20px;

    color: white;
    border-radius: 25px;
    font-weight: 500;
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    text-decoration: none;
    transition: 0.5s;
    &:hover {
      letter-spacing: 0.2rem;
    }
  }
`
