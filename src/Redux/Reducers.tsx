import {actionTsc, stateTsc} from "../TypeScript/TypeScript_Type";
import {stateRedux} from "./Type";

const initialState={
  country:'us',
    category:'business',
    source:'',
    search:''
}



const Reducers=(state:stateTsc=initialState,action:actionTsc)=>{
    switch (action.type){
        case stateRedux.COUNTRY:
            return {
                ...state,
                country:action.data
            }
        case stateRedux.CATEGORY:
            return {
                ...state,
                category:action.data
            }
        case stateRedux.SOURCE:
            return {
                ...state,
                source:action.data
            }
        case stateRedux.SEARCH:
            return {
                ...state,
                search:action.data
            }
    }
    return state;
}

export default Reducers;