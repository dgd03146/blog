export const ROUTE: { [key: string]: string } = {
  Home: '/',
  About: '/about',
  Articles: '/articles',
  Projects: '/projects',
  Contact: '/contact',
}

export const ROUTES = Object.keys(ROUTE).map((key) => ({
  title: key,
  path: ROUTE[key],
}))
