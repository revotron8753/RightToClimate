import Nav from './components/Nav'
import Hero from './components/Hero'
import ImpactTicker from './components/ImpactTicker'
import TrustStrip from './components/TrustStrip'
import Pillars from './components/Pillars'
import MissionBand from './components/MissionBand'
import Causes from './components/Causes'
import HowWeWork from './components/HowWeWork'
import CSR from './components/CSR'
import Gallery from './components/Gallery'
import Stories from './components/Stories'
import GetInvolved from './components/GetInvolved'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ImpactTicker />
        <TrustStrip />
        <Pillars />
        <MissionBand />
        <Causes />
        <HowWeWork />
        <CSR />
        <Gallery />
        <Stories />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
