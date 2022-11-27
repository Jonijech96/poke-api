import React from 'react'

const Pagination = ({max,setPage,page}) => {
    let arrayButtons = [];

    for (let index = 0; index < max; index++) {
      arrayButtons.push(
        <button
          className={page == index ? "button-select" : ""}
          onClick={() => setPage(index)}
          key={index}
        >
          {index + 1}
        </button>
      );
    }
  return (
    <div className="pagination">
        {page!== 0 && <button onClick={()=>setPage(page-1)}>atras</button>}
        {arrayButtons}
        {page < max-1 && <button onClick={()=>setPage(page+1)}>adelante</button>}

    </div>
  )
}

export default Pagination