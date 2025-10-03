import {configureStore} from "@reduxjs/toolkit"
import prodReducer from "../Features/prodRoute"

const store = configureStore({

reducer:{
    prod:prodReducer,
}

})
export default store