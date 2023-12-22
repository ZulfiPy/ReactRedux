import TasksList from "./TasksList";

const OutputSection = () => {
    return (
        <div className="child-container">
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>
                                №
                            </th>

                            <th>
                                topic
                            </th>

                            <th>
                                description
                            </th>

                            <th>
                                status
                            </th>

                            <th>
                                datetime
                            </th>

                            <th>
                                edit
                            </th>

                            <th>
                                delete
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <TasksList />
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default OutputSection;