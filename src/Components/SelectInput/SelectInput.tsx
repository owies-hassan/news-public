import React, {useState} from 'react';
import {MenuItem, TextField} from "@mui/material";
import {propsSelect} from "../../TypeScript/TypeScript_Type";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './SelectInput.css'
import {useDispatch} from "react-redux";
import {updateCategory, updateCountry, updateSource} from "../../Redux/Actions";


function SelectInput({label,selectData}:propsSelect) {
    const[arrowSelect,setArrowSelect]=useState(false)
    const [val,setVal]=useState('')
    const dispatch=useDispatch()




    const changeArrowSelect=()=>{
        setArrowSelect(!arrowSelect)
    }
    const changeOption=(e:string)=>{
        setVal(e)
        switch (label){
            case 'country':
                return(
                    dispatch(updateCountry(e))
                )
            case 'category':
                return(
                    dispatch(updateCategory(e))
                )
            case 'source':(
                dispatch(updateSource(e))
            )
        }
        return false;
    }
    return (

       <div className='select-data'>
           <select
           onClick={changeArrowSelect}
           onChange={(e)=>changeOption(e.target.value)}

           >
               {label}
               {selectData.map(item=>{
                   return(
                       <option value={item.val}   key={item.name}>
                           {item.name}
                       </option>
                   )
               })}
           </select>
           {arrowSelect?<KeyboardArrowDownIcon/>: <KeyboardArrowUpIcon/>}
       </div>

    );
}

export default SelectInput;


// <TextField
//     select
//     label="category"
//     value={category}
//     onChange={(e)=>setCategory(e.target.value)}
// >
//     {Categories.map(item=>{
//         return(
//             <MenuItem key={item.value} value={item.value}>
//                 {item.category}
//             </MenuItem>
//         )
//     })}
//
// </TextField>