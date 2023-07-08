import tw, { styled } from 'twin.macro'

export const MarkDownWrapper = styled.article`
  padding: 0;

  code {
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: 0;
    font-weight: 500;
    word-break: keep-all;
    overflow-wrap: break-word;
    border-radius: 4px;
    ${tw`text-[#eb5757] dark:text-emerald`}
    ${tw`bg-[rgba(135, 131, 120, 0.15)] dark:bg-slate`}
    /* background-color: rgba(135, 131, 120, 0.15); */
    padding: 0.125rem 0.25rem;
    margin-right: 0.125rem;
  }

  h1 {
    font-size: 28px;
    margin: 4.5rem 0 2rem;
  }

  h2 {
    margin: 2rem 0 1rem;
  }

  h3 {
    margin: 2rem 0 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6875rem;
    letter-spacing: 0;
    font-weight: 400;
    word-break: keep-all;
    overflow-wrap: break-word;

    margin: 0.75rem 0 1rem !important;

    img {
      width: 100%;
    }

    strong {
      ${tw`text-dark dark:text-slate`}
    }
  }

  pre {
    div {
      background-color: transparent !important;
    }
    code {
      ${tw`text-inherit dark:text-inherit`}
      ${tw`bg-inherit dark:bg-inherit`}
    }
  }

  ol {
    ::marker {
      ${tw`dark:text-slate`}
    }
  }

  li {
    ::marker {
      ${tw`dark:text-slate`}
    }
  }
`