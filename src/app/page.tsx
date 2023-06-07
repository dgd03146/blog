'use client'

import TransitionEffect from '@/components/molecules/transitionEffect'
import HomeTemplate from '@/components/templates/homeTemplate'

export default function Page() {
  // TODO: 아토믹 디자인으로 나누기
  // FIXME: 페이지 컴포넌트는 서버 컴포넌트로 남겨야 하지 않나?

  return (
    <>
      <TransitionEffect />
      <HomeTemplate />
    </>
  )
}
