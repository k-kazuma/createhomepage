import React from 'react'
import Link from 'next/link'

function header() {
  return (
    <header>
      <div className='d-flex justify-content-between container mt-1'>
        <Link href={"/"} className="text-decoration-none">
          <div className='fs-2 text-dark'>web制作Monkye</div>
        </Link>
        <div>
          <nav className='mt-3'>
            <ul className='d-flex mb-0'>
              <Link href={"/service"} className="text-decoration-none">
                <li className='me-3 text-dark'>サービス</li>
              </Link>
              <Link href={"/profile"} className="text-decoration-none">
                <li className='me-3 text-dark'>プロフィール</li>
              </Link>
              <Link href={"/form"} className="text-decoration-none">
                <li className='text-dark'>問い合わせ</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      </header>
  )
}

export default header