export const ROUTE: { [key: string]: string } = {
  Home: '/',
  About: '/about',
  Blog: '/blog',
  Projects: '/projects',
  Contact: '/contact',
}

export const ROUTES = Object.keys(ROUTE).map((key) => ({
  title: key,
  path: ROUTE[key],
}))

export const ROUTE_SLUG = (slug: string, route: '' | 'projects' = '') => {
  return `${route}/${slug}`
}
