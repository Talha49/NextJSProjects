import React from 'react'
import Link from 'next/link'
const Social = () => {
    return (
      <div className="px-10 py-8">
      <div className="relative">
        <h2 className="text-3xl font-bold text-gray-900 relative z-[-10]">
          <span className="relative inline-block pb-2 ">My Social</span>
        </h2>
        <div className="absolute bottom-0 left-4 scale-in w-[137px] h-1 bg-gray-900"></div>
      </div>
    
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Intro */}
        <div className="">
          <h2 className="text-3xl font-bold mb-4">Welcome to My Social Media Hub</h2>
          <p className="text-lg text-gray-700">Connect with me on various social media platforms to stay updated!</p>
        </div>
    
        {/* Social Icons */}
        <div className="">
          <h2 className="text-3xl font-bold">Social Media Touch</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-4">
            {/* GitHub */}
            <a
              href="https://github.com/Talha49"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-4 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mb-2"
                viewBox="0 0 15 15"
                fill="none"
                
              >
                <path
                  d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
              GitHub
            </a>
    
            {/* LinkedIn */}
            <a
  href="https://www.linkedin.com/in/talha-ghauri-front-end-developer-a366311b5"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex flex-col items-center p-4 rounded-md bg-blue-800 text-white font-semibold hover:bg-blue-700 transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 mb-2"
    viewBox="0 0 512 512"
    fill="currentColor"
    stroke="none"
    strokeWidth="0"
  >
    <path
      d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
    ></path>
  </svg>
  LinkedIn
</a>

           {/* Facebook */}
           <a
  href="https://www.facebook.com/talha.ghauri.71"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex flex-col items-center p-4 rounded-md bg-blue-800 text-white font-semibold hover:bg-blue-700 transition duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 mb-2"
    viewBox="0 0 448 512"
    fill="currentColor"
    stroke="none"
    strokeWidth="0"
  >
    <path
      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
    ></path>
  </svg>
  Facebook
</a>


    
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ghaurii_"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-4 rounded-md bg-purple-800 text-white font-semibold hover:bg-purple-700 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
    
    )
}

export default Social
