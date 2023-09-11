# Deployed URL
https://junglog.vercel.app/

# Introduction
![Untitled](https://github.com/dgd03146/blog/assets/84106842/c6abf355-b934-423d-900f-cfa363cc97b4)

I have built an engaging personal portfolio and blog website using the newest version of Next.js (version 13). Taking inspiration from the movie "La La Land," my website displays my journey in web development and showcases my projects. By using meaningful color codes from the film, I've created a visually attractive and appealing website. I've utilized server components and kept up with the latest trends in Next.js, allowing me to become skilled in server-side rendering (SSR) and client-side rendering (CSR).

# Built With

Built an application using Next.js and React, leveraging the latest version, Next.js 13. Implemented CSS styling using twin.macro, which enabled the use of both Tailwind CSS and styled-components.

# Getting Started

First, run the development server:

`npm run dev`

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

### About
![about](https://github.com/dgd03146/blog/assets/84106842/43cb1e37-b2de-43aa-86f1-b6a63dd958dd)

This page showcases my interests and the tech stacks I am proficient in. Discover what fascinates me and explore the range of technologies I can handle.

### Blog
![blog](https://github.com/dgd03146/blog/assets/84106842/30188bb0-3953-4da0-8c5d-ac0aa113d6bf)

This page shows articles that I studied and wrote about tech stacks or thoughts in front-end development. I delve into my studies and provide insights into the world of software development.

### Projects
![projects_page](https://github.com/dgd03146/blog/assets/84106842/2f797d4b-af18-4bd3-8573-510467202fac)

This page features the front-end projects I have undertaken during my studies. Explore a collection of my completed projects, each demonstrating my proficiency in front-end development

### Contact
![contact](https://github.com/dgd03146/blog/assets/84106842/85251c5c-1aac-4c78-a875-2b88fb36ebad)

This page allows you to get in touch with me by sending an email. Feel free to reach out with any inquiries, collaborations, or questions.

# What I have considered
## Design

Implemented a design inspired by the movie "La La Land" to showcase my personal interests. Incorporated the distinct color palette from the movie, which infuses each scene with its own personality. Applied these colors to enhance the visual appeal of my blog project.

## **Atomic Design Pattern**

At first, I organized my code using Atomic Design. However, using Atomic Design for the sake of convenience made it difficult to distinguish between molecules and organisms.

Atomic Design aims to increase reusability by breaking down components into smaller parts. However, in my blog project, there weren't many components that could be reused. For example, buttons were only used a couple of times, and attempting to apply Atomic Design without considering reusability took more time to separate the components.

Although I failed to implement Atomic Design in this project, it seems to be a good approach in theory, especially for applications that heavily prioritize reusability. It might be worth trying out.

## **Twin.macro**

Feeling a bit uncomfortable with implementing code solely using Tailwind CSS, I used a CSS library called Twin.macro, which allows combining Tailwind with Styled Components. Using Twin.macro made it more convenient and easier to style components. After setting the overall structure with Tailwind, I implemented the detailed elements using Styled Components.

## **Server Component**

When using Next.js 13 router, I considered using Server Components for the first time. Through bundle analysis, I discovered that Markdown libraries require a significant bundle size.

To reduce bundle size and achieve faster JavaScript loading speed, I implemented the usage of Markdown libraries as server components.

## Dark Mode

Applied Dark mode functionality to the application, enhancing the overall user experience

## Development Setting

Ensured code quality and adherence to coding conventions by implementing ESLint, Prettier, and Husky. Utilized the issue tracking system to enable gradual progress and consistent development of the project.
