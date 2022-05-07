


import React, {useState} from 'react';
import {PropsHeadLine, State} from '../../TypeScript/TypeScript_Type'
import {imageNotFound} from "../../Data/Data";

import './ContentHome.css'
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateSearch} from "../../Redux/Actions";

type props=PropsHeadLine&{
    style?:string
}

const ContentHome=({Key,content,description,publishedAt,title,sourceNews,urlToImage,style}:props)=> {

    const history=useNavigate()

    const showDetails=()=>{
        history(`/details/${title}`)

    }
    return (
        <div className='test' onClick={showDetails} >
            <div className={`img_${style}`}>
                <img src={urlToImage?urlToImage:imageNotFound}/>
            </div>
            <div className='content'>
                <p >{title?.split(' ').slice(0,5).join(' ')}</p>
                <span>{sourceNews&&sourceNews}</span>
            </div>
        </div>
    );
}

export default ContentHome;