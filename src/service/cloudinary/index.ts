import { v2 as cloudinary } from 'cloudinary'
import { TToastType, showToast } from '@/components/common/toast'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function uploadImageToCloudinary(imageUrl: string) {
  try {
    if (imageUrl.includes('cloudinary')) {
      return imageUrl
    }

    const result = await cloudinary.uploader.upload(imageUrl, {
      folder: 'blog', // 클라우디너리에서 사용할 폴더명
    })

    // 업로드된 이미지의 URL 반환
    // eslint-disable-next-line consistent-return
    return result.url
  } catch (error) {
    showToast({
      type: TToastType.error,
      message: 'Failed to upload to cloudinary',
    })
    throw error
  }
}
