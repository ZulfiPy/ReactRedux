import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"

const initialState = [
    { userId: 1, name: "Z", surname: "A", address: "P115" },
    { userId: 2, name: "G", surname: "P", address: "P855" },
    { userId: 3, name: "A", surname: "M", address: "H687" },
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