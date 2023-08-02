'use client'

import React from 'react'
import Image from 'next/image'
import SocialNavigation from '@/components/common/socialNavigation'
import { rgbDataURL } from '@/utils/getPlaceHolder'
import useContactForm from './hooks/useContactForm'
import {} from 'twin.macro'
import { CardContainer } from './style'

const Contact = () => {
  const { form, handleSubmit, handleChange } = useContactForm()

  return (
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
              placeholder="blur"
              priority
              blurDataURL={rgbDataURL(0, 0, 139)}
            />
          </div>
        </div>
        <div className="cardInside">
          <form
            tw="text-light flex flex-col items-center h-full"
            onSubmit={handleSubmit}
          >
            <label htmlFor="from" tw="text-light">
              Your Email
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
  )
}

export default Contact
