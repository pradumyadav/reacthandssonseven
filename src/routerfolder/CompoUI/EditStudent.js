import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { editStudent } from "../Slice/Slice";




export default function EditStudent(){
    const index =useLocation().state.index ;
    const dispatch= useDispatch();
    const navi =useNavigate()
    const data=useSelector((state)=>state.stu_data);

    const[info,setInfo]=useState(
        {
            name:data[index].name,
            age:data[index].age,
            course:data[index].course,
            batch:data[index].batch

        }
    )
    const handleChange =(e)=>{
        setInfo({...info, [e.target.name] :e.target.value})
    }

    const handleClick=()=>{
        dispatch(editStudent({info,index}))
        navi('/student')
        console.log(info)
    }
    return(
        <div className="inputPage">
       
        
        <input placeholder="Enter Name" name="name" onChange={handleChange}/><br/>
        
        <input placeholder="Enter Age" name="age" onChange={handleChange}/><br/>
        
        <input placeholder="Enter Course" name="course" onChange={handleChange}/><br/>
        
        <input placeholder="Enter Batch" name="batch" onChange={handleChange}/><br/>
        <button  className="button1"onClick={()=>navi("/student")}>Cancle</button>
        <button  className="button1"onClick={handleClick}>Update</button>
        </div>
    )
}