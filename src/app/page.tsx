'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa'
import { RiSendPlaneFill } from 'react-icons/ri'
import { keyframes } from 'styled-components'
import tw, { styled } from 'twin.macro'

export default function Page() {
  return (
    <div tw="flex items-center text-dark w-full px-32 h-[calc(100vh - 90px)]  gap-x-20">
      <div tw="basis-[20] ">
        <Link href={'/'}>
          <FaGithub tw="mb-6 text-h3 text-dark hover:text-gray" />
        </Link>
        <Link href={'/'}>
          <FaLinkedinIn tw="mb-6 text-h3 text-dark hover:text-gray" />
        </Link>
        <Link href={'/'}>
          <FaMediumM tw="text-h3 text-dark hover:text-gray" />
        </Link>
      </div>
      <div tw="basis-[40]">
        <h1 tw="text-h1">GeoJung Im</h1>
        <h3 tw="text-h2 flex">Frontend Developer</h3>
        <p tw="text-h3">
          I'm creative developer based in London, and I'm very passionate and
          dedicated to my work.
        </p>
        <button tw="flex items-center gap-x-2 p-4 bg-dark text-light rounded-lg my-4 w-[150px] justify-center hover:text-gray">
          <Link href="/contact">Contact Me</Link>
          <RiSendPlaneFill />
        </button>
      </div>
      <div tw="basis-[40]">
        <ImageWrapper>
          <Content>
            <Image
              src={'/assets/images/myProfile.jpg'}
              alt="Profile"
              width={500}
              height={500}
              priority
            />
            <h2>
              Frontend Developer
              <br /> <span>Who value the service</span>
            </h2>
            <Link href={'/'}>Hire me</Link>
          </Content>
        </ImageWrapper>
      </div>
    </div>
  )
}

const animate = keyframes`
   0% {
     transform: rotate(0deg)
   }

   100% {
    transform: rotate(360deg)
   }
`

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  width: 400px;
  height: 400px;
  background: #000000;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -10px 140px;
    background: linear-gradient(315deg, #ffc1c1, #c4ddff);
    transition: 0.5s;
    animation: ${animate} 4s linear infinite;
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
    background: white;
    border-radius: 50%;
    z-index: 1;
  }
`

const Content = styled.div`
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
    z-index: 3;
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
    background: #1b1b1b;
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
