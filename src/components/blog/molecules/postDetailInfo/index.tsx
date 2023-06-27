import {} from 'twin.macro'
import Image from 'next/image'
import Tags from '@/components/common/molecules/tags'
import { TPost } from '@/types/post'
import { formatDate } from '@/utils/formatDate'
import { ImageWrapper } from './style'

type TProps = {
  post: TPost
}

const PostDetailInfo = ({ post }: TProps) => {
  return (
    <div tw="flex flex-col items-center gap-y-2">
      {/* TODO: 넣을지 말지 고민하기 */}
      {/* <ImageWrapper>
        <Image width={500} height={500} src={post.cover} alt="thumbnamil" />
      </ImageWrapper> */}
      <h1 tw="text-[32px] tablet:text-[3rem] ">{post.title}</h1>
      <h2 tw="text-[20px] tablet:text-[2rem] font-medium ">
        {post.description}
      </h2>
      <p tw="">{formatDate(post.date)}</p>
      <Tags post={post} />
    </div>
  )
}

export default PostDetailInfo
