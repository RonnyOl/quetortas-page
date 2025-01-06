import React, { Children } from 'react'
import Navbar from "@/components/navBar"
export default function layout({children}) {
  return (
    <>
    <Navbar/>
    <main>{children}</main></>
  )
}
