
//for reduces
import Reducers from "../Redux/Reducers";
import {stateRedux} from "../Redux/Type";

export interface stateTsc{
    country:string,
    category:string,
    source?:string
    search:string
}


export type actionTsc =
    |{type:stateRedux.COUNTRY,data:string}
    |{type:stateRedux.CATEGORY,data:string}
    |{type:stateRedux.SOURCE,data:string}
    |{type:stateRedux.SEARCH,data:string}


export type State=ReturnType<typeof Reducers>

//another components
export interface propsSelect{
    label:string
    selectData: { name: string, val?: string }[]
}

export type PropsHeadLine={
    Key:string|null|number|undefined
    content:string,
    description:string,
    publishedAt:string,
    title:string,
    urlToImage: string;
    sourceNews:string|undefined
    source?:{name:string,id:string|null|number} //not working error:missing source
}