import React,{useContext} from 'react'
import DecData from './Decdata';
import RenderData from './renderdata';
import {GlobalContext,GlobalProvider } from './Store/GlobalState'
import UpdateData from './UpdateData';


function App() {
 


  return (
   <>
   <GlobalProvider>
    <h1>Hello World</h1>
   
    <UpdateData/>

<RenderData/>


    </GlobalProvider>
  

  
  </>
   
  );
}

export default App;