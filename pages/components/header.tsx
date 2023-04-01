import React, { useState } from 'react'
import Link from 'next/link'
import style from 'styles/components/header.module.scss'

function Header() {


  const [toggleButton, setToggleButton] = useState(false);

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
                <li>
                  <Link href={"/profile"} className={`${style.link} text-decoration-none me-3 text-light`}>
                    プロフィール
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"} className={`${style.link} text-decoration-none me-3 text-light`}>
                    問い合わせ
                  </Link>
                </li>
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
                <Link href={"/"} className="text-decoration-none">
                  <li className='text-light py-2 fs-3'>トップ</li>
                </Link>
                <Link href={"/profile"} className="text-decoration-none">
                  <li className='text-light py-2 fs-3'>プロフィール</li>
                </Link>
                <Link href={"/contact"} className="text-decoration-none">
                  <li className='text-light py-2 fs-3 '>問い合わせ</li>
                </Link>
              </ul>
            </nav>
      </div>
    </>
  )
}

export default Header