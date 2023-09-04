import Product from './Product'

import './Products.css'

export function Products({ products }) {
  return (
    <main className='products'>
      <ul className='products__grid'>
        {
          products.length > 0
            ? (
              products.slice(0, 30).map(product => (
                <li key={product.id}>
                  <Product product={product} />
                </li>
              ))
            )
            : <h2>No hay productos disponibles</h2>
        }
      </ul>
    </main>
  )
}