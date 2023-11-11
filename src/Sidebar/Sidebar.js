import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import './Sidebar.css'
import {SlBasketLoaded} from 'react-icons/sl'
function Sidebar({handleChange}) {
  return (
    <>
    <section className='sidebar'>
        <div className='logo-container'>
            <div className='logo-basket'>
            <SlBasketLoaded/>
            </div>
            

        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
    </>
  )
}

export default Sidebar