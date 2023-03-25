import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import SectionTitle from './sectionTitle'
import ServiceList from './seviceList'
import Box from '../components/box'

function main() {

  const { ref, inView } = useInView({

    rootMargin: '-100px',
    triggerOnce: true,
  })  


  return (
    <>
        <main>
          <div className="row">
            <div className="container">
              <div className='heroImg mx-auto d-flex align-items-center'>
                <div className='mx-auto text-center title'>
                  <h1>Web制作Monkey</h1>
                  <p>ウェブサイト制作／ウェブアプリ開発</p>
                </div>
                <Box />
              </div>
            </div>
          </div>

       
          <section className='section'>
            <div className="row">
              <div className={`container service`} >
                <SectionTitle  text="サービス"/>
                <ServiceList 
                title="ウェブサイト制作"
                text="
                ホームページ、ランディングページ、コーポレートサイトなどの制作を承っております。
                UIの設計にこだわって操作性の高いWEBサイトの制作を心がけております。
                "
                />
                <ServiceList 
                title="ウェブアプリ開発"
                text="
                dummytextdummytextdummytextdummytextdummytextdummytext
                "
                />
              </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default main