import React, {Fragment, useEffect, useState} from 'react';
import useHook from "../../Hooks/useHook";
import {useSelector} from "react-redux";
import {PropsHeadLine, State} from "../../TypeScript/TypeScript_Type";
import {useParams} from "react-router-dom";
import HeadLine from "../../Components/HeadLine/HeadLine";
import HeadLineDetails from "../../Components/HeadLineDetails/HeadLineDetails";
import SwiperDetails from "../../Components/SwiperDetails/SwiperDetails";
import useSearch from "../../Hooks/useSearch";
import {Box} from "@mui/material";
import useSource from "../../Hooks/useSource";

const Details:React.FC=()=> {
    const {country, category,search,source} = useSelector((state:State )=> state);


    const{response,loading}=useHook({url:`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=1&apiKey=8a29aee4677b4f2b9e03f9bbc368575b`})
    const{responseSearch,loadingSearch}=useSearch({url:` https://newsapi.org/v2/everything?q=${search}&apiKey=8a29aee4677b4f2b9e03f9bbc368575b`})
    const{responseSource,loadingSource}=useSource({url:`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=8a29aee4677b4f2b9e03f9bbc368575b`})


    const[details,setDetails]=useState<any>([])
    const[moreDetails,setMoreDetails]=useState<any>([])
    const {title}=useParams();

    const filteredResponse=()=>{
        const filteredRes=response?.filter(item=>item.title===title)
        const filteredResForSwiper=response?.filter(item=>item.title!==title)
        setDetails(filteredRes)
        setMoreDetails(filteredResForSwiper)
    }
    const filteredResponseSearch=()=>{
        const filteredRes=responseSearch?.filter(item=>item.title===title)
        const filteredResForSwiper=responseSearch?.filter(item=>item.title!==title).slice(0,5)
        setDetails(filteredRes)
        setMoreDetails(filteredResForSwiper)
    }
    const filteredResponseSource=()=>{
        const filteredRes=responseSource?.filter(item=>item.title===title)
        const filteredResForSwiper=responseSource?.filter(item=>item.title!==title).slice(0,5)
        setDetails(filteredRes)
        setMoreDetails(filteredResForSwiper)
    }
    console.log('details')

    useEffect(()=>{
        console.log('app')
      if (search){
          console.log('seach')
          filteredResponseSearch()

      }else if(source){
          console.log('source')
          filteredResponseSource()
      }

      else {
          console.log('response')
          filteredResponse()

      }
    },[response,title,responseSearch,responseSource])


      // useEffect(()=>{
      //     if (search){
      //         console.log('seach')
      //         filteredResponseSearch()
      //
      //     }
      // },[responseSearch])
      //
      //
      //   useEffect(()=>{
      //    if(source){
      //           console.log('source')
      //           filteredResponseSource()
      //       }
      //   },[responseSource])
      //
      //
      //   useEffect(()=>{
      //   if(!source&&!search){
      //
      //           filteredResponse()
      //       console.log('resposssssssssssssssssssssssssssssnse')
      //
      //       console.log(response)
      //       }
      //   },[title,response])


    return (

            <Fragment>
               <HeadLineDetails response={details}/>
                <SwiperDetails response={moreDetails}/>
            </Fragment>


    );
}

export default Details ;
