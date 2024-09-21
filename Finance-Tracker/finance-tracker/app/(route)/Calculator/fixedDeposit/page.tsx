// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import { Inter } from 'next/font/google';
// import { GrSettingsOption } from 'react-icons/gr';
// import { JetBrains_Mono } from 'next/font/google';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import FDChart from '@/components/Charts/ChartsFD/FDPieChart';
// import TextInput from '@/components/Tools/TextInput';
// import FDScatter from '@/components/Charts/ChartsFD/FDScatter';
// import FDLine from '@/components/Charts/ChartsFD/FDLine';
// import FDBubble from '@/components/Charts/ChartsFD/FDBubble';

// const InterScript = Inter({ subsets: ['latin'] });
// const JetBrains = JetBrains_Mono({ subsets: ['latin'] });

// const Page = () => {
//   const [investment, setInvestment] = useState<string>('14000');
//   const [rateOfInterest, setRateOfInterest] = useState<string>('6.7');
//   const [timePeriod, setTimePeriod] = useState<string>('4');
//   const [clearedInvestment, setClearedInvestment] = useState<boolean>(false);
//   const [clearedRateOfInterest, setClearedRateOfInterest] = useState<boolean>(false);
//   const [clearedTimePeriod, setClearedTimePeriod] = useState<boolean>(false);
//   const [active, setActive] = useState<string>("Scatter")
//   const [showSettings, setShowSettings] = useState(false);
//   const [timeUnit, setTimeUnit] = useState('years');
//   const settingsPanelRef = useRef(null);

//    const toggleSettingsPanel = () => {
//     setShowSettings(!showSettings)
//    }

//   const calculateReturns = () => {

//   }

//   const principal = parseFloat(investment)
//   const interestRate = parseFloat(rateOfInterest);

//   let years = parseFloat(rateOfInterest)/100;

//   if(timeUnit ==='months'){
//    years = years/12
//   }
//   else if(timeUnit === 'days'){
//    years = years/365
//   }

//   const returns = principal+ principal * interestRate * years;
//   const TotalValue = principal + returns

//    const handleInvestmentChange =(value : string) => {

//       if(!isNaN(parseFloat(value)) && parseFloat(value) >0){

//        setInvestment(value);
//        if(value! == '0'){
//         setClearedInvestment(false)

//       }

//    }else if(value === ''){
// setInvestment('0');
// setClearedInvestment(true);
//    }

// }
// const handleRateOfInterestChange = (value: string) => {
//     if (!isNaN(parseFloat(value)) && parseFloat(value) >= 1) {
//         setRateOfInterest(value);
//         if (value !== '0') {
//             setClearedRateOfInterest(false);
//         }
//     } else if (value === '') {
//         setRateOfInterest('0');
//         setClearedRateOfInterest(true);
//     }
// };

// const handleTimePeriodChange = (value: string) => {
//     if (!isNaN(parseInt(value)) && parseInt(value) >= 0) {
//         setTimePeriod(value);
//         if (value !== '0') {
//             setClearedTimePeriod(false);
//         }
//     } else if (value === '') {
//         setTimePeriod('0');
//         setClearedTimePeriod(true);
//     }
// };
//   return (
//     <div className='py-10'>

//   <div  className={`lg:mx-16 mx-4 my-8 ${InterScript.className}`}>
//   <h2 className='flex justify-between sm:flex-row sm:items-center flex-col'>
//                 <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#5A32A3] to-[#D03592] relative sm:text-[40px] text-[30px] font-bold'>Fixed Deposit Calculator</div>
//                 <div className='bg-gray-200 px-3 py-1 rounded-xl h-fit font-normal mt-1 w-fit select-none cursor-pointer hover:bg-gray-400 transition duration-500'>All Calculators</div>
//             </h2>
//             <div className='font-normal relative bottom-2 italic select-none sm:flex hidden'>
//                 (Scroll to get more information about Fixed Deposit)
//             </div>
//             <div className='flex  mt-6 lg:flex-row gap-5 flex-col'>
//                 <div className='h-[380px] border-[10px] lg:w-[600px] rounded-2xl w-full'>
//                     <div className='p-3 flex justify-between items-center'>
//                         <div
//                             className='bg-gray-200 rounded-lg px-3 py-1 text-[12px] text-black flex items-center space-x-1 select-none cursor-pointer hover-bg-gray-300'
//                             onClick={toggleSettingsPanel}
//                         >
//                             <div>
//                                 <GrSettingsOption />
//                             </div>
//                             <div>Settings</div>
//                         </div>

