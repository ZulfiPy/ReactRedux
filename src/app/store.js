import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import userReducer from "../features/usersSlice";
import taskReducer from "../features/tasksSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer,
        tasks: taskReducer,
    }
});