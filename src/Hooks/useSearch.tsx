import {useEffect, useState} from "react";
import axios from "axios";
import {PropsHeadLine, State} from "../TypeScript/TypeScript_Type";
import {useSelector} from "react-redux";

interface Props{
    url:string
}


const useSearch=({url}:Props)=>{
    const{search}=useSelector((state:State )=> state);


    const[responseSearch,setResponseSearch]=useState<[PropsHeadLine]|null>(null)
    const[loadingSearch,setLoadingSearch]=useState<boolean>(true)


    const fetchApi=async ()=>{
        const {data}= await axios.get(url)
        setResponseSearch(await  data.articles)
        setLoadingSearch(false)
    }

    console.log(' search hook')
    useEffect(() => {

        const timer = setTimeout(() => {
            if (search) {

                console.log('inside search hook')
                fetchApi();
            }

        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [search,url])

    return {responseSearch,loadingSearch}
}

export default useSearch;