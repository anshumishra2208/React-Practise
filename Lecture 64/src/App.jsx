import { useState } from 'react'
import { Route, Routes } from "react-router"
import { Link, Outlet, useParams } from "react-router"


const products = [
  {
    id: 1,
    title: "iphone",
    price: 430482
  },

  {
    id: 2,
    title: "laptop",
    price: 24893
  }
]


function Navbar() {
  return (
    <div>
      <ul>
        <Link to={"/home"}>Home</Link>
        <br />
        <Link to={"/product-page/id"}>Product Page</Link>
        <br />
        <Link to={"/about-us"}>About us</Link>
      </ul>
      <Outlet />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>

        {
          products.map((p) => {
            return <section>
              <Link to={`/product-page/${p.id}`}>{p.title}</Link>
            </section>
          })
        }

      </div>
    </div>
  )
}

function ProductPage() {

  const { id } = useParams();
  const data = products.find((p) => p.id === Number(id))

  return (
    <div>
      <h1>ProductPage</h1>
      {
        data ? <p>{data.title}</p> : "product not found"
      }
    </div>
  )
}

function AboutUs() {
  return (
    <div>
      <h1>AboutUs</h1>
    </div>
  )
}

function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  )
}

function PageNotFound() {
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNXOXtFpzKJR_vniyQadb2zFmUbbRhZZDqqpd0_eraQ&s=10" alt="" />
      <h2>Page not found</h2>
    </div>
  )
}




function App() {


  return (
    <Routes>

      <Route path='/' element={<Navbar />}>
        <Route path='/home' element={<Home />} />
        <Route path='/product-page/:id' element={<ProductPage />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Route>

      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='*' element={<PageNotFound />} />

    </Routes>
  )


}

export default App
