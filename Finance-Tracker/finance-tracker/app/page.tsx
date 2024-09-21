import HomePage from "@/components/LangingPage/HomePage";
import InvestorPage from "@/components/LandingPageTools/InvestorPage";
import Image from "next/image";
import SharePage from "@/components/LangingPage/SharePage";
import StartCalculating from "@/components/LangingPage/StartCalculating";


export default function Home() {
  return (
    <main className="flex flex-col"> 
      <HomePage />
      <InvestorPage />
      <SharePage />
      <StartCalculating />
    
    </main>
  );
}
