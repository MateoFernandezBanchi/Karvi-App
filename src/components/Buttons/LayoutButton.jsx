import React from 'react'

export const LayoutButton = ({children, onClick}) => {
  return (
    <div className='top-5 right-5 bg-white rounded-full p-2 cursor-pointer text-blue-700 text-lg'
    onClick={onClick}
    >
        {children}
    </div>
  )
}
