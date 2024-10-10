import React, { ReactNode } from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

export default function Button({ children, className }: ButtonProps) {
  return <button className={className}>{children}</button>
}
