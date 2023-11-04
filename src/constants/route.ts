export const ROUTE: { [key: string]: string } = {
  Articles: '/',
  Projects: '/projects',
  About: '/about',
  // Blog: '/blog',
  Contact: '/contact',
}

export const ROUTES = Object.keys(ROUTE).map((key) => ({
  title: key,
  path: ROUTE[key],
}))

export const getRouteSlug = (slug: string, route: '' | 'projects' = '') => {
  return `${route}/${slug}`
}
