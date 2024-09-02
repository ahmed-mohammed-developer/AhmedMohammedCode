import './App.css'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Latestworks from './component/Latestworks/Latestworks'
import Latestarticles from './component/Latestarticles/Latestarticles'
import Mybooks from './component/Mybooks/Mybooks'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Latestworks />
    <Latestarticles />
    <Mybooks />
    </>
  )
}

export default App