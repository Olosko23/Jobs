import React from 'react'
import Navbar from './components/Navbar';
import Search from './components/Search';
import Jobs from './components/Jobs';
import Value from './components/Value';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Jobs />} />
          {/*<Route path='/jobs/:id' element={<Job />} /> */}
        </Routes>
      </BrowserRouter>
      <Value />
      <Footer />
    </div>
  )
}

export default App
