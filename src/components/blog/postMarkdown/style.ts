import tw, { styled } from 'twin.macro'

export const MarkDownWrapper = styled.article`
  padding: 0;

  code {
    ${tw`font-inter`}
    font-size: 85%;
    line-height: normal;
    word-break: keep-all;
    overflow-wrap: break-word;
    border-radius: 4px;

    /* ${tw`text-red border-red text-[14px] font-medium p-0 dark:text-emerald dark:border-emerald shadow-[0_0_3px_red] dark:shadow-[0_0_3px_green] rounded-sm`} */

    ${tw`text-[#eb5757] dark:text-emerald`}
    ${tw`bg-[rgba(135, 131, 120, 0.15)] dark:bg-[#b8d8b8ee]`}
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
    font-size: 17px;
    line-height: 1.6875rem;
    letter-spacing: 0;
    font-weight: normal;
    word-break: keep-all;
    overflow-wrap: break-word;

    margin: 0.75rem 0 1rem !important;

    img {
      width: 100%;
    }

    strong {
      ${tw`text-dark dark:text-white`}
    }
  }

  pre {
    div {
      background-color: transparent !important;
    }
    code {
      font-size: 0.9rem;
      ${tw`text-inherit dark:text-inherit bg-transparent dark:bg-transparent`}
      ${tw`shadow-transparent dark:shadow-transparent`}
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

  ul,
  ol,
  li {
    strong {
      ${tw`text-dark dark:text-light`}
    }
  }
`
