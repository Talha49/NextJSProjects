import React from 'react'

const Button = ({text, onClick}:{text:string, onClick:() => void} ) => {
  return (
    <button
  onClick={onClick}
  className="px-4 py-2 text-white rounded-md bg-gradient-to-r from-black to-green-900 hover:from-black hover:to-green-600 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50"
>
  {text}
</button>

  
  )
}

export default Button