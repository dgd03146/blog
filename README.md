# Introduction
![Untitled](https://github.com/dgd03146/blog/assets/84106842/c6abf355-b934-423d-900f-cfa363cc97b4)

I have built an engaging personal portfolio and blog website using the newest version of Next.js (version 13). Taking inspiration from the movie "La La Land," my website displays my journey in web development and showcases my projects. By using meaningful color codes from the film, I've created a visually attractive and appealing website. I've utilized server components and kept up with the latest trends in Next.js, allowing me to become skilled in server-side rendering (SSR) and client-side rendering (CSR).

# Built With

I created this app Next.js 13 version with React. As a CSS library, I used twin.macro so that use tailwind and styled-components.

# Getting Started

First, run the development server:

`npm run dev
# or
yarn dev
# or
pnpm dev`

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `[next/font](https://nextjs.org/docs/basic-features/font-optimization)` to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details

# Pages

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6371f1bc-b790-4430-9732-212742719b87/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5a811344-3ddd-40b4-823b-3c885fac80f7/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df0d53d4-3a25-4fa0-bfc1-82ead7a3508d/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2df297e3-f08d-40da-8b97-3fd55d0fc26a/Untitled.png)

- About

This page showcases my interests and the tech stacks I am proficient in. Discover what fascinates me and explore the range of technologies I can handle.

- Blog

This page shows articles that I studied and wrote about tech stacks or thoughts in front-end development. I delve into my studies and provide insights into the world of software development.

- Projects

This page features the front-end projects I have undertaken during my studies. Explore a collection of my completed projects, each demonstrating my proficiency in front-end development

- Contact

This page allows you to get in touch with me by sending an email. Feel free to reach out with any inquiries, collaborations, or questions.

# What I have considered

## **Atomic Design**

At first, I organized my code using Atomic Design. However, using Atomic Design for the sake of convenience made it difficult to distinguish between molecules and organisms.

Atomic Design aims to increase reusability by breaking down components into smaller parts. However, in my blog project, there weren't many components that could be reused. For example, buttons were only used a couple of times, and attempting to apply Atomic Design without considering reusability took more time to separate the components.

Although I failed to implement Atomic Design in this project, it seems to be a good approach in theory, especially for applications that heavily prioritize reusability. It might be worth trying out.

## **Twin.macro**

Feeling a bit uncomfortable with implementing code solely using Tailwind CSS, I used a CSS library called Twin.macro, which allows combining Tailwind with Styled Components. Using Twin.macro made it more convenient and easier to style components. After setting the overall structure with Tailwind, I implemented the detailed elements using Styled Components.

## **Server Component**

When using Next.js 13 router, I considered using Server Components for the first time. Through bundle analysis, I discovered that Markdown libraries require a significant bundle size.

To reduce bundle size and achieve faster JavaScript loading speed, I implemented the usage of Markdown libraries as server components.
