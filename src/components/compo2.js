import React,{useContext} from 'react'
import Compo3 from './compo3';
import { useTitle } from './context';
function Compo2 (props) {

    const {title} = useTitle()
    return(
        <>
         <h1>this is compo 2 : {title}</h1>
         <Compo3></Compo3>
         </>
    )
}

export default Compo2;