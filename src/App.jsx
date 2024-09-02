import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Latestworks from './component/Latestworks/Latestworks'
import Latestarticles from './component/Latestarticles/Latestarticles'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Latestworks />
    <Latestarticles />
    </>
  )
}

export default App