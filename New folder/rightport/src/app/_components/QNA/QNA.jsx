"use client"
import Image from 'next/image';
import Link from 'next/link';
const QNA = () => {

   const hanldeDownload = () => {
   
      const fileName = 'Talha2.pdf';
      const link = document.createElement('a');
      link.href = '/' + fileName;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-10 bg-zinc-800 text-gray-50">
      <div className="flex-1 mb-6 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Any type of question & Discussion.</h2>
        <p className="mb-6">Feel free to reach out to me anytime. I`m here to help!</p>
       <Link href={`/Contact`}> <button
      
  class="flex items-center bg-gradient-to-tr from-[#FF512F] to-[#DD2476] text-white gap-1 px-4 py-2 cursor-pointer  font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
>
  Let`s Talk
  <svg
    class="w-5 h-5"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
</button>
</Link> 
        <ul className="mt-6 space-y-2">
          <li className='font-medium text-md'>Emai :  ghaurit82@gmail.com</li>
          <li className='font-medium text-md'>Whatsapp: +326 5420488</li>
        </ul>
      </div>
      <div className="flex-1">
        <h2 className="text-xl md:text-xl font-bold mb-4">About Me</h2>
        <p className="mb-6 text-xl">
          I am a professional Web  Developer from Pakistan. I have been working as a Developer for 2 years.
        </p>
        <div class="relative duration-300  hover:-rotate-0  -rotate-12 group  border-sky-900 border-4  overflow-hidden rounded-2xl  h-52 w-72 bg-sky-800 p-5 flex flex-col items-start gap-4">
  <div class="text-gray-50">
    <span class="font-bold text-5xl">Jr</span>
    <p class="text-xs">JamStack Developer</p>
  </div>
  <button onClick={() => hanldeDownload()} class="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">Dowload CV 
    <svg class="w-6 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
 <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fill-rule="evenodd">
 </path>
</svg>
  </button> 

  <svg class="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="5"></path></svg>

  <svg class="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="2"></path></svg>

  
</div>        
      </div>
    </div>
  );
};

export default QNA;
