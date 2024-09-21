"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
const Products = () => {

  const pathname = usePathname()
  console.log(pathname)


  return (
    <div>Products</div>
  )
}

export default Products