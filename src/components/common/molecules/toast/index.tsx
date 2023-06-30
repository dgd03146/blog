'use client'

import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Container } from './style'

interface ToastProps {
  type: TToastType
  message?: string
  action?: string
}

// FIXME: 타입 폴더 분리하기

export enum TToastType {
  success,
  error,
  info,
  warn,
}

const toastOptions: ToastOptions = {
  position: 'bottom-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  pauseOnFocusLoss: true,
  closeButton: false,
}

// FIXME: toast는 atom인가 molecule인가

export function showToast({ type, message }: ToastProps) {
  switch (type) {
    case TToastType.success:
      toast.success(message || 'Success!', {
        ...toastOptions,
        // icon: <img src="/svgs/toast_success.svg" alt="success" />,
      })
      break
    case TToastType.error:
      toast.error(message || 'Try again', {
        ...toastOptions,
        // icon: <img src="/svgs/toast_error.svg" alt="error" />,
      })
      break
    default:
  }
}

const Toast = () => {
  return <Container />
}

export default Toast
