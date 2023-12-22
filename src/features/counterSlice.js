import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        reset: state => {
            state.value = 0;
        },
        incrementBy: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const { increment, decrement, reset, incrementBy } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;