import Image from 'next/image'
import Link from 'next/link'

import {} from 'twin.macro'
import { LINKEDIN_URL } from '@/constants/url'
import { rgbDataURL } from '@/utils/getPlaceHolder'
import useCurrentTheme from '../../../hooks/useCurrentTheme'
import { Content, ImageWrapper } from './style'

const ImageSection = () => {
  const { mounted, current_theme } = useCurrentTheme()

  return (
    <div tw="flex items-center flex-col w-[50%]">
      {mounted && (
        <div tw="hidden mobile:block mobile:mb-8">
          <ImageWrapper current_theme={current_theme}>
            <Content>
              <Image
                src={'/assets/images/myPicture.jpg'}
                alt="Profile"
                width={400}
                height={400}
                priority={true}
                placeholder="blur"
                blurDataURL={rgbDataURL(220, 220, 220)}
              />
              <h2>
                Frontend Developer
                <br /> <span>Who value the service</span>
              </h2>
              <Link
                tw="bg-dark text-light dark:bg-light dark:text-dark "
                href={LINKEDIN_URL}
              >
                Hire me
              </Link>
            </Content>
          </ImageWrapper>
        </div>
      )}
    </div>
  )
}

export default ImageSection
