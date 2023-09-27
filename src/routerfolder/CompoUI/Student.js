import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"



export default function Student(){
    const data=useSelector((state)=>state.stu_data)
    const navi= useNavigate()
    return(
        <div>
            <div className="side">Student Details</div>
        <button className="button1" onClick={()=>navi("/newStudent")}>Add New Student</button>
            <table  border="5" width="85%" height="450px">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>{
                        return(
                             <tr key={index}>
                             <td>{item.name}</td>
                             <td>{item.age}</td>
                             <td>{item.course}</td>
                             <td>{item.batch}</td>
                             <td><NavLink to="/editstudent" state={{index}}>Edit</NavLink></td>
                         </tr>
                    )})}
                   
                </tbody>
            </table>
        </div>
    )
}