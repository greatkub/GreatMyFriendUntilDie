import React,{useState, useEffect} from 'react'
import {lighten, makeStyles, useTheme } from '@material-ui/core/styles';
import { ScrollView } from 'react-native';
import Datetoday from '../../Components/AllComponent/Datetoday';
import { Paper } from '@material-ui/core';
import moment from 'moment';
import Petitiontable from './Petitioncompo/Petitiontable';
import { Divider,IconButton } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from "@material-ui/core/Tooltip";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Card from '@material-ui/core/Card';
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import NumberFormat from 'react-number-format';

import {BrowserRouter as Router, Route, Link, NavLink, Switch, useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '232px',
        backgroundColor: 'red',
    },
    scrollspace: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 110,
        transition: 'all 0.5s ease'
    },
    scrollspace36: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 36,
        transition: 'all 0.5s ease'

    },
    mainfame: {
        width: '1163px',
        height: '567px',
        backgroundColor: 'blue',
        position: 'relative'
    },
    miniXfame: {
        width: '352px',
        height: '147px',
        backgroundColor: '#ffffff',
        position: 'relative',
        backgroundColor: '#ffffff'
    },
    Xfame: {
        width: '731px',
        height: '395px'
    }
    ,
    Yfame: {
        width: "407px",
        height: "567px",
        position: "absolute",
        backgroundColor: "#ffffff",
        right: 0
    },
   
    
    circleborder: {
        width: 18,
        height: 18,
        borderRadius: '9px',
        marginRight: 20,
        marginLeft: 40
    },
     papercard: {
        width: '1163px',
        boxShadow: "0px 0px 0px #E8E8E8",
        minHeight: '233px',
        //   margin: 'auto',
        marginLeft: 0,
        marginBottom: "16px",
        //   backgroundColor:'green',
        position: 'relative',
        borderRadius: 5

    },
    headfloor: {
        // display: 'block',
        //color: '#4A4A4A',
        fontWeight: 'bold',
        fontSize: '16px',
        posiotion: 'absolute',
        marginLeft: '45px',
        paddingTop: '14px'
    },
    headfloor: {
        // display: 'block',
        color: '#4A4A4A',
        fontWeight: 'bold',
        fontSize: '16px',
        posiotion: 'absolute',
        marginLeft: '45px',
        paddingTop: '14px'
    },
    textDash: {
        fontSize: 19,
        color: "#4A4A4A",
        fontWeight: 'bold',
        //marginRight:"15%"
    },
    textRoom: {
        fontSize: 26,
        color: "#4A4A4A",
        fontWeight: 'bold'
    },
    normaltext: {
        fontSize: 16,
        color: "#4A4A4A",
    },
}));

