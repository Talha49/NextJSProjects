import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
  
  <div className="md:w-[60%] px-4 py-8 ">

  <div className="relative">
  <h2 className="text-3xl font-bold text-gray-900 relative z-10">
    <span className="relative inline-block pb-2 scale-in">
      About
    </span>
  </h2>
  <div className="absolute bottom-0 left-4 scale-in w-[137px] h-1  bg-gray-900"></div>
  
</div>


  <p className="text-lg md:text-base mb-4 mt-6">
    Welcome to <span className='font-medium text-xl text-[#FF512F]'>GlitchDevs</span>, your destination for innovative <span className='text-[#cf5942] text-xl font-medium'>JamStack</span> solutions. As a seasoned developer, I am dedicated to crafting seamless digital experiences that push the boundaries of technology. With a blend of creativity, innovation, and expertise, I strive to deliver cutting-edge solutions that redefine digital excellence. Let's collaborate and bring your ideas to life.
  </p>

  <ul className="list-disc pl-4 mb-4">
    <li className="text-md md:text-base">Experienced in developing scalable web applications using modern technologies.</li>
    <li className="text-md md:text-base">Proficient in frontend frameworks such as React.js and Next.js, ensuring dynamic and responsive user interfaces.</li>
    <li className="text-md md:text-base">Skilled in backend development with Node.js, creating robust and efficient server-side applications.</li>
  </ul>

  <p className="text-md md:text-base mb-4">
    Ready to take your project to the next level? Let's connect and explore the possibilities. Together, we can turn your vision into reality.
  </p>

  <button className="bg-gradient-to-tr from-[#FF512F] to-[#DD2476] text-white px-4 py-2 rounded-lg ">
   Projects
  </button>

</div>

<div className="md:w-[35%] px-4 py-8  grid gap-4 grid-cols-2 ">
      <img src="/about1.jpg" alt="Picture" className="w-full rounded-xl shadow-lg hover:scale-100 md:hover:scale-150 transition ease-in-out" />
      <img src="/about3.jpg" alt="Picture" className="w-full shadow-lg rounded-xl hover:scale-100 md:hover:scale-150 transition ease-in-out"  />
      <img src="/about4.jpg" alt="Picture" className="w-full shadow-lg rounded-xl hover:scale-100 md:hover:scale-150 transition ease-in-out" />
      <img src="/about2.jpg" alt="Picture" className="w-full shadow-lg rounded-xl hover:scale-100 md:hover:scale-150 transition ease-in-out" />
    </div>


  </div>
  )
}

export default About