import React, { useState, useEffect } from 'react'
import './App.css'
import HashLoader from "react-spinners/HashLoader";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },5000)    
   
  }, [])
  
  const override =`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  return isLoading?<HashLoader color={"red"}  css={override}  isLoading={isLoading} size={150} />: 
    <h1 className="App">
      Hello world
    </h1>
  
}

export default App
