import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveTasks, editTask, deleteTask } from "./features/tasksSlice";
import { GetActiveTaskIndex } from "./GetTaskIndex";

const ReadOnlyRow = ({ task, setEditRowId }) => {
    const dispatch = useDispatch();

    const onEditTask = (event, taskId) => {
        event.preventDefault();

        setEditRowId(taskId)
    } 

    const onDeleteTask = ( event, taskId) => {
        event.preventDefault();

        dispatch(deleteTask({ taskId }));
    }

    return (
        <>
            <td>{GetActiveTaskIndex(task.taskId)}</td>
            <td>{task.topic}</td>
            <td>{task.description}</td>
            <td>{task.status}</td>
            <td>{task.datetime}</td>
            <td><button type="button" onClick={(event) => onEditTask(event, task.taskId)}>edit me</button></td>
            <td><button type="button" onClick={(event) => onDeleteTask(event, task.taskId)}>delete me</button></td>
        </>
    )
}

const EditRow = ({task, setEditRowId}) => {
    const [topic, setTopic] = useState(task.topic);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);
    
    const dispatch = useDispatch();

    const onSaveTaskEdit = (event, taskId, topic, description, status) => {
        event.preventDefault()

        dispatch(editTask(taskId, topic, description, status));

        setEditRowId(null);
    }

    return (
        <>
            <td>{GetActiveTaskIndex(task.taskId)}</td>
            <td><input type="text" value={topic} onChange={(e) => setTopic(e.target.value)}/></td>
            <td><input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/></td>
            <td><input type="text" value={status} onChange={(e) => setStatus(e.target.value)}/></td>
            <td>{task.datetime}</td>
            <td><button type="button" onClick={() => setEditRowId(null)}>cancel</button></td>
            <td><button type="submit" onClick={(event) => onSaveTaskEdit(event, task.taskId, topic, description, status)}>save</button></td>
        </>
    )
}

const TasksList = () => {
    const [editRowId, setEditRowId] = useState(null);
    const tasks = useSelector(selectActiveTasks);

    const renderedTasks = tasks.map(task => {
        const isEditing = editRowId === task.taskId;

        return (
            <tr key={task.taskId}>

                {isEditing ? 
                    <EditRow task={task} setEditRowId={setEditRowId}/>
                        :
                    <ReadOnlyRow task={task} setEditRowId={setEditRowId}/>
                }

            </tr>
        )
    })
    return renderedTasks;
}

export default TasksList;