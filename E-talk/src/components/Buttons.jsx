import React from 'react'

const Buttons = (props) => {
  return (

    <button className="items-center h-16 rounded-md bg-slate-50 w-44 text-gray">
      {props.children}
    </button>

  )
}

export default Buttons