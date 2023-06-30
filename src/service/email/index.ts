import { TToastType, showToast } from '@/components/common/molecules/toast'
import { TEmail } from './types'

export const sendContactEmail = async (email: TEmail) => {
  // API fetch to API Route
  const response = await fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()
  if (!response.ok) {
    const errorMessage = data.message || 'Failed server request'
    showToast({ type: TToastType.error, message: errorMessage })
    throw new Error(data.message || '')
  }
  return data
}
