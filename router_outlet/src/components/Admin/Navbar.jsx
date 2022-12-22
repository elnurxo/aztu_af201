import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
    <div>ADMIN Navbar</div>
    <Link to="/">Site</Link>
    <Link to="/admin">Dashboard</Link>
    <Link to="/admin/products">Products</Link>
    <Link to="/admin/suppliers">Suppliers</Link>
   </>
  )
}

export default Navbar