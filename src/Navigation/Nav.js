
import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/fi'

function Nav(){
    return (
       <nav>
        <div className="nav-container">
            <input type="text"
            className="search-input"
            placeholder="enter your search term"
            />

        </div>
        <div className="profile-container">
            <a href="#">
                <FiHeart className='nav-icons'/>


            </a>
            <a href='#'>
               
            </a>
            <a href='#'>
                
            </a>
        </div>

       </nav>
    )
}
export default Nav