import Link from 'next/link'
import React from 'react'

interface NavbarProps {
  path: string
}

export default function Navbar({path}: NavbarProps) {
  const isRootPath = path === '/' || path === ''
  const isAboutMePath = path === '/about-me'
  const isBlogsPath = path === '/blog' || path.startsWith('/blog')
  return (
    <nav className=''>
      <Link href='/'>
        <div className='flex px-2'>
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 48" width="50" height="48">
          <defs>
              <image  width="50" height="48" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAMAAABkKdmIAAAAAXNSR0IB2cksfwAAAL1QTFRF////Ojo6AAAARUVF6OjoDQ0NERERCwsLNjY2bGxsCgoKKSkpLy8vFRUVGBgYBwcH9/f3+/v7JycnHh4euLi4dXV1Hx8fZmZm9vb2+Pj4dHR0Nzc3hYWFfn5+ExMTAwMDKCgoMDAwQ0NDLCwsGhoa/v7+Xl5e8/PzMjIy9fX119fXnZ2dqKiosLCwEBAQjo6OHR0djIyMiYmJtLS0Dg4Otra2YmJiR0dHJCQkEhISICAgPDw8eXl52traOzs7cpJNsAAAAD90Uk5TAP///wD//////////////wAA///G////AAD//////////////wD/AP8AAP//+f//////4P/T/////////wD/e8K3LgAAAMNJREFUeJztktcSgjAQRUMURaQodrEL9oq9/v9n6WSHSIkZeXQm54nL3hNmNiAkYCBhQhIlJRShCEUo/6akgSSKnHmTVfyY+0FRSSXvR41EnasYpGMWIBXhBIurlEhHLkOq4PBHmShQqtbqCDWaOiQ72GhFlXYHWt1efzCER+wEWu4otouxhmNMpnQ8sxnrmztRw1jQ4XLF3Ph6EzacLR153y5pp+0/giwd6ODIuVfvZJ0N1bzo19vd9V8+njj5PyoI8AKKdQvhBAbu+wAAAABJRU5ErkJggg=="/>
          </defs>
          <style>
          </style>
          <use id="Background" href="#img1" x="0" y="0"/>
        </svg>
       </div>
      </Link>
      <ul
        className='text-sx font-semibold flex flex-row md:flex-col gap-3 mt-2 md:mt-4 px-2 md:p-4 text-slate-500'
      >
        <li>
          <Link href='/'
            className={`${isRootPath ? ' bg-slate-100 text-black' : ''} hover:bg-slate-100 hover:text-black p-2 rounded-md transition-all min-w-max lowercase`}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about-me' 
            className={`${isAboutMePath ? ' bg-slate-100 text-black' : ''} hover:bg-slate-100 hover:text-black p-2 rounded-md transition-all min-w-max lowercase`}
          >
            About me
          </Link>
        </li>
        <li>
          <Link href='/blog'
            className={`${isBlogsPath ? ' bg-slate-100 text-black ' : ''} hover:bg-slate-100 hover:text-black p-2 rounded-md transition-all min-w-max lowercase`}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

