import  { useEffect, useState } from 'react'
import { FetchData, Genre} from '../Interfaces/Reuseable';
import ApiClient from '../Services/Api-client';
import {AxiosRequestConfig, CanceledError} from 'axios'

export const useData=<T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?:any[])=> {
    const [data, setData]=useState<T[]>([]);
    const [error,setError]=useState('');
    const [isLoading,setloading]= useState(false);

    useEffect(()=>{

        const controller= new AbortController();
        setloading(true);
        ApiClient.get<FetchData<T>>(endpoint, {signal:controller.signal, ...requestConfig})
        .then(res=>{
            setData(res.data.results)
        setloading(false);
    })
        .catch((err)=>{
            if(err instanceof CanceledError)
            {return}
            else{setError(err.message)}
            setloading(false);
        });

        return ()=> controller.abort();
    },deps?[...deps]:[]);

    return {data,error,isLoading};
}

export default useData;