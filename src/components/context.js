import React, { useContext, useState } from 'react'
import { createContext } from 'react'


const titleContext = createContext();
export const useTitle = () => useContext(titleContext);

function ContextProvider (props) {

    const [title,setTitle] = useState("testing")

    const changeTitle = () => {
        let dd = 'testing' + Math.ceil(Math.random(0,1) * 1000)
        setTitle(dd)
    }

    const data= {title,changeTitle}
 return (
    <>
    <titleContext.Provider value={data}>
     {props.children}
    </titleContext.Provider>
    </>
 )
}

export default ContextProvider;