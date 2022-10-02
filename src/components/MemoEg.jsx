import React, { useMemo, useState } from 'react'

const MemoEg = () => {

    const [z, setZ] = useState(0);

    const [a,setA]=useState(0);


const pow=(a)=>{
  return a*a;
}

var sqr= useMemo(()=>{
  return pow(a);  
},[a]); 

  return (
    <div>

        <label htmlFor="number">Enter Number : </label>
        <input type="number" onChange={(e)=>{setA(e.target.value)}} /> <br />
        <input type="text" onChange={ (e) => setZ(e.target.value)} />
  
        <h1>{sqr}</h1>

    </div>
  )
}

export default MemoEg;