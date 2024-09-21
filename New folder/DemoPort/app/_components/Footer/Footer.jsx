import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
       

<footer class="bg-white shadow-xl">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="lg:flex lg:items-start lg:gap-8">
      <div class="text-teal-600">
      <Image src='/logo.png' alt='logo' width={40} height={40} />
        
      </div>

      <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
        <div class="col-span-2">
          <div>
            <h2 class="text-2xl font-bold text-gray-900">Get the latest news!</h2>

            <p class="mt-4 text-gray-500">
             Suscribe My Newsletter for the updates of Latest Blogs & Projects !
            </p>
          </div>
        </div>

        <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
          <form class="w-full">
            <label for="UserEmail" class="sr-only"> Email </label>

            <div
              class="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
            >
              <input
                type="email"
                id="UserEmail"
                placeholder="john@rhcp.com"
                class="w-full border-none h-10 focus:border-transparent focus:ring-transparent sm:text-sm"
              />

<button class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>

            </div>
          </form>
        </div>

       

       

       

       

    
      
      </div>
    </div>

    <div class="mt-8 border-t border-gray-100 pt-8">
      <div class="sm:flex sm:justify-between">
        
        <p class="text-xs text-gray-500">&copy; 2022. GlitchyDevs. All rights reserved.</p>
         
        <ul class="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
          <li>
            <a href="#" class="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
          </li>

          <li>
            <a href="#" class="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
          </li>

          <li>
            <a href="#" class="text-gray-500 transition hover:opacity-75"> Cookies </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
    )
}

export default Footer
