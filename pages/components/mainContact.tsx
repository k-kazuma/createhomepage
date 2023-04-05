import React from 'react'
import Link from 'next/link'


function MainContact() {
  return (
    <div className={`mt-5`}>
        <p>制作のご依頼ご相談はメールもしくは問い合わせフォームからお問い合わせください</p>
        <div className={`py-5`}>
        <h3>
            <a href='mailto:address'>webseisakumonkey@gmail.com</a>
        </h3>
        <button className={`d-block mx-auto mt-5 btn btn-danger`}>
            <Link href={"/contact"} className={`text-light text-decoration-none`}>問い合わせフォームはこちら</Link>
        </button>
        </div>
    </div>
  )
}

export default MainContact