import React, { useState } from 'react';
import Navbar2 from "./components/Navbar"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar2 />
    </>
  )
}

export default App
