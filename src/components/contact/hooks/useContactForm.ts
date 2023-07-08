import { ChangeEvent, FormEvent, useState } from 'react'
import { TToastType, showToast } from '@/components/common/toast'
import { DEFAULT_EMAIL_DATA } from '@/constants/email'
import { sendContactEmail } from '@/service/email'

const useContactForm = () => {
  const [form, setForm] = useState(DEFAULT_EMAIL_DATA)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendContactEmail(form)
      .then(() => {
        showToast({
          type: TToastType.success,
          message: 'Email sent successfully!',
        })
        setForm(DEFAULT_EMAIL_DATA)
      })
      .catch(() => {
        showToast({
          type: TToastType.error,
          message: 'Email transfer failed',
        })
      })
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return { form, handleSubmit, handleChange }
}

export default useContactForm
