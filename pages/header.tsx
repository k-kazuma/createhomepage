import React from 'react'
import Link from 'next/link'

function header() {
  return (
    <header className='bg-secondary mt-0'>
      <div className='d-flex justify-content-between container mt-0'>
        <Link href={"/"} className="text-decoration-none">
          <div className='fs-2 text-light'>web制作Monkye</div>
        </Link>
        <div>
          <nav className='mt-3'>
            <ul className='d-flex mb-0'>
              <Link href={"/service"} className="text-decoration-none">
                <li className='me-3 text-light'>サービス</li>
              </Link>
              <Link href={"/profile"} className="text-decoration-none">
                <li className='me-3 text-light'>プロフィール</li>
              </Link>
              <Link href={"/form"} className="text-decoration-none">
                <li className='text-light'>問い合わせ</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
      </header>
  )
}

export default header