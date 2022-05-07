



import React from 'react';
import {imageNotFound} from "../../Data/Data";
import {useNavigate} from "react-router-dom";
import {PropsHeadLine} from "../../TypeScript/TypeScript_Type";
import './ContentDetails.css'


type props=PropsHeadLine&{
    style?:string
}
const ContentDetails = ({Key,content,description,publishedAt,title,sourceNews,urlToImage,style}:props) => {

        const history=useNavigate()

        const showDetails=()=>{
            history(`/details/${title}`)
        }
    return (
        <div key={Math.random()*1292} className={style} onClick={showDetails}>
            <h1 >{title}</h1>
            <div className={`img_${style}`}>
                <img src={urlToImage?urlToImage:imageNotFound}/>
                <div className='content'>
                    <p>{description}{content}</p>
                </div>
            </div>

            <span><span>source :</span>{sourceNews}</span>
        </div>
    );
};

export default ContentDetails;