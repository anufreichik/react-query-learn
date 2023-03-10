import { useQuery } from "@tanstack/react-query"
import { getSingleUser } from "../api/users";
import {useUsers} from "../hooks/useUsers";


export default function UsersList() {

    const onUsersSuccess = (data)=>{
        console.log('on users success side effect after data fetching', data);
    }

    const onUsersError = (err)=>{
        console.log('on users error side effect after data fetching', err);
    }

    const useQuerySingleUser = useQuery({
        queryKey: ["usersFiltered"],
        queryFn:()=>getSingleUser(2),
        enabled:false,
    })

    const { data: users, isLoading, isFetching, isError, error } = useUsers(onUsersSuccess, onUsersError);

    const { data: singleUser, isLoading: isLoadingSingleUser,isFetching:isFetchingSingleUser,  refetch } = useQuerySingleUser;

    if (isLoading) return <h1>Loading...</h1>
    if (isError) {
        return <h1>{error.message}</h1>
    }

    const getUserClickHandle=()=>{
        refetch().then(res=>console.log(res))
    }
    return (
        <div>
            <h1>Post List 2</h1>
            <ol>
                {users?.data.map(user => (
                    <li key={user.id}>{user.first_name}-{user.last_name}</li>
                ))}
            </ol>

            <button onClick={getUserClickHandle}>Get User</button>
            <div>
                {!isLoadingSingleUser && singleUser && singleUser.data.email}
                {(isFetchingSingleUser) && <h3>Loading...</h3>}
            </div>

        </div>
    )
}
