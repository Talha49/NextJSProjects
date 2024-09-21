"use client"
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { JetBrains_Mono } from 'next/font/google';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from "next-auth/react";
const JetBrains = JetBrains_Mono({ subsets: ['latin'] });
import axios from "axios"



interface State{
    name: string;
  email: string;
  confirmemail: string;
  password : string;
}

const Page = () => {
  
  const router = useRouter();
  const session = useSession();
  
  const initialState : State = {

    email: '',
    password: '',
    confirmemail:'',
    name: '',
  }

  const [state, setState] = useState<State>(initialState);

  useEffect(() => {

      if(session.status === 'authenticated'){
        router.push("/")
      }
  },[session?.status, router])


  const handleForm =  async (event : ChangeEvent<HTMLInputElement>) => {
      
    setState({...state, [event.target.name] : event.target.value})

  }

  const handsubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (state.email !== state.confirmemail) {
        toast.error("Email & Confirm Email doesn't match")
        throw new Error("Email & Confirm Email doesn't match")
    }

    try {
        await toast.promise(
            (async () => {
                try {
                    await axios.post("/api/register", state);

                    const result = await signIn("credentials", {
                        ...state,
                        redirect: false,
                    });

                    if (!result?.error) {
                        return 'Registration successful!';
                    } else {
                        throw new Error('Registration failed');
                    }
                } catch (error) {
                    throw error;
                }
            })(),
            {
                loading: 'Registering...',
                success: "Registered Successfully",
                error: "Try Again",
            }
        );
        router.push('/');
        router.refresh();
    } catch (error) {
        console.log("Registration Error")
    }
};
   
  
  const SocialAction = async (action : string) => {

    await toast.promise(
      signIn(action, { redirect :false}).then((callback:any) =>{
        if(callback?.error){
          toast.error("Something Went Wrong")
        }
        if(callback?.ok && !callback?.error){
          router.push("/")
        }
      }
        ),
        {
          loading: 'Registering',
          success: 'success',
          error: 'Try again'
        }
    )
  }
  return (
    <div className='min-h-screen bg-gradient-to-r from-[#f1f7f1] to-[#ebf4f8] pt-8'>
    <div className='flex flex-col justify-center items-center pt-8 '>
        <div className='bg-gradient-to-r text-[20px] font-extrabold uppercase leading-[24.2px] tracking-widest md:text-[26px] md:leading-[30px] lg:leading-[36px] bg-clip-text mb-4 text-[#414141] lg:text-[32px]'>
           TK Finance
        </div>
        <div className={`sm:text-[40px] text-[20px] font-bold text-[#414141] ${JetBrains.className}`}>
            <span className='inline-block bg-clip-text text-transparent bg-gradient-to-l  from-[#5A32A3] to-[#D03592]  mx-3'>
                Register
            </span>
            to continue
        </div>

        <div className='w-[90%] mt-4 mb-8 border md:w-[460px] rounded-2xl pt-8 pb-6 px-7.5 border-gray-400 bg-white'>
            <div  className='px-4'>
                <div onClick={() => SocialAction('google')} className='flex items-center py-3 px-3 justify-center mr-2 w-full font-semibold rounded-lg text-lg leading-none gap-x-3 bg-blue-500 text-gray-100 hover:text-white select-none hover:bg-blue-600 cursor-pointer'>Google</div>
            </div>

            <div className='h-[1.5px] bg-gray-100 w-11/12 mx-auto text-center mb-6 text-sm my-8 border-[1px]'>
                <span className='relative -top-2.5 bg-white text-sm select-none text-center px-2.5 text-gray-500'>Or Continue With</span>
            </div>

            <form onSubmit={handsubmit} >
                   
            <div className='px-4'>
                    <div className='text-left w-full text-gray-400 select-none text-xs font-semibold uppercase truncate ml-3.5'>
                      Name 
                    </div>
                    <input className='text-sm pt-2 pb-2 pl-3 border-2 mt-1 pr-3 rounded-lg  text-gray-900 w-full' type="name" id='name'  name='name' value={state.name} onChange={handleForm} placeholder="Name" />
                </div>
                <div className='px-4 mt-3'>
                    <div className='text-left w-full text-gray-400 select-none text-xs font-semibold uppercase truncate ml-3.5'>
                        Email
                    </div>
                    <input className='text-sm pt-2 pb-2 pl-3 border-2 mt-1 pr-3 rounded-lg  text-gray-900 w-full' type="email" id='email'  name='email' value={state.email} onChange={handleForm} placeholder="Email Address" />
                </div>
                <div className='px-4 mt-3'>
                    <div className='text-left w-full text-gray-400 select-none text-xs font-semibold uppercase truncate ml-3.5'>
                     Confirm   Email
                    </div>
                    <input className='text-sm pt-2 pb-2 pl-3 border-2 mt-1 pr-3 rounded-lg  text-gray-900 w-full' type="email" id='confirmemail' value={state.confirmemail} onChange={handleForm} name='confirmemail' placeholder="Confirm Email Address" />
                </div>

                <div className='px-4 mt-3'>
                    <div className='text-left w-full text-gray-400 select-none text-xs font-semibold uppercase truncate ml-3.5'>
                        Password
                    </div>
                    <input className='text-sm pt-2 pb-2 pl-3 border-2 mt-1 pr-3 rounded-lg  text-gray-900 w-full' type="password" id='password'   name='password' value={state.password} onChange={handleForm} placeholder="Enter Password" />
                </div>

                <button type='submit' className='flex justify-center items-center w-full my-5'>
                    <div className='w-fit px-5 py-1 text-[18px] rounded-lg bg-[#29ABE2] hover:bg-[#88d4f5] text-white font-semibold select-none'>
                        Register
                    </div>
                </button>
            </form>

            <div className='flex justify-center space-x-2 items-center my-3'>
                <div className='flex text-md text-gray-600 select-none'>Already a Member?</div>
                <div onClick={() => {router.push('/Login')}} className='inline-flex text-md items-center font-semibold ml-3 text-[#29abe2] cursor-pointer' >Sign In</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Page