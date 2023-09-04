import { useState } from 'react'
import './Filters.css'

export function Filters({ setFilter }) {
  const [minPrice, setMinPrice] = useState(0)
  const [category, setCategory] = useState('all')
  const [name, setName] = useState('')

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)

    setFilter(
      (previousState) => (
        {
          ...previousState,
          minPrice: event.target.value
        }
      )
    )
  }

  const handleClean = () => {
    setFilter(
      {
        productName: '',
        minPrice: 0,
        category: 'all'
      }
    )

    setMinPrice(0)
  }

  const handleChangeCategory = (event) => {
    setCategory(event.target.value)
    setFilter((previousState) => (
      {
        ...previousState,
        category: event.target.value
      }
    ))
  }

  const handleChangeName = (event) => {
    setName(event.target.value)
    setFilter((previousState) => (
      {
        ...previousState,
        name: event.target.value
      }
    ))
  }

  return (
    <section className='filters__container'>
      <div className='input__container'>
        <label htmlFor='name'>Nombre</label>
        <input id='name' type='text' onChange={handleChangeName} value={name} />
      </div>

      <div className='input__container'>
        <label htmlFor='price'>Precio mínimo</label>
        <div className='price__container'>
          <input onChange={handleChangeMinPrice} id='price' type='range' min='0' max='1000' />
          <strong className='range__value'>${minPrice}</strong>
        </div>
      </div>

      <div className='input__container'>
        <label htmlFor='category'>Categoría</label>
        <select onChange={handleChangeCategory} id='category' value={category}>
          <option value='all'>-- Seleccionar --</option>
          <option value='groceries'>Alimentación</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Teléfonos</option>
          <option value='home-decoration'>Hogar</option>
          <option value='fragrances'>Perfumes</option>
          <option value='skincare'>Cuidado de la piel</option>
        </select>
      </div>
      <div className='buttons'>
        <button onClick={handleClean} type='button'>Limpiar</button>
      </div>
    </section>

  )
}

export default Filters