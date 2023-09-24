import { styled } from 'twin.macro'

export const ImageWrapper = styled.div`
  border-radius: 14px;

  display: flex;
  align-items: center;
  width: 100%;

  img {
    width: 100%;
    height: 300px;
    position: relative !important;
    object-fit: cover;
    border-radius: 12px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }
`
