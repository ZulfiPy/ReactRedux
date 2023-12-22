import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"

const initialState = [
    { userId: 1, name: "Zulfugar", surname: "Abdullayev", address: "Pille 11/5" },
    { userId: 2, name: "Gleb", surname: "Padar", address: "Priisle 8-55" },
    { userId: 3, name: "Aleksandr", surname: "Maiorov", address: "Heki tee 6-87" },
]

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(firstname, surname, address) {
                return {
                    payload: {
                        userId: nanoid(),
                        name: firstname,
                        surname,
                        address
                    }
                }
            }
        }
    }
})

export const selectUsers = (state) => (state.users);

export const { addUser } = usersSlice.actions

export default usersSlice.reducer;