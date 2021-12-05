import { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import CommentCard from './CommentCard.js'


/*
    This is a card in our list of top 5 lists. It lets select
    a list for editing and it has controls for changing its 
    name or deleting it.
    
    @author McKilla Gorilla
*/
function ListCard(props) {
    const { store } = useContext(GlobalStoreContext);
    const [expandActive, setExpandActive] = useState(false);
    const [text, setText] = useState("");
    const { idNamePair } = props;

    function handleLoadList(event, id) {
        if (!event.target.disabled) {
            // CHANGE THE CURRENT LIST
            store.setCurrentList(id);
        }
    }

    function handleToggleExpand(event) {
        event.stopPropagation();
        toggleExpand();
    }

    function toggleExpand() {
        let newActive = !expandActive;
        //store.setIsListNameEditActive(newActive);
        setExpandActive(newActive);
    }

    async function handleDeleteList(event, id) {
        event.stopPropagation();
        store.markListForDeletion(id);
    }

    function handleLike(){

    }

    function handleDislike(){
        
    }

    // function handleKeyPress(event) {
    //     if (event.code === "Enter") {
    //         let id = event.target.id.substring("list-".length);
    //         store.changeListName(id, text);
    //         toggleEdit();
    //     }
    // }
    // function handleUpdateText(event) {
    //     setText(event.target.value);
    // }


    let cardElement = 
        <ListItem 
            sx={{ 
                width: '100%', 
                display: 'flex', 
                bgcolor:'#FFFFF1', 
                border: 1,
                borderRadius: 3, 
                borderColor: 'black',
                margin: 2
            }}
        >
            <Grid container spacing={1} columns={12}>
                <Grid item md={6} container direction="column" spacing={2} ml={1} mt={1}>
                    <Typography style={{fontSize: 20,  fontWeight: "bold"}} >
                        {idNamePair.name} 
                    </Typography>
                    <div>
                    <Typography display="inline" style={{fontSize: 15,  fontWeight: "bold"}} mt={1}>
                        By: &nbsp;
                    </Typography>
                    <Typography display="inline" style={{fontSize: 15,  fontWeight: "bold", color:"blue", textDecorationLine:"underline",}} mt={1}>
                        {idNamePair.ownerName} 
                    </Typography>
                    </div>
                </Grid>
                <Grid item md={1} mt={2}>
                    <IconButton id = "thumb-up-button" size = "small" sx = {{ml:4}}>
                        <ThumbUpOutlinedIcon fontSize="large"/>
                    </IconButton>
                </Grid>
                <Grid item md={1} mt={3}>
                    <Typography style={{fontSize: 20,  fontWeight: "bold"}} >
                        {idNamePair.like}
                    </Typography>
                </Grid>
                <Grid item md={1} mt={2}>
                    <IconButton id = "thumb-down-button" size = "small" sx = {{ml:4}}>
                        <ThumbDownOutlinedIcon fontSize="large"/>
                    </IconButton>
                </Grid>
                <Grid item md={1} mt={3}>
                    <Typography style={{fontSize: 20,  fontWeight: "bold"}} >
                        {idNamePair.dislike}
                    </Typography>
                </Grid>
                <Grid item md={1} mt={2}>
                    <IconButton 
                        id = "delete-button" 
                        size = "small" 
                        sx = {{ml:10}} 
                        onClick={(event) => {handleDeleteList(event, idNamePair._id)}}
                    >
                        <DeleteOutlinedIcon fontSize="large"/>
                    </IconButton>
                </Grid>


                <Grid item md={1} ml={1}>
                    <Typography 
                        style={{fontSize: 15,  fontWeight: "bold", color:"red", textDecorationLine:"underline", cursor:'pointer'}} 
                        onClick={(event) => {handleLoadList(event, idNamePair._id)}}
                    >
                            Edit
                    </Typography>
                </Grid>
                <Grid item md={5}></Grid>
                <Grid item md={1}  ml={5}>
                    <Typography style={{fontSize: 20,  fontWeight: "bold"}} ml={2} >
                        Views: 
                    </Typography>
                </Grid>
                <Grid item md={1} >
                    <Typography style={{fontSize: 20,  fontWeight: "bold", color:"red"}} >
                        {idNamePair.view}
                    </Typography>
                </Grid>
                <Grid item md={2}></Grid>

                <Grid item md={1} mt={2}>
                    <IconButton 
                        id = "expand-more-button" 
                        size = "small" 
                        sx = {{ml:7}}
                        onClick = {handleToggleExpand}
                    >
                        <ExpandMoreIcon fontSize="large"/>
                    </IconButton>
                </Grid>
            </Grid>
        </ListItem>

        if(expandActive){
            cardElement = 
            <ListItem 
                sx={{ 
                    width: '100%', 
                    display: 'flex', 
                    bgcolor:'#D4D4F5', 
                    border: 1,
                    borderRadius: 3, 
                    borderColor: 'black',
                    margin: 2
                }}
            >
                <Grid container spacing={1} columns={12}>
                    <Grid item md={6} container direction="column" spacing={2} ml={1} mt={1}>
                        <Typography style={{fontSize: 20,  fontWeight: "bold"}} >
                            {idNamePair.name} 
                        </Typography>
                        <div>
                        <Typography display="inline" style={{fontSize: 15,  fontWeight: "bold"}} mt={1}>
                            By: &nbsp;
                        </Typography>
                        <Typography display="inline" style={{fontSize: 15,  fontWeight: "bold", color:"blue", textDecorationLine:"underline",}} mt={1}>
                            {idNamePair.ownerName} 
                        </Typography>
                        </div>
                    </Grid>
                    <Grid item md={1} mt={2}>
                        <IconButton id = "thumb-up-button" size = "small" sx = {{ml:5}}>
                            <ThumbUpOutlinedIcon fontSize="large"/>
                        </IconButton>
                    </Grid>
                    <Grid item md={1} mt={3}>
                        <Typography style={{fontSize: 20,  fontWeight: "bold"}} >
                            {idNamePair.like}
                        </Typography>
                    </Grid>
                    <Grid item md={1} mt={2}>
                        <IconButton id = "thumb-down-button" size = "small" sx = {{ml:5}}>
                            <ThumbDownOutlinedIcon fontSize="large"/>
                        </IconButton>
                    </Grid>
                    <Grid item md={1} mt={3}>
                        <Typography style={{fontSize: 20,  fontWeight: "bold"}} >
                            {idNamePair.dislike}
                        </Typography>
                    </Grid>
                    <Grid item md={1} mt={2}>
                        <IconButton 
                            id = "delete-button" 
                            size = "small" 
                            sx = {{ml:10}} 
                            onClick={(event) => {handleDeleteList(event, idNamePair._id)}}
                        >
                            <DeleteOutlinedIcon fontSize="large"/>
                        </IconButton>
                    </Grid>

                    <Grid item md={6}>
                        <Box sx={{bgcolor:'#2C2F70', borderRadius:2}}>
                            <Typography ml={1} my={1} style={{fontSize: 25,  fontWeight: "bold", color:"#D4AF37"}}>1.{idNamePair.items[0]}</Typography>
                            <Typography ml={1} my={1} style={{fontSize: 25,  fontWeight: "bold", color:"#D4AF37"}}>2.{idNamePair.items[1]}</Typography>
                            <Typography ml={1} my={1} style={{fontSize: 25,  fontWeight: "bold", color:"#D4AF37"}}>3.{idNamePair.items[2]}</Typography>
                            <Typography ml={1} my={1} style={{fontSize: 25,  fontWeight: "bold", color:"#D4AF37"}}>3.{idNamePair.items[3]}</Typography>
                            <Typography ml={1} my={1} style={{fontSize: 25,  fontWeight: "bold", color:"#D4AF37"}}>4.{idNamePair.items[4]}</Typography>
                        </Box>
                    </Grid>

                    <Grid item md={6}>
                        <div id="comment-list">
                            <List>
                            {
                                idNamePair.comments.map((comment) => (
                                    <CommentCard
                                        user={comment[0]}
                                        comment={comment[1]}
                                        selected={false}
                                    />
                                ))
                            }       
                            </List>
                        </div>
                        <TextField
                            fullWidth
                            id="add-comment-field"
                            name="add-comment-field"
                            label="Add Comment"
                            size="small"
                            autoFocus
                            inputProps = {{style:{fontSize:20, fontWeight: "bold"}}}
                            sx = {{width: '95%', bottom: '7%', borderRadius:3, bgcolor:'#FFFFFF'}}
                        />
                    </Grid>

                    <Grid item md={1} ml={1}>
                    <Typography 
                        style={{fontSize: 15,  fontWeight: "bold", color:"red", textDecorationLine:"underline", cursor:'pointer'}} 
                        onClick={(event) => {handleLoadList(event, idNamePair._id)}}
                    >
                            Edit
                    </Typography>
                </Grid>
                <Grid item md={5}></Grid>
                <Grid item md={1}  ml={5}>
                    <Typography style={{fontSize: 20,  fontWeight: "bold"}} ml={2} >
                        Views: 
                    </Typography>
                </Grid>
                <Grid item md={1} >
                    <Typography style={{fontSize: 20,  fontWeight: "bold", color:"red"}} >
                        {idNamePair.view}
                    </Typography>
                </Grid>
                <Grid item md={2}></Grid>
                    <Grid item md={1} mt={2}>
                    <IconButton 
                        id = "expand-less-button" 
                        size = "small" 
                        sx = {{ml:7}}
                        onClick = {handleToggleExpand}
                    >
                        <ExpandLessIcon fontSize="large"/>
                    </IconButton>
                </Grid>
                </Grid>
            </ListItem>
        }
    // let cardElement =
    //     <ListItem
    //         disabled={store.isListNameEditActive}
    //         id={idNamePair._id}
    //         key={idNamePair._id}
    //         sx={{ marginTop: '15px', display: 'flex', p: 1 }}
    //         button
    //         onClick={(event) => {
    //             handleLoadList(event, idNamePair._id)
    //         }
    //         }
    //         style={{
    //             fontSize: '48pt',
    //             width: '100%'
    //         }}
    //     >
    //             <Box sx={{ p: 1, flexGrow: 1 }}>{idNamePair.name}</Box>
    //             <Box sx={{ p: 1 }}>
    //                 <IconButton 
    //                 onClick={handleToggleEdit} 
    //                 aria-label='edit' 
    //                 disabled={store.isListNameEditActive}>
    //                     <EditIcon style={{fontSize:'48pt'}} />
    //                 </IconButton>
    //             </Box>
    //             <Box sx={{ p: 1 }}>
    //                 <IconButton onClick={(event) => {
    //                     handleDeleteList(event, idNamePair._id)
    //                 }} aria-label='delete' disabled={store.isListNameEditActive}>
    //                     <DeleteIcon style={{fontSize:'48pt'}} />
    //                 </IconButton>
    //             </Box>
    //     </ListItem>

    // if (editActive) {
    //     cardElement =
    //         <TextField
    //             margin="normal"
    //             required
    //             fullWidth
    //             id={"list-" + idNamePair._id}
    //             label="Top 5 List Name"
    //             name="name"
    //             autoComplete="Top 5 List Name"
    //             className='list-card'
    //             onKeyPress={handleKeyPress}
    //             onChange={handleUpdateText}
    //             defaultValue={idNamePair.name}
    //             inputProps={{style: {fontSize: 48}}}
    //             InputLabelProps={{style: {fontSize: 24}}}
    //             autoFocus
    //         />
    // }
    return (
        cardElement
    );
}

export default ListCard;