//                         <div className='flex space-x-2'>
//                             <div className='w-[12px] h-[12px] bg-red-400 rounded-full hover:bg-red-600 cursor-pointer'></div>
//                             <div className='w-[12px] h-[12px] bg-yellow-300 rounded-full hover:bg-yellow-600 cursor-pointer'></div>
//                             <div className='w-[12px] h-[12px] bg-green-500 rounded-full hover:bg-green-600 cursor-pointer'></div>
//                         </div>

//                     </div>

//                     <div className='px-4 py-2 mb-4'>
//                       <TextInput  id='investment' label='Investment amount (Rs)' value={clearedInvestment ? " ": investment} onChange={handleInvestmentChange} />
//                       <TextInput
//                             id='rateOfInterest'
//                             label='Rate of Interest (p.a.)'
//                             value={clearedRateOfInterest ? '' : rateOfInterest}
//                             onChange={handleRateOfInterestChange}
//                         />

//                         <TextInput
//                             id='timePeriod'
//                             label={`Time Period (in ${timeUnit}(s))`}
//                             value={clearedTimePeriod ? '' : timePeriod}
//                             onChange={handleTimePeriodChange}
//                         />
//                     </div>

//                 </div>
//                 <div className='lg:flex-1 mt-6 lg:mt-0 border-[10px] rounded-lg mb-8 h-fit px-2 sm:px-8 py-4 select-none'>
//         <div className='flex space-x-3 items-center justify-center mt-2 mb-4 text-[14px]'>
//             <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Scatter" && "bg-gray-200"}`} onClick={() => { setActive("Scatter") }}>Scatter</div>
//             <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Line" && "bg-gray-200"}`} onClick={() => { setActive("Line") }}>Line</div>
//             <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Bubble" && "bg-gray-200"}`} onClick={() => { setActive("Bubble") }}>Bubble</div>
//         </div>

//         <div className='w-full h-full'>
//             {active === "Scatter"
//                 &&
//                 <div>
//                     <FDScatter investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
//                 </div>
//             }

//             {active === "Line"
//                 &&
//                 <div>
//                     <FDLine investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
//                 </div>
//             }

//             {active === "Bubble"
//                 &&
//                 <div>
//                     <FDBubble investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
//                 </div>
//             }
//         </div>
//     </div>
//                 {calculateReturns()}

//             </div>

//        {/* <div className='flex flex-col lg:flex-row md:gap-5 mt-6'>
//     <div className='lg:flex-1 border-[10px] rounded-2xl'>
//         <div className='p-3 flex justify-between items-center'>
//             <div
//                 className='bg-gray-200 rounded-lg px-3 py-1 text-[12px] text-black flex items-center space-x-1 select-none cursor-pointer hover-bg-gray-300'
//                 onClick={toggleSettingsPanel}
//             >
//                 <div>
//                     <GrSettingsOption />
//                 </div>
//                 <div>Settings</div>
//             </div>

//             <div className='flex space-x-2'>
//                 <div className='w-[12px] h-[12px] bg-red-400 rounded-full hover:bg-red-600 cursor-pointer'></div>
//                 <div className='w-[12px] h-[12px] bg-yellow-300 rounded-full hover:bg-yellow-600 cursor-pointer'></div>
//                 <div className='w-[12px] h-[12px] bg-green-500 rounded-full hover:bg-green-600 cursor-pointer'></div>
//             </div>
//         </div>

//         <div className='px-4 py-2 mb-4'>
//             <TextInput  id='investment' label='Investment amount (Rs)' value={clearedInvestment ? " ": investment} onChange={handleInvestmentChange} />
//             <TextInput
//                 id='rateOfInterest'
//                 label='Rate of Interest (p.a.)'
//                 value={clearedRateOfInterest ? '' : rateOfInterest}
//                 onChange={handleRateOfInterestChange}
//             />

//             <TextInput
//                 id='timePeriod'
//                 label={`Time Period (in ${timeUnit}(s))`}
//                 value={clearedTimePeriod ? '' : timePeriod}
//                 onChange={handleTimePeriodChange}
//             />
//         </div>

//     </div>

