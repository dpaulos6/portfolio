import React from 'react'

interface CardProps {
  imageUrl: string
  title: string
  description: string
  link: string
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, link }) => {
  return (
    <div className="flex h-auto w-full flex-col overflow-hidden rounded-lg border-2 bg-gray-800 text-white shadow-md md:h-[300px] md:w-[60%] md:flex-row">
      <div className="h-48 flex-shrink-0 overflow-hidden md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>

      <div className="flex flex-col justify-between p-4 md:w-1/2">
        <div>
          <div className="mb-2 text-lg font-bold">{title}</div>
          <p className="text-sm">{description}</p>
        </div>
        <div className="mt-auto">
          <a
            href={link}
            className="text-primary hover:text-accent"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
