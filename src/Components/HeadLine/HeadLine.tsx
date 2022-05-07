import React, {Fragment} from 'react';
import {PropsHeadLine} from "../../TypeScript/TypeScript_Type";
import ContentHome from "../ContentHome/ContentHome";
import './HeadLine.css'
import {Container} from "@mui/material";


type props={
    response:[PropsHeadLine] |undefined
}

const HeadLine=({response}:props)=> {
    const intro=response?.slice(0,5)
    const content=response?.slice(5,11)
    const sideBar=response?.slice(11,15)
    // const footer=response?.slice(14,19)
    return (
        <div className='content-app-home'>
           <Container>
               <div className='content-home-intro'  >
                   {intro?.map(item=>{
                       return(
                         <div className='style_Intro' key={Math.random()*10}>
                             <ContentHome
                                 Key={item?.source?.id}
                                 content={item.content}
                                 description={item.description}
                                 publishedAt={item.publishedAt}
                                 title={item.title}
                                 urlToImage={item.urlToImage}
                                 sourceNews={item.source?.name}
                                 style='style_Intro'
                             />
                         </div>
                       )
                   })}
               </div>
               <div className='content-home-content '>
                   {content?.map(item=>{
                       return(
                           <div className='style_Content' key={Math.random()*10}>
                               <ContentHome
                                   Key={item?.source?.id}
                                   content={item.content}
                                   description={item.description}
                                   publishedAt={item.publishedAt}
                                   title={item.title}
                                   urlToImage={item.urlToImage}
                                   sourceNews={item.source?.name}
                                   style='style_Content'
                               />
                           </div>
                       )
                   })}
               </div>
               <div className='content-home-sideBar'>
                       {sideBar?.map(item=>{
                           return(
                               <div className='style_sideBar' key={Math.random()*10}>
                                   <ContentHome
                                       Key={item?.source?.id}
                                       content={item.content}
                                       description={item.description}
                                       publishedAt={item.publishedAt}
                                       title={item.title}
                                       urlToImage={item.urlToImage}
                                       sourceNews={item.source?.name}
                                       style='style_sideBar'
                                   />
                               </div>
                           )
                       })}
               </div>
           </Container>
        </div>
    );
}

export default HeadLine;