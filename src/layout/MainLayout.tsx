
import Navbar from '@/components/navbar'
import React, { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
  path: string
}

export default function MainLayout({ children, path } : MainLayoutProps) {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center h-auto py-4 md:py-20'>
        <Navbar path={path}/>
        <div className='p-2 container max-w-3xl'>
          {children}
        </div>
    </div>
  )
}
