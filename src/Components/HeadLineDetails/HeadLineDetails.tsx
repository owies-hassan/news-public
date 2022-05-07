


import React from 'react';
import ContentHome from "../ContentHome/ContentHome";
import {PropsHeadLine} from "../../TypeScript/TypeScript_Type";
import './HeadLineDetails.css'
import {Container} from "@mui/material";
import ContentDetails from "../ContentDetails/ContentDetails";
type props={
    response:[PropsHeadLine] |undefined
}
const HeadLineDetails=({response}:props)=> {
    return (
      <div className='content-app-details'>
          <Container>
              {response?.map(item=>{
                  return(
                      <ContentDetails
                          Key={item?.source?.id}
                          content={item.content}
                          description={item.description}
                          publishedAt={item.publishedAt}
                          title={item.title}
                          urlToImage={item.urlToImage}
                          sourceNews={item.source?.name}
                          style='style_details'
                      />
                  )
              })}
          </Container>
      </div>
    );
}

export default HeadLineDetails;