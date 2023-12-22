import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import newTime from "../newTime";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        active: [],
        archived: []
    },
    reducers: {
        addTask: {
            reducer(state, action) {
                state.active.push(action.payload)
            },
            prepare(topic, description, status) {
                return {
                    payload: {
                        taskId: nanoid(),
                        topic,
                        description,
                        status,
                        datetime: newTime()
                    }
                }
            }
        },
        editTask: {
            reducer(state, action) {
                const { taskId, topic, description, status, editedAt } = action.payload
                const index = state.active.findIndex(task => task.taskId === taskId);
                if (index !== -1) {
                    state.active[index] = { ...state.active[index], topic, description, status, editedAt}   
                }
            },
            prepare(taskId, topic, description, status) {
                return {
                    payload: {
                        taskId,
                        topic,
                        description,
                        status,
                        editedAt: newTime()
                    }
                }
            }
        },
        deleteTask: {
            reducer(state, action) {
                const { taskId } = action.payload;
                const index = state.active.findIndex(task => task.taskId === taskId);
                if (index !== -1) {
                    state.archived.push(state.active[index])
                    state.active.splice(index, 1);
                }
            }
        },
        deleteArchivedTask: {
            reducer(state, action) {
                const { taskId } = action.payload;
                const index = state.archived.findIndex(task => task.taskId === taskId);
                if ( index !== -1) {
                    state.archived.splice(index, 1);
                }
            }
        },
        editArchivedTask: {
            reducer(state, action) {
                const { taskId, topic, description, status, editedAt } = action.payload;
                const index = state.archived.findIndex(task => task.taskId === taskId);
                if (index !== -1) {
                    state.archived[index] = { ...state.archived[index], topic, description, status, editedAt };
                }
            },
            prepare(taskId, topic, description, status) {
                return {
                    payload: {
                        taskId,
                        topic,
                        description,
                        status,
                        editedAt: newTime()
                    }
                }
            }
        }
    }
})

export const selectActiveTasks = (state) => (state.tasks.active);
export const selectArchivedTasks = (state) => (state.tasks.archived);

export const { addTask, deleteTask, editTask, deleteArchivedTask, editArchivedTask } = tasksSlice.actions;

export default tasksSlice.reducer;