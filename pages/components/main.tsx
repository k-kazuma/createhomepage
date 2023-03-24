import React from 'react'
import Box from '../components/box'

function main() {
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
              <div className="container">
                <h3 className='text-center py-5'>サービス</h3>
                <div className='text-center'>
                  <h6>ウェブサイト制作</h6>
                  <div className="d-md-flex pt-3 justify-content-center">
                    <div className="serviceImg mx-auto mx-md-0"></div>
                    <p className='col-md-4 pt-3 ms-md-5'>
                      ホームページ、ランディングページ、コーポレートサイトなどの制作を承っております。
                      UIの設計にこだわって操作性の高いWEBサイトの制作を心がけております。
                    </p>
                  </div>
                </div>
                <div className='text-center mt-5'>
                  <h6>ウェブアプリ開発</h6>
                  <div className="d-md-flex pt-3 justify-content-center">
                    <div className="serviceImg mx-auto mx-md-0"></div>
                    <p className='col-md-4 pt-3 ms-md-5'>dummytextdummytextdummytextdummytextdummytextdummytext</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default main