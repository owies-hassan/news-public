


import React from 'react';
import {Box} from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import {PropsHeadLine} from "../../TypeScript/TypeScript_Type";
import 'swiper/swiper.min.css'
import ContentHome from "../ContentHome/ContentHome";
import './SwiperDetails.css'

type props={
    response:[PropsHeadLine] |undefined
}

const SwiperDetails = ({response}:props) => {
    return (
        <Box className='main-content-swiper'>
            <Swiper
                spaceBetween={40}
                slidesPerView={4}
                loop={true}
            >
                {response?.map(item=>{
                    return(
                        <SwiperSlide key={Math.random()}>
                            <ContentHome
                                Key={item?.source?.id}
                                content={item.content}
                                description={item.description}
                                publishedAt={item.publishedAt}
                                title={item.title}
                                urlToImage={item.urlToImage}
                                sourceNews={item.source?.name}
                                style='style_swiper'
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </Box>
    );
};

export default SwiperDetails;