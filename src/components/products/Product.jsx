import { AddToCartIcon } from '../Icons'

function Product({ product }) {

  const { title, thumbnail, price } = product

  return (
    <div className='product__card'>
      <img className='product__image' src={thumbnail} alt={`Image of product ${title}`} />
      <div>
        <strong className='product__title'>{title} - ${price}</strong>
      </div>
      <div>
        <button className='product__cart-button'>
          <AddToCartIcon />
        </button>
      </div>
    </div>
  )
}

export default Product