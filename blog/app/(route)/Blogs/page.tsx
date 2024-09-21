import BlogList from '@/app/_components/Blogs/Blog-List/Blog-List';
import React from 'react'


const GetBLOGALLDATA = async()=> {
    const res = await fetch(`${process.env.Url}/api/blog-post/get-all-post`,{
        method: 'GET',
        cache: 'no-store'
    })

    const data = await res.json();

    if(data.success){
        return data.data
    }
}


const Page = async() => {

 const BlogPostList = await GetBLOGALLDATA();
 console.log(BlogPostList, 'Talha')
   
     
  return (
    <div ><BlogList lists={BlogPostList}/></div>
  )
}

export default Page