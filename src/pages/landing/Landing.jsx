import React from 'react'
import Background from '../../components/Background/background'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

function Landing() {
  return (
    <section className="landing">
      <Background />
      <Navbar />
      <main>
      <h1>Join Tech Events Today</h1>
      </main>
{/* <Footer /> */}

    </section>
  )
}

export default Landing