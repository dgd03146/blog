import {} from 'twin.macro'
import { TPost } from '@/components/blog/types/post'
import Tags from '@/components/common/tags'
import { formatDate } from '@/utils/formatDate'

type TProps = {
  post: TPost
}

const PostDetailInfo = ({ post }: TProps) => {
  return (
    <div tw="flex flex-col items-center gap-y-2 text-center">
      {/* TODO: 넣을지 말지 고민하기 */}
      {/* <ImageWrapper>
        <Image width={500} height={500} src={post.cover} alt="thumbnamil"    placeholder="blur"
         blurDataURL={rgbDataURL(220, 220, 220)}/>
      </ImageWrapper> */}
      <h1 tw="text-[32px] tablet:text-[3rem]">{post.title}</h1>
      <h2 tw="text-[20px] tablet:text-[2rem] font-medium ">
        {post.description}
      </h2>
      <p>{formatDate(post.date)}</p>
      <Tags post={post} />
    </div>
  )
}

export default PostDetailInfo
