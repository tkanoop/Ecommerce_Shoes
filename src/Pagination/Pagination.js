import "./Pagination.css"
import React from 'react'

function Pagination({currentPage,numbers,onEdit,npage}) {
    console.log(npage);

const prevPage=()=>{
    onEdit(currentPage-1)

}
const nextPage=()=>{
    onEdit(currentPage+1)
    
}
const changePage=(n)=>{
    onEdit(n)
}


  return (
    <div>
        <ul className='pagination'>
            <li className='page-item'>
                <button onClick={prevPage} disabled={currentPage===1}>Prev</button>
            </li>
            {numbers.map((n, i) => (
          <li className={`page-item selected`} key={i}>
            <button onClick={()=>changePage(n)}>{n}</button>
          </li>
        ))}
            <li className='page-item'>
                <button className='page-link' onClick={nextPage} disabled={currentPage===npage}>Next</button>
            </li>
        </ul>
    </div>
  )
}

export default Pagination