//     <div className='lg:flex-1 mt-6 lg:mt-0 border-[10px] rounded-lg mb-8 h-fit px-2 sm:px-8 py-4 select-none'>
//         <div className='flex space-x-3 items-center justify-center mt-2 mb-4 text-[14px]'>
//             <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Scatter" && "bg-gray-200"}`} onClick={() => { setActive("Scatter") }}>Scatter</div>
//             <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Line" && "bg-gray-200"}`} onClick={() => { setActive("Line") }}>Line</div>
//             <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Bubble" && "bg-gray-200"}`} onClick={() => { setActive("Bubble") }}>Bubble</div>
//         </div>

//         <div className='w-full h-full'>
//             {active === "Scatter"
//                 &&
//                 <div>
//                     <FDScatter investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
//                 </div>
//             }

//             {active === "Line"
//                 &&
//                 <div>
//                     <FDLine investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
//                 </div>
//             }

//             {active === "Bubble"
//                 &&
//                 <div>
//                     <FDBubble investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
//                 </div>
//             }
//         </div>
//     </div>

//     {calculateretruns()}
// </div> */}

//   </div>
//   <div className={`mt-6 border-[10px] rounded-lg mb-8 h-fit px-8 py-4 select-none ${JetBrains.className}`}>
//                 <div className='font-bold text-[20px] mb-2'>Information about Fixed Deposit</div>
//                 <div>
//                     A Fixed Deposit (FD) is a low-risk investment offered by banks and financial institutions. It comprises depositing a quantity of money at a predetermined interest rate for a defined length of time. FDs provide safety, fixed returns, and government-backed insurance up to a specified amount. They are, however, less liquid, with early withdrawal penalties. Interest is usually taxed, and a minimum deposit is required.
//                 </div>
//                 <div className='my-4 font-bold'>M = P + ((P x r x t)/100)</div>
//                 <div>
//                     The formula M represents the total amount you'll have in the end, where:
//                     P is the initial deposit amount.
//                     r is the annual interest rate.
//                     t is the number of years the money is deposited or invested.
//                 </div>
//             </div>

//             <div className='md:h-[380px] h-fit border-[10px] lg:ml-8 mt-8 lg:mt-0 rounded-lg p-4 w-full flex justify-between items-center flex-col md:flex-row'>
//     <div className='flex flex-col justify-between h-full md:w-1/2 w-full p-4 md:mr-16'>
//         <div className='w-full'>
//             <h4 className={`font-bold text-3xl ${InterScript.className}`}>Summary</h4>
//             <div className='flex flex-col mt-4 text-[17px] font-normal'>
//                 <div className='flex space-x-4 justify-between'>
//                     <div>Investment Amount</div>
//                     <div>Rs{investment}</div>
//                 </div>
//                 <div className='flex space-x-4 justify-between '>
//                     <div>Rate of Interest</div>
//                     <div>{rateOfInterest}%</div>
//                 </div>
//                 <div className='flex space-x-4 justify-between '>
//                     <div>Time Period</div>
//                     <div>{timePeriod} {timeUnit}(s)</div>
//                 </div>
//             </div>
//         </div>
//         {/***Returns */}
//         <div className='mt-4 mb-4 text-[17px] font-semibold w-full'>
//             <div className='flex space-x-4 justify-between '>
//                 <div>Returns</div>
//                 <div>Rs{returns.toFixed(2)}</div>
//             </div>
//             <div className='flex space-x-4 justify-between '>
//                 <div>Total Value</div>
//                 <div>Rs{TotalValue.toFixed(2)}</div>
//             </div>

//             <div className={`font-normal ${JetBrains.className} hover:bg-blue-300 bg-blue-100 w-full rounded-lg mt-3 flex justify-center items-center select-none h-[35px]`} >Save this result</div>
//         </div>
//     </div>

//     <div className='h-full w-[2px] border-2'></div>

//     <div className='pr-4 flex items-center justify-center w-1/2'>
//        <FDChart investment={investment} rateOfinterest={rateOfInterest} timePeriod ={timePeriod} />
//     </div>
// </div>

//     </div>

//   )

// };

// export default Page

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import { GrSettingsOption } from "react-icons/gr";
import { JetBrains_Mono } from "next/font/google";
import axios from "axios";
import toast from "react-hot-toast";
import FDChart from "@/components/Charts/ChartsFD/FDPieChart";
import TextInput from "@/components/Tools/TextInput";
import FDScatter from "@/components/Charts/ChartsFD/FDScatter";
import FDLine from "@/components/Charts/ChartsFD/FDLine";
import FDBubble from "@/components/Charts/ChartsFD/FDBubble";

const InterScript = Inter({ subsets: ["latin"] });
const JetBrains = JetBrains_Mono({ subsets: ["latin"] });

