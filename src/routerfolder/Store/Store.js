

import {configureStore} from "@reduxjs/toolkit"
import studentSlice from "../Slice/Slice"

const Store=configureStore({
    reducer:{
        stu_data:studentSlice
    }
})

export default Store ;