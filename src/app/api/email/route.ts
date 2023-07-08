import * as yup from 'yup'
import { TToastType, showToast } from '@/components/common/toast'
import { sendEmail } from '@/service/email/nodeMailer'

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
})

export async function POST(req: Request) {
  const body = await req.json()

  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: 'Email transfer failed' }), {
      status: 400,
    })
  }

  return sendEmail(body) //
    .then(
      () =>
        new Response(
          JSON.stringify({ message: 'Email has sent successfully' }),
          {
            status: 200,
          },
        ),
    )
    .catch((error) => {
      if (error instanceof Error) {
        showToast({ type: TToastType.error, message: error.message })
      }
      return new Response(
        JSON.stringify({ message: 'Email transfer failed' }),
        { status: 500 }, // Internal Error
      )
    })
}
