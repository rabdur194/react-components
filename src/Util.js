import React, {useState} from 'react'

function Util () {
  const[result, setResult]= useState(null);

 function sum({valueA, valueB}){
    const result= valueA + valueB;
    setResult(`Here is the summation result ${result}`)
   console.log(`Here is the summation result ${result}`);

 }
  const multiply =  ({valueA, valueB})=> {
      const  result = valueA * valueB;
    setResult(`Here is the multiply result ${result}`)
  console.log(`Here is the multiply result ${result}`);

  }
  function handleSum(){
    sum({valueA:4,valueB:5});
  }
    function handleMultiply(){
    multiply({valueA:4,valueB:5});
  }
  return (
    <div>Utility practises
      <br></br>
    <button onClick={handleSum} className='click-btn'>Sum me</button>
    <br></br>
    <button onClick={handleMultiply} className='click-btn'>Multiply Me</button>
    <p>{result}</p>
    </div>
  )
}

export default Util

