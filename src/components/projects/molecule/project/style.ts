import { styled } from 'twin.macro'

export const ImageWrapper = styled.div`
  border-radius: 14px;
  flex-basis: 50%;

  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover;
    border-radius: 12px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }
`
