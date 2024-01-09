import React from 'react'
import { useState , useContext } from 'react';
import { useTitle } from './context';
import ContextProvider from './context';




function Compo3 (props) {
   const {title, changeTitle} = useTitle()

    return(
        <ContextProvider>
            <h1>this is compo 3 : {title}</h1>
            <button onClick={changeTitle}>change</button>
        </ContextProvider>
        
        
    )
}

export default Compo3;