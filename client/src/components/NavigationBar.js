import { useContext, useState } from 'react';
import  AuthContext  from '../auth';
import { GlobalStoreContext } from '../store'
import { styled } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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

    function handleChangeScreen(event, screen){
        event.preventDefault();
        auth.changeScreen(screen, store);
        store.loadIdNamePairs({screen:screen})
    }

    function handleSearch(event){
        if(event.code === "Enter"){
            store.searchList(event.target.value);
        }
    }

    function handleSortPublishDateNewest(){
        store.sortList("PublishDateNewest");
        handleMenuClose();
        console.log(store.sortCriteria);
    }

    function handleSortPublishDateOldest(){
        store.sortList("PublishDateOldest");
        handleMenuClose();
        console.log(store.sortCriteria);
    }

    function handleSortViews(){
        store.sortList("Views");
        handleMenuClose();
        console.log(store.sortCriteria);
    }

    function handleSortLikes(){
        store.sortList("Likes");
        handleMenuClose();
        console.log(store.sortCriteria);
    }

    function handleSortDisikes(){
        store.sortList("Dislikes");
        handleMenuClose();
        console.log(store.sortCriteria);
    }


    let homeButton =
    <Button
        disabled = {store.currentList}
        id = "home-button"
        sx = {{mx:1}}
        onClick={(event)=>{handleChangeScreen(event, "homeScreen")}}
    >
        <HomeOutlinedIcon 
        style={(auth.currentScreen === "homeScreen")?{borderStyle:"solid", borderColor:"green", color: "black", fontSize:35}:{fontSize:35, color: "black"}}
        />
    </Button>;

    let allListButton =
    <Button
        id = "all-list-button"
        sx = {{mx:1}}
        onClick={(event)=>{handleChangeScreen(event, "allListScreen")}}
    >
        <GroupsOutlinedIcon 
        style={(auth.currentScreen === "allListScreen")?{borderStyle:"solid", borderColor:"green", color: "black", fontSize:35}:{fontSize:35, color: "black"}}
        />
    </Button>;

    let userButton =
    <Button
        id = "user-button"
        sx = {{mx:1}}
        onClick={(event)=>{handleChangeScreen(event, "userScreen")}}
    >
        <PersonOutlineOutlinedIcon 
        style={(auth.currentScreen === "userScreen")?{borderStyle:"solid", borderColor:"green", color: "black", fontSize:35}:{fontSize:35, color: "black"}}
        />
    </Button>;

    let communityButton =
    <Button
        id = "community-button"
        sx = {{mx:1}}
        onClick={(event)=>{handleChangeScreen(event, "communityScreen")}}
    >
        <FunctionsOutlinedIcon 
        style={(auth.currentScreen === "communityScreen")?{borderStyle:"solid", borderColor:"green", color: "black", fontSize:35}:{fontSize:35, color: "black"}}
        />
    </Button>;

    let searchBar = 
    <TextField id="search-bar" label="Search" variant="filled" style={{width:500}} sx = {{mx:3}} onKeyPress={handleSearch}/>;

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
            <MenuItem onClick={handleSortPublishDateNewest}>Publish Date (Newest)</MenuItem>
            <MenuItem onClick={handleSortPublishDateOldest}>Publish Date (Oldest)</MenuItem>
            <MenuItem onClick={handleSortViews}>Views</MenuItem>
            <MenuItem onClick={handleSortLikes}>Likes</MenuItem>
            <MenuItem onClick={handleSortDisikes}>Dislikes</MenuItem>
        </Menu>
    );

    let sortText = 
        <Typography id = "sort-text" style={{fontSize: 20, fontWeight: "bold", mt:3}}>
            Sort By
        </Typography>;
    let sortButton = 
        <Button 
            id = "sort-button" 
            sx = {{ml:23}}
            onClick = {handleSortMenuOpen}
        >
            <SortOutlinedIcon 
            style={{fontSize:35, color: "black"}}
            />
        </Button>;





        


    let navigationBar =
        <Box id="navigation-bar" disabled={store.currentList}>
            {homeButton}
            {allListButton}
            {userButton}
            {communityButton}
            {searchBar}
            {sortText}
            {sortButton}
            {sortMenu}
        </Box>;
        

    return (navigationBar);

}

export default NavigationBar;