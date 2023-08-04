"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import {FaGithub} from 'react-icons/fa'
const Header = () => {
  
  return (
    <header className='header'>
        <div className='container'>
            <div className='logo'>
                <Link href='/' ><FaGithub /></Link>  
            </div>
            {/* <div className='logo'>
                <Link href='/' >My Github Repositories</Link>  
            </div> */}
            <div className='links'>
                <Link href='/about'>About</Link>
                <Link href='/about/contact'>Contact</Link>
                <Link href='/code/repos'>Code</Link>
            </div>
        </div>
    </header>
  )
}

export default Header