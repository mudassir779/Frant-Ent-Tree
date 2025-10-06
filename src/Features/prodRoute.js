import { createSlice } from "@reduxjs/toolkit";

const prodRoute = createSlice({
    name: "prod",
    initialState: {
        // Live backend (Coolify)
        link: "https://mudassir779-backend.coolify.app",
    },
});

export default prodRoute.reducer;
