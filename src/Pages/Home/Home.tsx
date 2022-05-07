import React, {Fragment, useEffect, useState} from 'react';
import useHook from "../../Hooks/useHook";
import HeadLine from "../../Components/HeadLine/HeadLine";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../TypeScript/TypeScript_Type";
import useSearch from "../../Hooks/useSearch";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import useSource from "../../Hooks/useSource";
import {updateSearch, updateSource} from "../../Redux/Actions";


const Home:React.FC=()=> {

const dispatch=useDispatch()

    const {country, category,search,source} = useSelector((state:State )=> state);
    const[data,setData]=useState<any>(null)

    const{response,loading}=useHook({url:`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=1&apiKey=8a29aee4677b4f2b9e03f9bbc368575b`})
    const{responseSearch,loadingSearch}=useSearch({url:` https://newsapi.org/v2/everything?q=${search}&apiKey=8a29aee4677b4f2b9e03f9bbc368575b`})
    const{responseSource,loadingSource}=useSource({url:`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=8a29aee4677b4f2b9e03f9bbc368575b`})



    const basicRes =  () => {
      if (response){
          setData( response)
      }
    }
    const searchRes = () => {
        setData(responseSearch)
    }
    const sourceRes = () => {
        setData(responseSource)
    }

console.log('home page')
    useEffect(()=>{
     if (!source&&!search&&country||category) {

         dispatch(updateSource(''))
         dispatch(updateSearch(''))

         basicRes()
         console.log('home page basic')
        }
    },[response,category,country])

    useEffect(()=>{
     if (search){
            console.log(search)
            dispatch(updateSource(''))
            searchRes()
         console.log('home page search')
        }
    },[responseSearch])

    useEffect(()=>{
        if (source){

            dispatch(updateSearch(''))
            sourceRes()
            console.log('home page source')
        }
    },[responseSource])


    return (
        <Fragment>
            <SocialMedia />
            {data&&<HeadLine response={data}/>}
        </Fragment>
    );
}

export default Home;