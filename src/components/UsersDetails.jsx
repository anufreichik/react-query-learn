import React from 'react';
import { useQueries } from "@tanstack/react-query";
import {getSingleUser} from "../api/users";

const UsersDetails = ({userIds}) => {

   const queryResults =  useQueries(
       {
           queries:   userIds?.map(id => {
                return {
                    queryKey: ['users', id],
                    queryFn: () => getSingleUser(id)
                }
            })
       }
    )

    return (
        <div>
            {queryResults.map(item=>{
                const {data,isLoading, isFetching} = item;
                if(isLoading || isFetching) return<>Loading...</>
                return <img src={data.data.avatar} width={100} height={100}/>
            })}
        </div>
    );
};

export default UsersDetails;
