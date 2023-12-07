import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { db, storage } from './components/Firebase'
import { get } from 'react-scroll/modules/mixins/scroller'

function App() {

  const WhatsappRedirect = () => {
    const text = "Hi, I am interested in your courses. I am looking for more information. I got here from your website."
    window.open(`https://wa.me/9819079636?text=${encodeURIComponent(text)}`, "_blank");
  }

  const LinkedinRedirect = () => {
    window.open("https://www.linkedin.com/company/engvb-learning/", "_blank");
  }

  console.log(db);
  console.log(storage);


  return (
    <>
      <BrowserRouter>
        <div id='--black-gradient' className='h-screen w-screen bg-primary overflow-x-hidden'>
          <div className="flex flex-col gap-3 items-start absolute left-0 z-50 top-80">
            <FaFacebook className="text-white text-2xl mr-3 cursor-pointer" />
            <FaInstagram className="text-white text-2xl mr-3 cursor-pointer" />
            <FaLinkedin className="text-white text-2xl mr-3 cursor-pointer" onClick={() => LinkedinRedirect()} />
            <FaWhatsapp className="text-white text-2xl mr-3 cursor-pointer" onClick={() => WhatsappRedirect()} />
          </div>
          <Router />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App