"use client"
import Button from '@/Components/Button/button'
import { GlobalContext } from '@/Context'
import React, { useContext } from 'react'
import Blog from '@/utils/type'
import SingleBlog from '@/app/_components/Blogs/Single-Blog/SingleBlog'
import {  toast } from 'react-toastify';

const Search = () => {
  const {searchQuery,setSearchQuery,searchResults,setSearchResults} = useContext(GlobalContext);

  // const handleSearch = async () => {
  //   try {
      
  //     if (!searchQuery.trim()) {
  //       console.log("Search query is empty");
  //       return; 
  //     }
  
     
  //     const res = await fetch(`api/Search?query=${searchQuery}`, {
  //       method: "GET",
  //       cache: "no-store"
  //     });
  
  //     if (!res.ok) {
  //       throw new Error(`Error fetching search data: ${res.status} - ${res.statusText}`);
  //     }
  
      
  //     const data = await res.json();
  
      
  //     console.log(data, 'Search Data');
  
  //     if (data.success) {
  //       setSearchResults(data.data);
  //       setSearchQuery('');
  //     }
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }
  
  async function helperFuncToFetchSearchResults(query: string) {
    if (!searchQuery.trim()) {
            console.log("Search query is empty");
            return; 
          }
    const res = await fetch(`/api/Search?query=${query}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    console.log(data, "searchdata");

    if (data.success) {
      setSearchResults(data.data);
      
    }
  }

  async function handleSearch() {
    helperFuncToFetchSearchResults(searchQuery);
  }


  async function handleDelete(id: number) {
    console.log(id);

    const res = await fetch(`/api/blog-post/delete-post?id=${id}`, {
      method: "DELETE",
      cache: "no-store",
    });

    const data = await res.json();

    if (data && data.success) helperFuncToFetchSearchResults(searchQuery);
    setSearchQuery("");
  }


  
  return (
    <section className="overflow-hidden mt-10 py-16 md:py-20 lg:py-28">
  <div className="container">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[50px] lg:mb-5 lg:px-8 xl:p-[55px]">
          <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            Search any blog post
          </h2>
          <div className="container flex flex-col gap-4 shadow-md py-2 px-2">
            <div className="flex gap-4">
              
              <input
                name="search"
                id="search"
                type="text"
                placeholder="Search Blogs"
                autoFocus
                autoComplete="off"
                className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp shadow-input"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <Button text="Search" onClick={handleSearch} />
            </div>
          </div>
        </div>
      </div>
      <section className="pt-[80px] w-full pb-[120px] flex justify-center items-center">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {searchResults && searchResults.length ? (
              searchResults.map((searchBlogItem: Blog) => (
                <div
                  key={searchBlogItem.id}
                  className="w-full pl-6 px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 hover:shadow-lg"
                >
                  <SingleBlog
                    handleDelete={handleDelete}
                    BlogItem={searchBlogItem}
                  />
                </div>
              ))
            ) : (
              <h1 className="text-center w-full">No search results</h1>
            )}
          </div>
        </div>
      </section>
    </div>
  </div>
</section>


  )
}

export default Search