import React from 'react'

export const BoxWrapper = ({ icon, title, text, number }) => {
  return (
    <div className='h-full flex flex-col gap-2'>
      <div className='flex justify-between items-start'>
        <h3 className='text-gray-500 capitalize text-xl font-medium'>
          {title}
        </h3>
        {icon}
      </div>
      <h2 className="text-2xl font-medium text-gray-600 capitalize mt-auto">{number}</h2>
      <p>{text}</p>
    </div>
  )
}
