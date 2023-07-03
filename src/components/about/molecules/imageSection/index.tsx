import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import {} from 'twin.macro'
import { Content, ImageWrapper } from './style'

const ImageSection = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme } = useTheme()
  const current_theme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div tw="basis-[40] hidden mobile:block mobile:mb-8">
      <ImageWrapper current_theme={current_theme}>
        <Content>
          <Image
            src={'/assets/images/myPicture.jpg'}
            alt="Profile"
            width={400}
            height={400}
            priority={true}
          />
          <h2>
            Frontend Developer
            <br /> <span>Who value the service</span>
          </h2>
          <Link
            tw="bg-dark text-light dark:bg-light dark:text-dark "
            href={'/'}
          >
            Hire me
          </Link>
        </Content>
      </ImageWrapper>
    </div>
  )
}

export default ImageSection
