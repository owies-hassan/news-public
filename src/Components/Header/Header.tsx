import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';

import MenuIcon from '@mui/icons-material/Menu';
import {Category, Country, Source} from "../../Data/Data";
import SelectInput from "../SelectInput/SelectInput";
import SelectSearch from "../SelectInput/SelectSearch";
import './Header.css'
import {useNavigate} from "react-router-dom";
import { useState} from "react";
import {useSelector} from "react-redux";
import {State} from "../../TypeScript/TypeScript_Type";



const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const[styleFixed,setStylFixed]=useState('static')
    const history=useNavigate()
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const {country, category,search} = useSelector((state:State )=> state);

    document.onscroll=()=>{
        if (window.scrollY > 50) {
            setStylFixed('fixed-class')
        }
        else if (window.scrollY < 50) {
            setStylFixed('static')
        }
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const goBackToHome=()=>{
        history('/')
    }


    return (
        <AppBar className={styleFixed}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                      <p className='style_text' onClick={goBackToHome}> <span className='color-span'>News</span>Owies</p>


                    {/* mobile */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <SelectInput label='country' selectData={Country}/>
                            <SelectInput label='category' selectData={Category}/>
                            <SelectInput label='source' selectData={Source}/>
                        </Menu>
                    </Box>
                    {/*laptop*/}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <SelectInput label='country' selectData={Country}/>
                        <SelectInput label='category' selectData={Category}/>
                        <SelectInput label='source' selectData={Source}/>

                    </Box>
                    {/*search*/}
                    <Box >
                      <SelectSearch />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;