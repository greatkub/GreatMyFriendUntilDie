import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import Feecard from "../../Components/Feeset/Feecard";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import TextField from '@material-ui/core/TextField';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import axios from 'axios';
import { ScrollView } from 'react-native';
import Savebtn from '../../Components/Button/Save'
import { BrowserRouter as Rounter, Route, Link, NavLink, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },

  heder:{
    width: '100%',
    padding: theme.spacing(1),
    marginTop: '-2%', 
  },

  Card:{
    width: '80%',
    padding: theme.spacing(3),
    margin: 'auto',
  },

  Cards:{
    width: '100%',
    padding: theme.spacing(2),
    margin: 'auto',
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },

  title: {
    fontSize: 14,
  },

  pos: {
    marginBottom: 12,
  },

  Btn:{
    marginLeft: "92%",
    marginTop: "-6%",
  },
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 80,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: '100%',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    width: "30%",
    top: 10,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  buttonsubmit: {
    width: "407px",
    height: "42.8px",
    position: "absolute",
    top: 620,
    left: "35%"
},

}));

export default function (props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [allroom, setAllroom] = useState([]);

  useEffect(() => {
    axios('/building/rooms/3')
        .then(response => {
            console.log("hi" + response.data)
            setAllroom(response.data);
        })
        .catch(error => {
            console.log('Error getting fake data: ' + error);
        })
}, []);

  return (

      <div className="container ">
        <div>
           <ScrollView>
          <div style={{ width: '100%', height: '550px' }}>
        
        {allroom.map((set)=>{
                return(
        <Card className={classes.Card} variant="outlined">
            <Table  aria-label="caption table">
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.heder}>
                         <h4>Rooms</h4>     
                        </TableCell>
                    </TableRow>
                </TableHead>  
            <TableBody>
            
            <div className="container">
            <h4>{set.building}</h4>
              <Card className={classes.Cards} variant="outlined">
                   
                <Table>
                    <TableHead >  
                      <h5 className={classes.heder}>Floor {set.floorName}</h5>    
                  
                     <TableRow>
                        <TableCell>Rooms</TableCell>
                        <TableCell align="center">Edit Name Rooms</TableCell>
                        <TableCell>Delete</TableCell>         
                      </TableRow>
                         
                    </TableHead> 
                    {set.room.map((r)=>{
                      return(
                    <TableBody>
                        <TableRow >
                          <TableCell align="left">{r.roomNumber}</TableCell> 
                            <TableCell align="center">
                                <TextField 
                                    size="small" 
                                    variant="outlined"             
                                />
                            </TableCell>
                          <TableCell align="left">
                            <Button>Delete </Button> 
                         </TableCell>
                        </TableRow>   
                </TableBody>   
                      )})}            
                </Table>  
              </Card>  
            </div>
      </TableBody>
    </Table>     
    </Card>   
     )})}       
    </div>
    </ScrollView>
   <div> 
</div>
</div>

                <Link to="/initial">
                      <Button
                        className={classes.buttonsubmit}
                        variant="contained" color="primary" disableElevation
                        style={{ backgroundColor: '#485D84' }} >
                        Save
                    </Button>
                </Link>         

</div>
    
    
    
  );
 

}



