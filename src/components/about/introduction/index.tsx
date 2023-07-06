import { ABOUT_ME } from '@/constants/about'

const Introduction = () => {
  return (
    <>
      {ABOUT_ME.map((it) => (
        <div key={it}>
          <h3>{it}</h3>
          <br />
        </div>
      ))}
    </>
  )
}

export default Introduction
