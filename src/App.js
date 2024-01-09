import React, { useState } from 'react'
import Compo1 from './components/compo1';
import Compo2 from './components/compo2';
import ContextProvider from './components/context';



function App(){
  return(
    <ContextProvider>
    <div>
      <Compo1></Compo1>
      <Compo2></Compo2>
    </div>
    </ContextProvider>
  )
}

export default App;