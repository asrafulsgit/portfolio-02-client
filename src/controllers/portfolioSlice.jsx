import {createSlice} from '@reduxjs/toolkit'

const portfolioSlice =createSlice({
    name : 'portfolio',
    initialState :{
        profile : {}
    },
    reducers : {
        setProfile (state,action){
            state.profile = action.payload;
        }
    }
})

export const {setProfile}=portfolioSlice.actions;
export default portfolioSlice.reducer;