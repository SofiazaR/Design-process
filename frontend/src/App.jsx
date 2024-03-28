import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Favorite from './pages/Favorite/Favorite'
import Search from './pages/Search/Search'

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Routes>
          < Route path='/' element={<Home/>} />
          < Route path='/favorite' element={<Favorite/>} />
          < Route path='/search' element={<Search/>} />
        </Routes>
    </div>
  )
}

export default App