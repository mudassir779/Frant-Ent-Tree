import { createSlice } from "@reduxjs/toolkit";


const prodRoute = createSlice({
    name: "prod",
    initialState: {
        link: `${import.meta.env.VITE_BackEnd_BaseURL}`,
    },

    
})

export default prodRoute.reducer

