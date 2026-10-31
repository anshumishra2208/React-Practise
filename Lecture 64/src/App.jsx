import { useState } from 'react'
import { Route, Routes } from "react-router"
import { Link, Outlet, useParams, useNavigate } from "react-router"
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import AboutUs from './Components/AboutUs'
import ProductPage from './Components/ProductPage'
import Dashboard from './Components/Dashboard'
import PageNotFound from './Components/PageNotFound'
import Parent from './Components/Parent'
import FirstChild from './Components/FirstChild'
import SecondChild from './Components/SecondChild'
import ThirdChild from './Components/ThirdChild'





const movies = [
  {
    id: 1,
    title: "saiyara",
    year: 2022
  },

  {
    id: 2,
    title: "singham",
    year: 2015
  },

  {
    id: 3,
    title: "johnWick",
    year: 2010
  }
]


function Home() {
  return (
    <>
      <h1>Home</h1>
      {
        movies.map((m) => {
          return <Link to={`/product-page/${m.id}`}>{m.title}</Link>
        })
      }
    </>
  )
}

function App() {


  return (
    <Routes>
      {/* <Route path='/' element={<Navbar/>}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
      </Route> */}

      {/* <Route path='/' element={<Home />} />
      <Route path='/product-page/:id' element={<ProductPage prop={movies} />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<PageNotFound/>}/> */}

      <Route path='/' element={<Parent/>}>
        <Route path='/first' element={<FirstChild/>}/>
        <Route path='/second' element={<SecondChild/>}/>
        <Route path='/third' element={<ThirdChild/>}/>
      </Route>

    </Routes>
  )


}

export default App
