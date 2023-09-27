import {createSlice} from "@reduxjs/toolkit"

const initialState =[
    {name:"Dhoni",age:34,course:"ODI",batch:"2007" },
    {name:"sachin",age:42,course:"IPL",batch:"1993" },
    {name:"kohli",age:28,course:"T20",batch:"2011" },
    {name:"Rohit",age:35,course:"Super_Over",batch:"2009" },
    {name:"Rahul",age:30,course:"Sixes",batch:"2015" },
]

const studentSlice=createSlice({
    name:"stu_data",
    initialState,
    reducers:{
        editStudent : (state,action)=>{
            state[action.payload.index] = action.payload.info;

        },
        addStudent: (state,action)=>{
            state.push(action.payload)

        }

    }
})

export const {editStudent,addStudent}=studentSlice.actions
export default studentSlice.reducer 

