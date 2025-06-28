import { configureStore } from "@reduxjs/toolkit";

import porfolioReducer from '../controllers/portfolioSlice'

const portfolioStore = configureStore({
    reducer : {
        data : porfolioReducer
    }
})

export default portfolioStore;