// // components/Sidebar.js
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaHome, FaUser, FaCog, FaEnvelope, FaBars } from "react-icons/fa";
// import { LuChevronLast, LuChevronFirst } from "react-icons/lu";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <aside
//       className={`bg-green-200 flex flex-col justify-between p-6 rounded-l-3xl transition-all duration-300 ease-in-out ${
//         isOpen ? "w-64" : "w-20"
//       }`}
//     >
//       <div className="space-y-6">
//         <div className="flex items-center space-x-4 justify-center">
//           <Image
//             src="/profile.jpg"
//             alt="Profile"
//             width={40}
//             height={40}
//             className="rounded-full"
//           />
//           {isOpen && <span className="font-bold">John Doe</span>}
//         </div>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className=" w-full text-center"
//         >
//           {isOpen ? (
//             <LuChevronFirst className="inline-block" />
//           ) : (
//             <LuChevronLast className="inline-block" />
//           )}
//         </button>
//         <nav className="space-y-4">
//           <NavLink href="/" icon={<FaHome />} text="Home" isOpen={isOpen} />
//           <NavLink
//             href="/profile"
//             icon={<FaUser />}
//             text="Profile"
//             isOpen={isOpen}
//           />
//           <NavLink
//             href="/settings"
//             icon={<FaCog />}
//             text="Settings"
//             isOpen={isOpen}
//           />
//           <NavLink
//             href="/messages"
//             icon={<FaEnvelope />}
//             text="Messages"
//             isOpen={isOpen}
//           />
//         </nav>
//       </div>
//       <button
//         className={`bg-blue-500 text-white py-2 px-6  rounded hover:bg-blue-600 transition-colors duration-200 ${
//           isOpen ? "" : "p-2"
//         }`}
//       >
//         {isOpen ? "Logout" : <LuChevronLast />}
//       </button>
//     </aside>
//   );
// }

// function NavLink({ href, icon, text, isOpen }) {
//   return (
//     <Link
//       href={href}
//       className="flex items-center space-x-4 p-2 rounded-lg hover:bg-green-300 transition-all duration-200 group"
//     >
//       <div className="text-2xl group-hover:translate-x-1 transition-transform duration-200">
//         {icon}
//       </div>
//       {isOpen && (
//         <span className="group-hover:translate-x-1 transition-transform duration-200">
//           {text}
//         </span>
//       )}
//     </Link>
//   );
// }



  // components/Sidebar.js
  import Image from 'next/image'
  import Link from 'next/link'
  import { FaHome, FaUser, FaCog, FaEnvelope } from 'react-icons/fa'
  
  export default function SIdebar() {
    return (
      <aside className="bg-gradient-to-r from-[#F5BCBA] to-[#C3C7FE] border sm:w-52 w-16 items-center flex flex-col md:justify-between justify-around p-6 rounded-l-3xl transition-all duration-300 ease-in-out">
       
          <div className="flex items-center space-x-4">
            <Image src="/profile.jpg" alt="Profile" width={40} height={40} className="rounded-full" />
            <span className="font-bold sm:block hidden">John Doe</span>
          </div>
          <nav className="space-y-4">
            <NavLink href="/" icon={<FaHome />} text="Home" />
            <NavLink href="/Tasks" icon={<FaUser />} text="Tasks" />
            <NavLink href="/settings" icon={<FaCog />} text="Complete Task" />
            <NavLink href="/messages" icon={<FaEnvelope />} text="Dashboard" />
          </nav>
      
          <Link href={'/'} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-green-300 transition-all duration-200 group">
        <div className="text-xl group-hover:translate-x-1 transition-transform duration-200"><FaUser/></div>
        <span className="group-hover:translate-x-1 transition-transform duration-200 sm:block hidden text-sm">Sign Up</span>
      </Link>
      </aside>
    )
  }
  
  function NavLink({ href, icon, text }) {
    return (
      <Link href={href} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-green-300 transition-all duration-200 group">
        <div className="text-xl group-hover:translate-x-1 transition-transform duration-200">{icon}</div>
        <span className="group-hover:translate-x-1 transition-transform duration-200 sm:block hidden text-sm">{text}</span>
      </Link>
    )
  }