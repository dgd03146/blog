import {} from 'twin.macro'
import Image from 'next/image'
import Tags from '@/components/common/tags'
import { TNotionData } from '@/types/notion'
import { formatDate } from '@/utils/formatDate'
import { rgbDataURL } from '@/utils/getPlaceHolder'
import { ImageWrapper } from './style'

type TProps = {
  post: TNotionData
}

const PostDetailInfo = ({ post }: TProps) => {
  return (
    <div tw="flex flex-col gap-y-4">
      <ImageWrapper>
        <Image
          width={500}
          height={500}
          src={post.cover}
          alt="thumbnamil"
          placeholder="blur"
          blurDataURL={rgbDataURL(220, 220, 220)}
        />
      </ImageWrapper>
      <h1 tw="text-[40px] tablet:text-[48px] font-[700]">{post.title}</h1>
      <div tw="flex gap-x-4 items-center">
        <p>{formatDate(post.date)}</p>
        <Tags post={post} />
      </div>
      <p tw="mt-12 text-[17px] font-normal">{post.description}</p>
    </div>
  )
}

export default PostDetailInfo
