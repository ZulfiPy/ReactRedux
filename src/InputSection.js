import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectActiveTasks, addTask } from "./features/tasksSlice";


const InputSection = () => {
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("not started");

    const tasks = useSelector(selectActiveTasks);
    const dispatch = useDispatch();

    const canAdd = Boolean(topic) && Boolean(description);

    const onAddTask = (event) => {
        event.preventDefault();
        dispatch(addTask(topic, description, status));

        setTopic("");
        setDescription("");
        setStatus("not started");
    }

    const onClearTask = (event) => {
        event.preventDefault();

        setTopic("");
        setDescription("");
        setStatus("not started");
    }

    return (
        <div className="child-container">
            <form className="input-form">
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>topic</th>
                            <th>description</th>
                            <th>status</th>
                            <th>clear</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                {tasks.length + 1}
                            </td>

                            <td>
                                <input
                                    name="topic"
                                    type="text"
                                    placeholder="e.g., insurance"
                                    value={topic}
                                    onChange={(event) => setTopic(event.target.value)}
                                />
                            </td>
                            
                            <td>
                                <input
                                    name="description"
                                    type="text"
                                    placeholder="i.e., describe the topic"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                />
                            </td>

                            <td>
                                <select name="status" value={status} onChange={(event) => setStatus(event.target.value)}>
                                    <option>not started</option>
                                    <option>in-process</option>
                                    <option>close to finish</option>
                                    <option>done</option> 
                                </select>
                            </td>

                            <td>
                                <button type="button" onClick={(event) => onClearTask(event)}>clear</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button
                    className="add-row-button" 
                    type="submit" 
                    disabled={!canAdd}
                    onClick={(event) => onAddTask(event)}
                >ADD</button>
            </form>
        </div>
    )
}

export default InputSection;