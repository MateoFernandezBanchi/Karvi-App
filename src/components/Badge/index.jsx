import React from 'react'

export const Badge = ({text}) => {
  return (
    <div>
        <span className="bg-slate-200 text-slate-500 px-2 py-1 rounded-full text-xs font-bold">{text}</span>
    </div>
  )
}
