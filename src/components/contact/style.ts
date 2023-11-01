import tw, { styled } from 'twin.macro'

export const CardContainer = styled.div`
  margin-top: 2rem;
  .card {
    margin: 0 auto;
    position: relative;

    cursor: pointer;
    /* transform-style: preserve-3d;
    transform: perspective(2500px);
    transition: 1s; */

    width: 300px;
    height: 400px;
    ${tw`desktop:w-[400px] desktop:h-[500px]`}
  }

  .card:hover {
    transform: perspective(2500px) rotate(5deg);
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.2),
      0 10px 100px rgba(0, 0, 0, 0.5);
    .cardFront {
      ${tw`mobile:opacity-0 mobile:ease-linear mobile:duration-500 desktop:opacity-100`}
      transform: rotateY(-160deg);
    }
    .title {
      visibility: hidden;
    }
  }

  .cardFront {
    border-radius: 12px;
    position: relative;

    background-image: linear-gradient(#030329, #4017b3);
    overflow: hidden;
    transform-origin: left;
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.2),
      30px 0 50px rgba(0, 0, 0, 0.4);
    transition: 0.6s;

    width: 300px;
    height: 400px;
    ${tw`desktop:w-[400px] desktop:h-[500px]`}
  }

  .title {
    text-align: center;
    padding: 1rem 0;
    font-size: 2rem;
    transition: 0.1s;
  }

  .imageWrapper {
    display: flex;
    width: 220px;

    ${tw`desktop:w-[310px] `}

    img {
      width: 100%;
      height: 100%;
      position: relative;
      object-fit: cover;
    }
  }

  .cardInside {
    width: 300px;
    height: 400px;
    ${tw`desktop:w-[400px] desktop:h-[500px]`}

    border-radius: 12px;
    position: absolute;
    background-image: linear-gradient(#030329, #4017b3);

    z-index: -1;
    left: 0;
    top: 0;
    box-shadow: inset 100px 20px 100px rgba(0, 0, 0, 0.2);

    form {
      font-size: 0.9rem;
      margin: 0 auto;
      max-width: 300px;
      padding: 1rem 0;
    }

    label {
      width: 200px;
      ${tw`desktop:w-[300px]`}
      text-align: left;
      margin-bottom: 0.5rem;
    }

    input {
      font-size: 0.85rem;
      width: 200px;
      ${tw`desktop:w-[300px]`}

      color: black;
      padding: 0.5rem 0.8rem;
      border-radius: 8px;
      margin-bottom: 1rem;
    }

    textarea {
      font-size: 0.85rem;
      width: 200px;
      ${tw`desktop:w-[300px]`}

      color: black;
      padding: 1rem 0.8rem;
      border-radius: 8px;
      margin-bottom: 1rem;
    }

    button {
      ${tw`text-dark`}
      color: black;
      background-color: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      &:hover {
        ${tw`bg-yellow text-light`}
      }
    }
  }
`
