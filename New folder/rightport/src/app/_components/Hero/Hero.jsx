"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";


const Hero = () => {

  const handleDownload = () => {
    const fileName = 'Talha2.pdf';
    const link = document.createElement('a');
    link.href = '/' + fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
      <div className="md:w-1/2 px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          I am <span className="text-[#a53e6d]">Talha</span>{" "}
          <span className="text-[#FF512F]">Ghauri</span>{" "}
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          The <span className="text-[#bb5a86]">JamStack</span>{" "}
          <span className="text-[#eb664b]">Developer</span>{" "}
        </h2>

        <p className="text-md md:text-base mb-4">
        Welcome to GlitchDevs , a passionate JamStack
developer dedicated to crafting seamless digital experiences. With a
blend of creativity, innovation, and expertise <span className="font-medium text-lg"> With a quote by Steve Jobs echoing in my mind -
&apos;Innovation distinguishes between a leader and a follower&apos; - I strive
to be the innovation leader in every project I undertake.</span> Explore my
portfolio and let`s embark on a journey to redefine digital excellence
together.
        </p>
        
          <button  onClick={() => handleDownload()} className="bg-gradient-to-tr from-[#FF512F] to-[#DD2476] text-white px-4 py-2 rounded-lg button-animation">
            Get My Cv
          </button>
       
      </div>

      <div className="md:w-1/2 px-4 py-8 img-animation">
      <Image src="/hero2.jpg" alt="Picture" className="w-full" width={500} height={300} />            </div>
    </div>
  );
};

export default Hero;
