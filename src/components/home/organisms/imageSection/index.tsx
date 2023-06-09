import Image from 'next/image'
import Link from 'next/link'
import { keyframes } from 'styled-components'
import tw, { styled } from 'twin.macro'
import { Heading2 } from '@/components/common/atoms/texts'

const ImageSection = () => {
  return (
    <div tw="basis-[40] hidden mobile:block mobile:mb-8">
      <ImageWrapper>
        <Content>
          <Image
            src={'/assets/images/myProfile.jpg'}
            alt="Profile"
            width={400}
            height={400}
            priority
          />
          <Heading2 text="Frontend Developer">
            <br /> <span>Who value the service</span>
          </Heading2>
          <Link href={'/'}>Hire me</Link>
        </Content>
      </ImageWrapper>
    </div>
  )
}

export default ImageSection

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
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: -10px 140px;
    background: linear-gradient(315deg, #7d7d7d, #f5f5f5);
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
