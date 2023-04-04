import React, { useState } from 'react'
import Link from 'next/link'
import style from 'styles/components/header.module.scss'

function Header() {


  const [toggleButton, setToggleButton] = useState(false);

  const navMenu = [
    {
      href: "/profile",
      text: "プロフィール"
    },
    {
      href: "/contact",
      text: "お問い合わせ"
    }
  
  ]
  const toggleMenu = [
    {
      href: "/",
      text: "トップ"
    },
    {
      href: "/profile",
      text: "プロフィール"
    },
    {
      href: "/contact",
      text: "お問い合わせ"
    }
  ]

  return (
    <>
      <header className='bg-secondary mt-0 pt-2 pb1 position-relative'>
        <div className='d-flex justify-content-between container mt-0'>
          <Link href={"/"} className="text-decoration-none">
            <div className='fs-2 text-light'>web制作Monkye</div>
          </Link>
          <div>
            <nav className='mt-3 d-none d-sm-block'>
              <ul className='d-flex mb-0'>
                {navMenu.map(item => {
                  return(
                    <li key={item.href}>
                      <Link href={item.href} className={`${style.link} text-decoration-none me-3 text-light`}>{item.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className='d-sm-none'>
              <button 
              className={`${style.menuButton} ${toggleButton && style.toggleButton}`}
              onClick={() => {setToggleButton(!toggleButton);}}
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className={`${style.headerMenu} ${toggleButton && style.toggleButton}`}>
          <nav className='text-center'>
              <ul className='mt-5'>
                {toggleMenu.map(item => {
                  return(
                    <li className=' py-2 fs-3' key={item.href}>
                      <Link href={item.href} className="text-decoration-none text-light">{item.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
      </div>
    </>
  )
}

export default Header