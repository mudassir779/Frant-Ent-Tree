import { createSlice } from "@reduxjs/toolkit";

const prodRoute = createSlice({
    name: "prod",
    initialState: {
        // Production backend URL
        link: "https://americantreesexpert.com",
        // Local backend for development (uncomment for local testing)
        // link: "http://localhost:3000",
    },
});

export default prodRoute.reducer;
