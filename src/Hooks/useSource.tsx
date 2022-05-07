import {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {PropsHeadLine, State} from "../TypeScript/TypeScript_Type";



interface props{
    url:string
}

const useSource=({url}:props)=>{
    const{source}=useSelector((state:State)=>state)
    const[responseSource,setResponseSource]=useState<null|[PropsHeadLine]>(null)
    const[loadingSource,setLoadingSource]=useState(true)

    const fetchSource=async ()=>{
        const{data}=await axios.get(url)
        setResponseSource(await data.articles)
        setLoadingSource(false)
    }
    console.log(' source hook')
    useEffect(()=>{
      if (source){
          console.log(' inside source hook')
          fetchSource()
      }
    },[url,source])

    return{responseSource,loadingSource}
}

export default useSource;