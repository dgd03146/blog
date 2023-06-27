import Image from 'next/image'
import Link from 'next/link'
import {} from 'twin.macro'
import { Content, ImageWrapper } from './style'

const ImageSection = () => {
  return (
    <div tw="basis-[40] hidden mobile:block mobile:mb-8">
      <ImageWrapper>
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
          <Link href={'/'}>Hire me</Link>
        </Content>
      </ImageWrapper>
    </div>
  )
}

export default ImageSection
