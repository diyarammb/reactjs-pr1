import { GlobalProvider, GlobalContext } from "./Store/GlobalState"
import React, { useContext } from "react"

const UpdateData = () => {
    const { count, IncData ,user} = useContext(GlobalContext)
    console.log(count, IncData,user)
    return (
        <>
         <h1>{count}</h1>
            <button onClick={() => IncData()}>Update Value</button>
            <h1>Update</h1>
        </>

    )
}

export default UpdateData