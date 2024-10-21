import React from 'react'

type TitleProps = {
  children: React.ReactNode
}

function Title({ children }: TitleProps) {
  return (
    <h2
      className={
        'my-14 from-[#007BFF] to-[#52D3B8] text-center text-4xl hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent'
      }
    >
      {children}
    </h2>
  )
}

export default Title
