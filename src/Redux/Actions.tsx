



import {stateRedux} from "./Type";


const updateCountry=(data:string)=>{
    return{
        type:stateRedux.COUNTRY,
        data
    }
}
const updateCategory=(data:string)=>{
    return{
        type:stateRedux.CATEGORY,
        data
    }
}
const updateSource=(data:string)=>{
    return{
        type:stateRedux.SOURCE,
        data
    }

}
const updateSearch=(data:string|null)=> {
    return {
        type: stateRedux.SEARCH,
        data
    }
}
export {updateCategory,updateCountry,updateSource,updateSearch}