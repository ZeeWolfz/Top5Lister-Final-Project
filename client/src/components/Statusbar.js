import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { Typography } from '@mui/material'
import  AuthContext  from '../auth'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

/*
    Our Status bar React component goes at the bottom of our UI.
    
    @author McKilla Gorilla
*/
function Statusbar() {
    const { store } = useContext(GlobalStoreContext);
    const { auth } = useContext(AuthContext);
    let text ="Your Lists";
    if (store.currentList){
        text = store.currentList.name;
    }

    function handleCreateNewList() {
        store.createNewList();
    }

    let addButton = 
        <IconButton
            id = "add-list-button"
            size = "large"
            onClick = {handleCreateNewList}
        >
            <AddIcon fontSize="large"/>
        </IconButton>;

    

    return (
        <div id="top5-statusbar"> 
        {addButton}
        <Typography variant="h4">{text}</Typography> 
        </div>
    );
}

export default Statusbar;