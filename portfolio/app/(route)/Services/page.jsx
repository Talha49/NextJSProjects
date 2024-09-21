import React from 'react';
import { FaDesktop, FaServer, FaLaptopCode, FaSearch, FaShoppingCart, FaPython, FaTools, FaClipboardCheck } from 'react-icons/fa';
import Testimonial from './Testimonial';

const services = [
  { title: 'Digital Marketing', icon: <FaDesktop />, description: 'We offer comprehensive digital marketing solutions to boost your online presence and drive targeted traffic to your website.' },
  { title: 'Front End Developement', icon: <FaLaptopCode />, description: 'Our front-end development team specializes in creating responsive and user-friendly interfaces using the latest web technologies.' },
  { title: 'Back End Developement', icon: <FaServer />, description: 'Our back-end development services focus on building robust server-side applications and APIs to power your web and mobile apps.' },
  { title: 'JamStack Development', icon: <FaLaptopCode />, description: 'Utilizing the Jamstack architecture, we create fast, secure, and scalable websites and applications that deliver superior performance.' },
  { title: 'SEO Optimization', icon: <FaSearch />, description: "We provide SEO optimization services to improve your website's visibility on search engines, increase organic traffic, and drive conversions." },
  { title: 'Shopify/Wordpress', icon: <FaShoppingCart />, description: 'We specialize in building custom Shopify and WordPress websites tailored to your specific business needs, ensuring a seamless online shopping experience for your customers.' },
  { title: 'Python/ML', icon: <FaPython />, description: 'Our Python development services cover everything from web development and data analysis to machine learning and artificial intelligence, helping you harness the full potential of this versatile programming language.' },
  { title: 'Maintenance', icon: <FaTools />, description: 'We offer ongoing maintenance and support services to keep your website or application running smoothly, ensuring optimal performance and security at all times.' },
  { title: 'Testing', icon: <FaClipboardCheck />, description: 'Our comprehensive testing services include manual and automated testing processes to identify and fix any issues or bugs in your software, ensuring a seamless user experience.' }
];

export default function Services() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-semibold text-center py-10">We provide amazing services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border rounded p-4 shadow-md">
            <div className="flex items-center justify-center mb-4">{service.icon}</div> {/* Display the icon */}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="mb-4">{service.description}</p>

            <div className='flex gap-5'>
            <button class="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span class="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Blogs
</button>
<button class="smky-btn3 relative hover:text-[#778464] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">Projects</button>
            </div>
          </div>
        ))}
      </div>


      <Testimonial/>
    </div>
  );
}
