import React, { useState } from 'react'

const Settings = ({setActiveSetings,setForPage,forPage}) => {
    const [inputValue, setInputValue] = useState(forPage);
    const changePokemon =(e)=>{
        e.preventDefault();
        // setForPage(inputValue);
        setActiveSetings(false);

    }
    // console.log(inputValue);
    return (
    <div className='settings'>
    <button onClick={()=>setActiveSetings(false)}>close</button>
        
        <h1>
            Settings
            </h1>
        <h3>set pokemon for pages</h3>
        <form action="" onSubmit={changePokemon}>
            <input type="number" value={forPage} onChange={(e)=>setForPage(e.target.value)}  />
            <button>change</button>
        </form>
    
    </div>
  )
}

export default Settings