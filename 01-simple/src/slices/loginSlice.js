import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    adminIser: {
        firstName: 'developer21',
        password: '123456',
    }
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
})

export default loginSlice.reducer;