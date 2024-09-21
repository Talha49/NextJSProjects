'use client'

import { SetStateAction, createContext ,Dispatch, ReactNode, useState} from "react"
import { useSession } from "next-auth/react"
import Spinner from "@/Components/Spinner/Spinner";
import { BlogFormData } from "@/utils/type";
import { initialBlogFormData } from "@/utils";
import Blog from '@/utils/type'
type ContextType ={
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    formData: BlogFormData;
    setFormData:Dispatch<SetStateAction<BlogFormData>>;
    searchQuery: string;
    setSearchQuery:Dispatch<SetStateAction<string>>;
    searchResults: Blog[],
    setSearchResults:Dispatch<SetStateAction<Blog>>
} 



const initialState = {
 loading: false,
 setLoading: () => {},
 formData: initialBlogFormData,
 setFormData: () => {},
 searchQuery: '',
    setSearchQuery: () => {},
    searchResults: [],
    setSearchResults:() => {}
}



export const GlobalContext = createContext <ContextType>(initialState)

export default function GlobalState({children}: {children: ReactNode}){
    const [loading, setLoading] = useState(false);
    const [formData,setFormData] = useState(initialBlogFormData);
    const [searchQuery,setSearchQuery] = useState('');
    const [searchResults,setSearchResults] = useState<Blog[]>([])
    const {data:session} = useSession();

    if(session === undefined) return <Spinner/>
    
    return(
  
   <GlobalContext.Provider value={{loading,setLoading,formData,setFormData,searchQuery,setSearchQuery,searchResults,setSearchResults}}>

    {children}
   </GlobalContext.Provider>
    );
}