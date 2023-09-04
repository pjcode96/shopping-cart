import Filters from './filters/Filters.jsx'

export function Header({ setFilter }) {
  return (
    <header className='header'>
      <h1>Ken's Shop</h1>
      <Filters
        setFilter={setFilter}
      />
    </header>
  )
}