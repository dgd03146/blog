import { styled } from 'twin.macro'

export const PostContainer = styled.div`
  /* padding: 1.5rem 2rem; */

  h1 {
    display: inline-block;
    overflow: hidden;
    font-weight: 700;
    line-height: 1.4;

    text-overflow: ellipsis;
    word-break: keep-all;
    overflow-wrap: break-word;
    -webkit-transition: color 0.3s ease;
    transition: color 0.3s ease;
    -webkit-line-clamp: 2;
  }
  &:hover {
    img {
      /* transition: color 0.3s ease-in-out; */
      transform: translateY(-0.5rem);
      transition: transform 400ms ease-in-out;
    }
  }

  /* transition: background-color, box-shadow 0.2s ease-in-out; */

  h3 {
    font-size: 17px;
    display: block;
    margin: 0;
    margin-bottom: 12px;
    line-height: 1.6;
    color: #4e5968;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  border-radius: 14px;

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
