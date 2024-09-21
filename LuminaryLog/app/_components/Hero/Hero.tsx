
import React from 'react'

import Link from 'next/link'

const Hero = () => {
  return (

<div className="relative bg-[url('/89787.jpg')] inset-0 bg-cover bg-center h-[70vh] flex items-center justify-center text-center text-white">
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
  <header className="z-10 text-white text-center p-10">
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Explore Your Blogging Journey</h1>
      <p className="text-xl mb-8">Best Place for Your Daily Needs</p>
      <div className="flex justify-center gap-4">
        <Link href='/Create' className="bg-transparent  hover:text-green-300  border border-green-300  font-bold py-2 px-4 rounded">
          Start Writing
        </Link>
      </div>
    </div>
  </header>
</div>








  )
}

export default Hero