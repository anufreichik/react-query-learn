import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getResources} from "../api/resources";

const Resources = () => {

    const onResourcesSuccess = (data)=>{
        console.log('on resources success side effect after data fetching', data);
    }

    const onResourcesError = (err)=>{
        console.log('on resources error side effect after data fetching', err);
    }

    // Grab all resources
    const usersQuery = useQuery({
        queryKey: ["resources"],
        queryFn: getResources,
        cacheTime:5000,
        onSuccess:onResourcesSuccess,
        onError:onResourcesError,
        select:(data)=>{
            const filteredResources = data.data.filter(r=>r.name==='aqua sky');
            return filteredResources;
        }

    })



    const { data:resources, isLoading, isFetching, error } = usersQuery;
    if (isLoading) return <p>Loading ...</p>;
    if (error) return <p>Something went wrong ...</p>;
    return (
        <div>
            {resources.map(u=><li key={u.id}>{u.name} {u.year} {u.color} </li>)}
        </div>
    );
};

export default Resources;
