import Nav from './components/Nav'
import Hero from './components/Hero'
import Founders from './components/Founders'
import Verticals from './components/Verticals'
import Partners from './components/Partners'
import OurWork from './components/OurWork'
import Gallery from './components/Gallery'
import GetInvolved from './components/GetInvolved'
import CSR from './components/CSR'
import Stories from './components/Stories'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Founders />
        <Verticals />
        <Partners />
        <OurWork />
        <Gallery />
        <GetInvolved />
        <CSR />
        <Stories />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
