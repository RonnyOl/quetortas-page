import React from 'react'
import NavBar from '@/components/navBar'
export default function layout({children}) {
  return (
    <>
    
    <main>
        <NavBar/>
        {children}
    </main>
    </>
  )
}
