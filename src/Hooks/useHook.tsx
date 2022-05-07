import {useEffect, useState} from "react";
import axios from "axios";
import {PropsHeadLine, State} from "../TypeScript/TypeScript_Type";
import {useSelector} from "react-redux";

interface Props{
    url:string
}


const useHook=({url}:Props)=>{
   const[response,setResponse]=useState<[PropsHeadLine]|null>(null)
    const[loading,setLoading]=useState<boolean>(true)
    const{search}=useSelector((state:State )=> state);

console.log('basic hook')
    const fetchApi=async ()=>{
       const {data}= await axios.get(url)
        setResponse(await  data.articles)
        setLoading(false)
    }


    useEffect(()=>{
      // if (!search){
      //     fetchApi();
      // }
        console.log('inside basic hook')
        fetchApi();
    },[url])

    return {response,loading}
}

export default useHook;