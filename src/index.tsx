import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import ListProducts from './components/ListProducts'
import DetailProduct from './components/DetailProduct'
import { CartContext } from './context/context'

ReactDOM.render(
  <React.StrictMode>
    <CartContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/products" element={<ListProducts/>}/> 
            <Route path="/products/:productId" element={<DetailProduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext>
  </React.StrictMode>,
  document.getElementById('root')
)
