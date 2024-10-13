import React, { ReactNode } from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  disabled?: boolean
}

export default function Button({ children, className, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  )
}
