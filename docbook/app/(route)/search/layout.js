import React from 'react'
import CategoryList from './_components/CategoryList'

const layout = ({children}) => {
  return (
    <div className='grid grid-cols-4 px-5 gap-10'>
        
        <div className='hidden md:block'>
     <CategoryList />

        </div>
        <div className='md:col-span-3 col-span-4'>        {children}
</div>
        
        </div>
  )
}

export default layout