const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85)
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark
          },
    title: {
      flex: "1 1 100%"
    }
  }));

  const DeletpopUp = (props) => {
    const classes = useToolbarStyles();
    const {numSelected,deleteUserHandler,solveStatus} = props
    return (
      <Toolbar>
        {numSelected > 0 ? (
          <Typography
            className={classes.title}
            //color="inherit"
            //variant="subtitle1"
            //component="div"
          >
            {numSelected} Selected All
          </Typography>
        ) : (
        <Typography
            className={classes.Move}
            //variant="h6"
            id="tableTitle"
            component="div"
          >
            Select All
          </Typography>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={solveStatus}>
              <EmojiObjectsIcon/>
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip >
            <IconButton></IconButton>
          </Tooltip>
        )}
  
          {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={deleteUserHandler}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip >
            <IconButton></IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

  export default function Petitionpage({ isOpened }) {
    const classes = useStyles();
    const [allroom, setAllroom] = useState([])
    const [selected, setSelected] = React.useState([]);
    const [search,  setSearch ] = useState([]);
    //const [status, setStatus] = useState(true)

    const {id} = useParams();
    useEffect(() => {
    axios("/petition/petitions/"+id)
        .then(response => {
            console.log("hi" + response.data)
            setAllroom(response.data);
        })
        .catch(error => {
            console.log('Error getting fake data: ' + error);
            })
          
  }, [id]);
  
  const PetitionDelete=(id) =>{
    axios.post(`/petition/delete-petition/${id}`)
    .then(() => {
      setAllroom(
        allroom.filter((row) => {
          return row.id != id;
        })
      );
    });
  };

  const Petitionstatus =() => {
    axios.post(`/petition/edit-petition-list`, {
      "PetitionIds": selected,
      "Status": true
    
    }).then((response)=>{
      window.location.href = '/petitionpage'
      console.log(response);
    })
  };

   
    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
      if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
      );
    }  
    setSelected(newSelected);
  };
    console.log(selected)
  
    const isSelected = (name) => selected.indexOf(name) !== -1;
      return (
          <div style={{ width: '100%' }}>
              <ScrollView>
              <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                  <div>
                      <div className={classes.frame}>
                          <Datetoday />                        
                          Petition Details
                      </div>

                      <div>
                      <Paper className={classes.papercard}>

                      <div className="container "> 
                    {allroom.map((row)=>{
                return(
      <Card className={classes.Card} variant="outlined">
        {row.petition.map((x)=>{
          return(
          <Table 
              aria-label="caption table">
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.heder}>
                         <h4> {x.title} </h4>     
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="delete">
                                <EmojiObjectsIcon/>
                            </IconButton>  
                        </TableCell>
                        <TableCell>
                           <IconButton aria-label="delete">
                              <DeleteIcon
                                //onClick={()=>{PetitionNote(row.id)}}
                                />
                            </IconButton>  
                        </TableCell>
                    </TableRow>     
                    <TableRow>
                        <TableCell className={classes.heder}>
                            <h6>{x.userFirstName}</h6>    
                            <h6>{x.roomNumber}</h6>    
                        </TableCell> 
                        <TableCell className={classes.heder}>
                            {x.petitionDate}
                        </TableCell>
                        <TableCell >
                            Status
                        </TableCell> 
                    </TableRow>
                </TableHead>  
            <TableBody>
      
            <div className="container ">
                <Table>
                   <TableRow className={classes.textDash}>
                      {x.description} 
                    </TableRow>    
                    <TableRow>    
                    {x.image}    
                    </TableRow>      
                </Table>  
            </div>
      </TableBody>
    </Table>     
     )})}           
    </Card> 
    )})}  
</div> 

</Paper>                        
        </div>
                  </div>
              </div>
          </ScrollView>
      </div>
      )
  }
  
  /*<Paper className={classes.papercard}>
                         
                          <div className="container "> 
                        {allroom.map((row)=>{
                        return(
                        <Card className={classes.Card} variant="outlined">
                            {row.petition.map((x)=>{
                                return(
                         <Table 
                            aria-label="caption table">
                             <TableHead >
                                <TableRow>
                                    <TableCell className={classes.heder}>
                                        <h6> {x.title} </h6>     
                                    </TableCell>
                                    <TableCell>
                                        <IconButton aria-label="delete">
                                            <EmojiObjectsIcon   
                                                onClick={()=>{Petitionstatus(row.id)}}
                                            />
                                         </IconButton>  
                                    </TableCell>
                                     <TableCell>
                           <IconButton aria-label="delete">
                                <DeleteIcon
                                onClick={()=>{PetitionDelete(row.id)}}
                                />
                            </IconButton>  
                        </TableCell>
                    </TableRow>     
                    <TableRow>
                        <TableCell className={classes.heder}>
                           {x.userFirstName}   
                            {x.roomNumber}   
                        </TableCell> 
                        <TableCell className={classes.heder}> 
                            {moment(x.petitionDate).format("L")} 
                        </TableCell>
                        <TableCell >
                            Status
                        </TableCell> 
                    </TableRow>
                </TableHead>  
            <TableBody>
      
            <div className="container ">
                <Table>
                   <TableRow >
                     <p>{x.description} </p>
                    </TableRow>    
                    <TableRow>    
                        {x.image}    
                    </TableRow>      
                </Table>  
            </div>
      </TableBody>
    </Table>     
     )})}           
    </Card> 
    )})}  
</div> 
                  
</Paper>*/