import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { addStudent } from "../Slice/Slice";


export default function NewStudent(){
    const navi=useNavigate();
    const dispatch =useDispatch()
    const[info,setInfo]=useState({
        name:"",
        age:"",
        course:"",
        batch:""

    })
    const handleChange=(e)=>{
        setInfo({...info, [e.target.name] :e.target.value})
    }

    const handleClick=()=>{
        dispatch(addStudent(info))
        navi("/student")
    }
    return(
        <div className="inputPage2">
        
      
        <input className="input1" placeholder="Enter Name" name="name" onChange={handleChange}/><br/>
    
        <input className="input1" placeholder="Enter Age" name="age" onChange={handleChange}/><br/>
       
        <input className="input1" placeholder="Enter Course" name="course" onChange={handleChange}/><br/>
      
        <input className="input1" placeholder="Enter Batch" name="batch" onChange={handleChange}/><br/>
        <button className="button1" onClick={()=>navi("/student")}>Cancle</button>
        <button className="button1" onClick={handleClick}>Update</button>
        </div>
    )
}