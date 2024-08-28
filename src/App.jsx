import React from 'react'
import Header from './Components/Header'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Product from './Components/Product'


const App = () => {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact/:id' element={<Product/>} />
      <Route path='*' element={
        <div>Page not found 404</div>
      } />
    </Routes>
   </Router>
  )
}

export default App