const Page = () => {
  const [investment, setInvestment] = useState<string>("14000");
  const [rateOfInterest, setRateOfInterest] = useState<string>("6.7");
  const [timePeriod, setTimePeriod] = useState<string>("4");
  const [clearedInvestment, setClearedInvestment] = useState<boolean>(false);
  const [clearedRateOfInterest, setClearedRateOfInterest] =
    useState<boolean>(false);
  const [clearedTimePeriod, setClearedTimePeriod] = useState<boolean>(false);
  const [active, setActive] = useState<string>("Scatter");
  const [showSettings, setShowSettings] = useState(false);
  const [timeUnit, setTimeUnit] = useState("years");
  const settingsPanelRef = useRef(null);

  

  const toggleSettingsPanel = () => {
    setShowSettings(!showSettings);
  };

 

  const calculateReturns = () => {
    const principle = parseFloat(investment);
    const interestRate = parseFloat(rateOfInterest) / 100;
    let years = parseFloat(timePeriod);

    if (timeUnit === "months") {
      years = years / 12;
    } else if (timeUnit === "days") {
      years = years / 365;
    }

    const returns = principle + principle * interestRate * years;
    const totalValue = principle + returns;

    const SaveData = async () => {
      await axios.post("/api/transaction", {
        investmentType: "fixed-deposit",
        investment,
        rateOfInterest,
        timePeriod,
        timeUnit,
        returns,
        totalValue,
      });
    };

    const SaveTransactionData = async () => {
      await toast.promise(SaveData(), {
        loading: "Saving",
        success: "Success",
        error: "Try again",
      });
    };

    return (
      <div className="md:h-[380px] h-fit border-[10px] lg:ml-8 mt-8 lg:mt-0 rounded-lg p-4 w-full flex justify-between items-center flex-col md:flex-row">
        <div className="flex flex-col justify-between h-full md:w-1/2 w-full p-4 md:mr-16">
          <div className="w-full">
            <h4 className={`font-bold text-3xl ${InterScript.className}`}>
              Summary
            </h4>
            <div className="flex flex-col mt-4 text-[17px] font-normal">
              <div className="flex space-x-4 justify-between">
                <div>Investment Amount</div>
                <div>₹{investment}</div>
              </div>
              <div className="flex space-x-4 justify-between ">
                <div>Rate of Interest</div>
                <div>{rateOfInterest}%</div>
              </div>
              <div className="flex space-x-4 justify-between ">
                <div>Time Period</div>
                <div>
                  {timePeriod} {timeUnit}(s)
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 mb-4 text-[17px] font-semibold w-full">
            <div className="flex space-x-4 justify-between ">
              <div>Returns</div>
              <div>₹{returns.toFixed(2)}</div>
            </div>
            <div className="flex space-x-4 justify-between ">
              <div>Total Value</div>
              <div>₹{totalValue.toFixed(2)}</div>
            </div>
            <div
              className={`font-normal ${JetBrains.className} hover:bg-blue-300 bg-blue-100 w-full rounded-lg mt-3 flex justify-center items-center select-none h-[35px]`}
              onClick={SaveTransactionData}
            >
              Save this result
            </div>
          </div>
        </div>
        <div className="h-full w-[2px] border-2"></div>
        <div className="pr-4 flex items-center justify-center w-1/2">
          <FDChart
            investment={investment}
            rateOfinterest={rateOfInterest}
            timePeriod={timePeriod}
          />
        </div>
      </div>
    );
  };

  const handleInvestmentChange = (value: string) => {
    if (!isNaN(parseFloat(value)) && parseFloat(value) >= 0) {
      setInvestment(value);
      if (value !== "0") {
        setClearedInvestment(false);
      }
    } else if (value === "") {
      setInvestment("0");
      setClearedInvestment(true);
    }
  };

  const handleRateOfInterestChange = (value: string) => {
    if (!isNaN(parseFloat(value)) && parseFloat(value) >= 1) {
      setRateOfInterest(value);
      if (value !== "0") {
        setClearedRateOfInterest(false);
      }
    } else if (value === "") {
      setRateOfInterest("0");
      setClearedRateOfInterest(true);
    }
  };

  const handleTimePeriodChange = (value: string) => {
    if (!isNaN(parseInt(value)) && parseInt(value) >= 0) {
      setTimePeriod(value);
      if (value !== "0") {
        setClearedTimePeriod(false);
      }
    } else if (value === "") {
      setTimePeriod("0");
      setClearedTimePeriod(true);
    }
  };

  return (
    <div className="py-10">
      <div className={`lg:mx-16 mx-4 my-8 ${InterScript.className}`}>
        <h2 className="flex justify-between sm:flex-row sm:items-center flex-col">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#5A32A3] to-[#D03592] relative sm:text-[40px] text-[33px] font-bold">
            Fixed Deposit Calculator
          </div>
          <div className="text-gray-500 text-[12px]">
            Calculate your fixed deposit returns and total value!
          </div>
        </h2>
      </div>
      <div className={`lg:flex mx-4 ${InterScript.className}`}>
        <div className="flex justify-center lg:w-1/3 w-full px-4">
          <div className="border-[10px] rounded-lg shadow-lg border-blue-300 p-4 flex flex-col">
            <h4 className="font-bold text-2xl">Enter details</h4>
            <div className="px-4 py-2 mb-4">
              {" "}
              <TextInput
                id="investment"
                label="Investment amount (Rs)"
                value={clearedInvestment ? " " : investment}
                onChange={handleInvestmentChange}
              />
              <TextInput
                id="rateOfInterest"
                label="Rate of Interest (p.a.)"
                value={clearedRateOfInterest ? "" : rateOfInterest}
                onChange={handleRateOfInterestChange}
              />
              <TextInput
                id="timePeriod"
                label={`Time Period (in ${timeUnit}(s))`}
                value={clearedTimePeriod ? "" : timePeriod}
                onChange={handleTimePeriodChange}
              />{" "}
            </div>
            {/* <div className="w-full mt-6">
              <div className="font-bold text-xl">Time Unit</div>
              <div className="flex mt-2 space-x-4">
                <div
                  className={`px-4 py-2 rounded-lg cursor-pointer ${
                    timeUnit === "years"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleTimeUnitChange("years")}
                >
                  Years
                </div>
                <div
                  className={`px-4 py-2 rounded-lg cursor-pointer ${
                    timeUnit === "months"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleTimeUnitChange("months")}
                >
                  Months
                </div>
                <div
                  className={`px-4 py-2 rounded-lg cursor-pointer ${
                    timeUnit === "days"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => handleTimeUnitChange("days")}
                >
                  Days
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="lg:w-2/3 w-full lg:pl-8 flex justify-center">
          {calculateReturns()}
        </div>

         
      </div>
      <div className='mt-6 border-[10px] rounded-lg mb-8 h-fit px-2 sm:px-8 py-4 select-none'>
                <div className='flex space-x-3 items-center justify-center mt-2 mb-4 text-[14px]'>
                    <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Scatter" && "bg-gray-200"}`} onClick={() => { setActive("Scatter") }}>Scatter</div>
                    <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Line" && "bg-gray-200"}`} onClick={() => { setActive("Line") }}>Line</div>
                    <div className={`rounded-lg px-2 py-1 border-2 cursor-pointer transition duration-300 ${active === "Bubble" && "bg-gray-200"}`} onClick={() => { setActive("Bubble") }}>Bubble</div>
                </div>

                <div className='w-full h-full'>
                    {active === "Scatter"
                        &&
                        <div>
                            <FDScatter investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
                        </div>
                    }

                    {active === "Line"
                        &&
                        <div>
                            <FDLine investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
                        </div>
                    }

                    {active === "Bubble"
                        &&
                        <div>
                            <FDBubble investment={investment} rateOfInterest={rateOfInterest} timePeriod={timePeriod} />
                        </div>
                    }
                </div>
            </div>
            <div className={`mt-6 border-[10px] rounded-lg mb-8 h-fit px-8 py-4 select-none ${JetBrains.className}`}>
                <div className='font-bold text-[20px] mb-2'>Information about Fixed Deposit</div>
                <div>
                    A Fixed Deposit (FD) is a low-risk investment offered by banks and financial institutions. It comprises depositing a quantity of money at a predetermined interest rate for a defined length of time. FDs provide safety, fixed returns, and government-backed insurance up to a specified amount. They are, however, less liquid, with early withdrawal penalties. Interest is usually taxed, and a minimum deposit is required.
                </div>
                <div className='my-4 font-bold'>M = P + ((P x r x t)/100)</div>
                <div>
                    The formula M represents the total amount you'll have in the end, where:
                    P is the initial deposit amount.
                    r is the annual interest rate.
                    t is the number of years the money is deposited or invested.
                </div>
            </div>
        

    </div>
  );
};

export default Page;
