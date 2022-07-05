import React,{useContext, useState} from 'react'
import {GlobalContext} from './Store/GlobalState'

function RenderData(){

    let {user,AddNewData} = useContext(GlobalContext)

    console.log(user,AddNewData)

    var [data,setdata] = useState()
    var [age,setage] = useState()

    const addData=()=>{

        console.log(data);
        console.log(age)

        var obj = {
            name : data,
            age:age
        }

        AddNewData(obj )



    }


    return(
        <>
        <h1>Render Data</h1>
        <input type="text" onChange={(e)=>setdata(e.target.value)}/>
        <input type="text" onChange={(e)=>setage(e.target.value)}/>
        <button onClick={()=>addData()}>Add New Value</button>
        {user.map((v,i)=>{
            return(
            <div>
                <b>User Name :{v.name}</b>
                |<b>Age : {v.age}</b>
                <button>Update</button>
                <button>Delete</button>
            </div>
       
        )})}
        
        </>

    )
}

export default RenderData