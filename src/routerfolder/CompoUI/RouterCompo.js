import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import ContectUs from "./ContectUs";
import EditStudent from "./EditStudent";
import NewStudent from "./NewStudent";

import "./Style.css"

export default function RouterCompo(){
    return(
        <div>
            <BrowserRouter>
            <nav className="navBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/student"> Student</NavLink>
            <NavLink to="/contectus"> ContactUs</NavLink>
            </nav>
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/student" element={<Student/>}/>
                <Route path="/contectus" element={<ContectUs/>}/>
                <Route path="/editstudent" element={<EditStudent/>}/>
                <Route path="/newStudent" element={<NewStudent/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}