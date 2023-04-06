import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


import Form from './components/form'
import Footer from './components/footer';
import Header from './components/header';
import Motion from './components/motion';


export default function Contact() {
  
    return (
      <>
        <Header />
        <Motion>
          <Form />
        </Motion>
        <Footer />
      </>
    )
  }
  