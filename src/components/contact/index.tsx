'use client'

import React from 'react'
import Image from 'next/image'

import { rgbDataURL } from '@/utils/getPlaceHolder'
import SocialNavigation from '../common/socialNavigation'
import useContactForm from './hooks/useContactForm'
import {} from 'twin.macro'
import { CardContainer } from './style'

// import { useTransition } from 'react';

const Contact = () => {
  const { form, handleSubmit, handleChange } = useContactForm()
  // const useTransition

  return (
    <CardContainer>
      <div tw="mb-8">
        <SocialNavigation />
      </div>
      <div className="card" tw="mx-auto text-light">
        <div className="cardFront">
          <h2 className="title">CONTACT ME</h2>
          <div className="imageWrapper" tw="mx-auto">
            <Image
              src="/assets/images/lalaland-color.png"
              alt="lalaland"
              width={310}
              height={310}
              placeholder="blur"
              blurDataURL={rgbDataURL(0, 0, 139)}
              priority
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
            <button>SEND EMAIL</button>
          </form>
        </div>
      </div>
    </CardContainer>
  )
}

export default Contact
