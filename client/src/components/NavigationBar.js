import { useContext, useState } from 'react';
import  AuthContext  from '../auth';
import { GlobalStoreContext } from '../store'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';

function NavigationBar() {
    const { store } = useContext(GlobalStoreContext);
    const { auth } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleSortMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    let homeButtonColor = "black";
    if(auth.currentPage === "homeScreen"){
        homeButtonColor = "green";
    }

    let allListButtonColor = "black";
    if(auth.currentPage === "allListScreen"){
        allListButtonColor = "green";
    }

    let userButtonColor = "black";
    if(auth.currentPage === "userScreen"){
        userButtonColor = "green";
    }

    let communityButtonColor = "black";
    if(auth.currentPage === "communityScreen"){
        communityButtonColor = "green";
    }

    function handleChangePage(event, screen){
        event.preventDefault();
        auth.changePage(screen);
    }

    let homeButton =
    <IconButton
        id = "home-button"
        size = "large"
        sx = {{mx:1}}
        onClick={(event)=>{handleChangePage(event, "homeScreen")}}
    >
        <HomeOutlinedIcon fontSize="large" style={{color: homeButtonColor}}/>
    </IconButton>;

    let allListButton =
    <IconButton
        id = "all-list-button"
        size = "large"
        sx = {{mx:1}}
        onClick={(event)=>{handleChangePage(event, "allListScreen")}}
    >
        <GroupsOutlinedIcon fontSize="large" style={{color: allListButtonColor}}/>
    </IconButton>;

    let userButton =
    <IconButton
        id = "user-button"
        size = "large"
        sx = {{mx:1}}
        onClick={(event)=>{handleChangePage(event, "userScreen")}}
    >
        <PersonOutlineOutlinedIcon fontSize="large" style={{color: userButtonColor}}/>
    </IconButton>;

    let communityButton =
    <IconButton
        id = "community-button"
        size = "large"
        sx = {{mx:1}}
        onClick={(event)=>{handleChangePage(event, "communityScreen")}}
    >
        <FunctionsOutlinedIcon fontSize="large" style={{color: communityButtonColor}}/>
    </IconButton>;

    let searchBar = 
    <TextField id="search-bar" label="Search" variant="filled" style={{width:500}} sx = {{mx:3}} />;

    const sortMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id="sort-menu"
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Publish Date (Newest)</MenuItem>
            <MenuItem onClick={handleMenuClose}>Publish Date (Oldest)</MenuItem>
            <MenuItem onClick={handleMenuClose}>Views</MenuItem>
            <MenuItem onClick={handleMenuClose}>Likes</MenuItem>
            <MenuItem onClick={handleMenuClose}>Dislikes</MenuItem>
        </Menu>
    );

    let sortText = 
        <Typography id = "sort-text">
            Sort By
        </Typography>;
    let sortButton = 
        <IconButton 
            id = "sort-button" 
            size = "large" 
            align='right'
            onClick = {handleSortMenuOpen}
        >
            <SortOutlinedIcon fontSize="large"/>
        </IconButton>;





        


    let navigationBar =
        <div id="navigation-bar">
            {homeButton}
            {allListButton}
            {userButton}
            {communityButton}
            {searchBar}
            {sortText}
            {sortButton}
            {sortMenu}
        </div>;
        

    return (navigationBar);

}

export default NavigationBar;