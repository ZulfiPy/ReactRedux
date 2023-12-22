import { useSelector } from "react-redux";
import { selectActiveTasks, selectArchivedTasks } from "./features/tasksSlice";

export const GetActiveTaskIndex = (taskId) => {
    const tasks = useSelector(selectActiveTasks);
    const taskIndex = tasks.findIndex(task => task.taskId === taskId);

    return taskIndex + 1;
}

export const GetArchivedTaskIndex = (taskId) => {
    const tasks = useSelector(selectArchivedTasks);
    const taskIndex = tasks.findIndex(task => task.taskId === taskId);

    return taskIndex + 1;
}