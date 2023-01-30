import {useQuery} from "@tanstack/react-query";
import {getUsers} from "../api/users";

export const useUsers=(onSuccess, onError)=>{
    return useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
        cacheTime:5000, // default = 30000
        staleTime:30000, //default = 0
        refetchOnMount:true, //default = true
        refetchOnWindowFocus:true,
        onSuccess:onSuccess,
        onError:onError
        //refetchInterval:false, //default = false , if set 2000 will refetch every 2sec
        // refetchIntervalInBackground:true, // refetch data interval even its not focused
    })
}
