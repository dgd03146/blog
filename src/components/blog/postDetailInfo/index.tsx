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
    <div tw="flex flex-col items-center gap-y-4 text-center">
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
      <h1 tw="text-[32px] tablet:text-[2.3rem]">{post.title}</h1>
      <h2 tw="text-[20px] tablet:text-[1.8rem] font-medium ">
        {post.description}
      </h2>
      <p>{formatDate(post.date)}</p>
      <Tags post={post} />
    </div>
  )
}

export default PostDetailInfo
