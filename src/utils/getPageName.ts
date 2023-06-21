export const getPageName = (text: string) => {
  const stringWithoutSlash = text.replace('/', '')

  const capitalizedText =
    stringWithoutSlash.charAt(0).toUpperCase() + stringWithoutSlash.slice(1)

  return capitalizedText
}
