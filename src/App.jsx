import { useState } from 'react'
import { Products } from './components/products/Products'
import mockProducts from './mocks/products.json'
import { Header } from './components/Header'

function App() {
  const [products] = useState(mockProducts.products)
  const [filter, setFilter] = useState({ name: '', category: 'all', minPrice: 0 })

  const filterProducts = (products) => {
    const { name, category, minPrice } = filter

    const regex = new RegExp(name, "i")

    return products.filter(
      product => {
        return (name === '' || regex.test(product.title)) &&
          (category === 'all' || category === product.category) &&
          product.price >= minPrice;
      }
    )
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header
        setFilter={setFilter}
      />
      <Products
        products={filterProducts(filteredProducts)}
      />
    </>
  )
}

export default App
