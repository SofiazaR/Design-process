import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Favorite from './pages/Favorite/Favorite'
import Search from './pages/Search/Search'
import Footer from './components/Footer/Footer'
import Chat from './pages/Chat/Chat'
import Understand from './pages/Phases/Understand/Understand'

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/favorite' element={<Favorite />} />
          < Route path='/search' element={<Search />} />
          < Route path='/chat' element={<Chat />} />
          < Route path='/understand' element={<Understand />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
