import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#6DBBFF" className="w-9 h-9 " viewBox="0 0 24 24">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 5c-.32 0-.63.05-.94.09C10.97 4.35 9.99 4 9 4 6.24 4 4 6.24 4 9c0 .87.22 1.68.6 2.39-.55.56-1 1.27-1.27 2.06-.06.2-.1.41-.1.62v2c0 1.1.9 2 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1c1.1 0 2-.9 2-2v-2c0-.21-.04-.42-.1-.62-.27-.79-.72-1.5-1.27-2.06.38-.71.6-1.52.6-2.39 0-2.76-2.24-5-5-5zm2 11h-4v-2h4v2zm0-4H8v-2h6v2z"/>
</svg>

    <p className="ml-3 text-xl">
  <span className='font-medium text-green-600 text-3xl'>L</span>uminary<span className="text-orange-500">Logs</span>
</p>

    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 TalhaGhauri —
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@TKGBloggz</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
  )
}

export default Footer