'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'
import SocialNavigation from '@/components/common/molecules/socialNavigation'
import { showToast, TToastType } from '@/components/common/molecules/toast'
import { TForm } from '../../types'
import { CardContainer } from './style'
import {} from 'twin.macro'

const Contact = () => {
  const [form, setform] = useState<TForm>({
    from: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    showToast({ type: TToastType.success, message: 'Email sent successfully!' })
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setform((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <CardContainer>
        <div className="card" tw="mx-auto text-light">
          <div className="cardFront">
            <h2 className="title">CONTACT ME</h2>
            <SocialNavigation />
            <div className="imageWrapper" tw="mx-auto">
              <Image
                src="/assets/images/lalaland-color.png"
                alt="lalaland"
                width={310}
                height={310}
              />
            </div>
          </div>
          <div className="cardInside">
            <form
              tw="text-light flex flex-col items-center h-full"
              onSubmit={handleSubmit}
            >
              <label htmlFor="from" tw="text-light">
                Email
              </label>
              <input
                type="text"
                id="from"
                name="from"
                required
                value={form.from}
                onChange={handleChange}
              />
              <label htmlFor="subject" tw="text-light">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
              />
              <label htmlFor="message" tw="text-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                cols={20}
                rows={8}
                value={form.message}
                onChange={handleChange}
                placeholder="Contact me!"
              ></textarea>
              <button>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </CardContainer>
    </>
  )
}

export default Contact
