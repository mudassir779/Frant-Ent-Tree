import { createSlice } from "@reduxjs/toolkit";


const prodRoute = createSlice({
    name: "prod",
    initialState: {
        link: import.meta.env.VITE_API_URL || "http://localhost:8000",
    },

    
})

export default prodRoute.reducer

