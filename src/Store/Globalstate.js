import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const InitalState = {
    count: 0,
    user:[
        { name:"ali",age:20},
        { name:"asad",age:21}

    ]

    
}

//craete Context
export const GlobalContext = createContext(InitalState)


//provider
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, InitalState) //store aur state and changing function

    function IncData() {
        console.log("Inc Data 2")
        dispatch({
            type1: "Counter_INC",
          
        })
      
    }

    function DecData() {
        console.log("Dec Data 2")
        dispatch({
            type1: "Counter_Dec",
           
        })
      
    }

    function AddNewData(data){
        console.log("Add New Data");
        console.log(data)
        dispatch({
            type1:"add_New_User",
            data: data
        })
       
    }



    return (
        <GlobalContext.Provider
            value={{
                count: state.count,
              user:state.user,
                IncData,
                DecData,
                AddNewData
            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}





