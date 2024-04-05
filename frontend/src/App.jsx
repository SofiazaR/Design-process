import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import Footer from './components/Footer/Footer'
import Chat from './pages/Chat/Chat'
import Understand from './pages/Phases/Understand/Understand'
import Define from './pages/Phases/Define/Define'
import Develop from './pages/Phases/Develop/Develop'
import Test from './pages/Phases/Test/Test'
import Reflect from './pages/Phases/Reflect/Reflect'
import Ideate from './pages/Phases/Ideate/Ideate'
import Observe from './pages/Phases/Observe/Observe'

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/search' element={<Search />} />
          < Route path='/chat' element={<Chat />} />
          < Route path='/understand' element={<Understand />} />
          < Route path='/observe' element={<Observe />} />
          < Route path='/define' element={<Define />} />
          < Route path='/test' element={<Test />} />
          < Route path='/develop' element={<Develop />} />
          < Route path='/reflect' element={<Reflect />} />
          < Route path='/ideate' element={<Ideate />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
