import React, {useEffect, useState} from 'react';
import SearchIcon from "@mui/icons-material/Search";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import useHook from "../../Hooks/useHook";
import {Box, TextField} from "@mui/material";
import './SelectInput.css'
import {useDispatch, useSelector} from "react-redux";
import {updateSearch} from "../../Redux/Actions";
import {State} from "../../TypeScript/TypeScript_Type";
function SelectSearch() {

const dispatch=useDispatch()
const handleSearch=(e:string)=>{

    dispatch(updateSearch(e))
}
    const {search} = useSelector((state:State )=> state);

    return (
      <Box className='search-input' sx={{ flexGrow: 0 }}>
          <TextField
              className='test'
              label="search"
              placeholder="search..."
              multiline
              variant="standard"
              value={search}
              onChange={(e)=>handleSearch(e.target.value)}
          />
      </Box>
    );
}

export default SelectSearch;