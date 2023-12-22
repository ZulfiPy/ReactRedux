import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectArchivedTasks } from "./features/tasksSlice";
import { GetArchivedTaskIndex } from "./GetTaskIndex";
import { deleteArchivedTask, editArchivedTask } from "./features/tasksSlice";

const ReadOnlyRow = ({ task, setEditRowId }) => {
    const dispatch = useDispatch();

    const onEditTask = (event, taskId) => {
        event.preventDefault();

        setEditRowId(taskId);
    }

    const onDeleteTask = (event, taskId) => {
        event.preventDefault();

        dispatch(deleteArchivedTask({ taskId }));
    }

    return (
        <>
            <td>{GetArchivedTaskIndex(task.taskId)}</td>
            <td>{task.topic}</td>
            <td>{task.description}</td>
            <td>{task.status}</td>
            <td>{task.datetime}</td>
            <td><button type="button" onClick={(event) => onEditTask(event, task.taskId)}>edit me</button></td>
            <td><button type="button" onClick={(event) => onDeleteTask(event, task.taskId)}>delete me</button></td>
        </>
    )
}

const EditRow = ({ task, setEditRowId }) => {
    const [topic, setTopic] = useState(task.topic);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status);

    const dispatch = useDispatch();

    const onEditTask = (event) => {
        event.preventDefault();

        setEditRowId(null);
    }

    const onSaveTaskEdit = (event, taskId, topic, description, status) => {
        event.preventDefault();

        dispatch(editArchivedTask(taskId, topic, description, status));

        setEditRowId(null);
    }

    return (
        <>
            <td>{GetArchivedTaskIndex(task.taskId)}</td>
            <td><input type="text" value={topic} onChange={(event) => setTopic(event.target.value)}/></td>
            <td><input type="text" value={description} onChange={(event) => setDescription(event.target.value)}/></td>
            <td><input type="text" value={status} onChange={(event) => setStatus(event.target.value)}/></td>
            <td>{task.datetime}</td>
            <td><button type="button" onClick={(event) => onEditTask(event)}>cancel</button></td>
            <td><button type="submit" onClick={(event) => onSaveTaskEdit(event, task.taskId, topic, description, status)}>save</button></td>
        </>
    )
}

const ArchivedTasksList = () => {
    const [editRowId, setEditRowId] = useState(null);
    const tasks = useSelector(selectArchivedTasks);

    const renderedTasks = tasks.map(task => {
        const isEditing = editRowId === task.taskId;

        return (
            <tr key={task.taskId}>
                {isEditing ? 
                    <EditRow task={task} setEditRowId={setEditRowId} /> 
                        :
                    <ReadOnlyRow task={task} setEditRowId={setEditRowId} />
                }
            </tr>
        )
    })
    
    return renderedTasks;

}

const ArchivedTable = () => {

    return (
        <div className="parent-container">
            <div className="child-container">
                <form>
                    <table>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>topic</th>
                                <th>description</th>
                                <th>status</th>
                                <th>datetime</th>
                                <th>edit</th>
                                <th>delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            <ArchivedTasksList />
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default ArchivedTable;