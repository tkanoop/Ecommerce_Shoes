import './Nav.css'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { useState, useEffect } from 'react'

function Nav({ query, handleInputChange, onSubmit }) {
  const [sort, setSort] = useState(null)

  const handleSort = (event) => {
    const selectedSort = parseInt(event.target.value, 10);
    setSort(selectedSort);
  }

  useEffect(() => {
    // Use the updated value of sort in the callback
    if (sort !== null) {
      onSubmit(sort);
    }
  }, [sort, onSubmit]);

  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          className="search-input"
          placeholder="enter your search term"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className='nav-icons' />
        </a>
        <a href='#'>
          <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href='#'>
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>
      <div className='sort-container'>
        <label htmlFor="sortingOptions">Sort by:</label>
        <select id="sortingOptions" onChange={handleSort} >
          <option value="default">Price</option>
          <option value={1}>High To Low</option>
          <option value={-1}>Low To High</option>
        </select>
      </div>
    </nav>
  )
}

export default Nav
