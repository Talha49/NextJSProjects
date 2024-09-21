import Image from "next/image";
import Header from "./_components/Header/Header";
import Hero from "./_components/Hero/Hero";
import Main from "./_components/Main/Main";
import Items from "./_components/Items/Items";
import CTA from "./_components/CTA/CTA";


export default function Home() {
  return (
    <main >
     
     <div className="pt-[60px]">
     <Hero/>
      </div>
      
     <Main/>
     <Items/>
     <CTA/>
    </main>
  );
}
