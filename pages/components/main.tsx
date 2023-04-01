import React from 'react'
import Link from 'next/link'
import style from 'styles/components/main.module.scss'

import SectionTitle from './sectionTitle'
import ServiceList from './seviceList'
import Box from '../components/box'

function Main() {

  return (
    <>
        <main>
          <div className={`row`}>
            <div className="container">
              <div className={`${style.heroImg} mx-auto d-flex align-items-center`}>
                <div className={`${style.title} mx-auto text-center title`}>
                  <h1>Web制作Monkey</h1>
                  <p>ウェブサイト制作／ウェブアプリ開発</p>
                </div>
                <Box />
              </div>
            </div>
          </div>

       
          <section className={`${style.section} mt-5`}>
            <div className={`row`}>
              <div className={`container service`} >
                <SectionTitle  text="サービス"/>
                <ServiceList 
                title="ウェブサイト制作"
                text="
                ホームページ、ランディングページ、コーポレートサイトなどの制作を承っております。
                UIの設計にこだわって操作性の高いWEBサイトの制作を心がけております。
                "
                img="homepage.jpg"
                />
                <ServiceList 
                title="ウェブアプリ開発"
                text="
                Webブラウザを使用したアプリケーションの開発のご依頼を承っております。
                また私自身のサービスとしてウェブアプリの開発もしておりますのでご活用ください。
                "
                img="application.jpg"
                />
              </div>
            </div>
          </section>
          <section className={style.section}>
            <div className={`row`}>
              <div className={`container text-center`} >
                <SectionTitle text="お問い合わせ"/>
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
                
              </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default Main