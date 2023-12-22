import { useSelector } from "react-redux";
import { selectUsers } from "./features/usersSlice";

const UsersList = () => {
    const users = useSelector(selectUsers);

    const renderedUsers = users.map(user => (
        <article key={user.userId}>
            <span>{user.name} </span>
            <span>{user.surname} </span>
            <span>{user.address}</span>
        </article>
        )
    )

    return (
        <section>
            <h3>users list</h3>
            {renderedUsers}
        </section>
    )
}

export default UsersList;