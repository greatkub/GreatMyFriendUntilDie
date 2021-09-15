import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import TextField from '@material-ui/core/TextField';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import { ScrollView } from 'react-native';

import axios from 'axios';
import { BrowserRouter as Rounter, Route, Link, NavLink, Switch } from 'react-router-dom';

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
    width: '60%',
    padding: theme.spacing(3),
    margin: 'auto',
  },

  Cards:{
    width: '100%',
    padding: theme.spacing(1),
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
  }
}));

export default function (props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [allroom, setAllroom] = useState([]);
 
useEffect(() => {
    axios('/building/rooms/1')
        .then(response => {
            console.log("hi" + response.data)
            setAllroom(response.data);
        })
        .catch(error => {
            console.log('Error getting fake data: ' + error);
        })
}, []);
console.log(allroom)

/*const [stroom, setStroom] = useState([])
  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('/building/rooms/1')
    .then(r => {  
      
    setStroom(r.data)
     for (const data in r.data) {
      for (const floor in data){
        for (const room in floor.room)    
        {
          let Initial ={
              id: "1",
              roomNumber: "1"  
              }
              stroom.push(Calculate)
          }  
        }
       }    
    })
    
  };
  fetchData()
}, [])*/


function handlerChangeJSOn() {
  allroom[0].buildingName = "Laila"
  setKeepstate(allroom[3].floors[0].rooms)
  console.log(keepstate)
}


const [keepstate , setKeepstate] = useState([])

const Expensesave = event => {
event.preventDefault();
axios.post("/rentingtransaction/electricity-water-expenses", 

  keepstate

).then((response)=>{
  console.log(response);
})
};



  return (
    <div className="container">
    <div>
    <ScrollView>
        <div style={{ width: '100%', height: '650px' }}>
        {allroom.map((set)=>{
                return(
        <Card className={classes.Card} variant="outlined">
            <Table  aria-label="caption table">
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.heder}>
                         <h4>Initial Expense</h4>  
                         <br/>
                         <TextField
                         type ="date"
                            size="small" 
                                    variant="outlined"             
                                />
                        </TableCell>
                    </TableRow>
                </TableHead>  
            <TableBody>
            
            <div className="container">
            <h4>{set.building}</h4>
              <Card className={classes.Cards} variant="outlined">
                   <h5 className={classes.heder}>{set.FloorName}</h5>  
                <Table>
                    <TableHead >  
                      <h5 className={classes.heder}>Floor{set.FloorNumber}</h5>    
                  
                     <TableRow>
                        <TableCell>Rooms</TableCell>
                        <TableCell align="center">Electricity Reading</TableCell>

                        <TableCell align="center">Water Reading</TableCell>         
                      </TableRow>
                         
                    </TableHead> 
                    {set.room.map((r)=>{
                      return(
                    <TableBody>
                        <TableRow>
                          <TableCell align="left">{r.roomNumber}</TableCell> 
                            <TableCell align="center">
                                <input
                                    size="small" 
                                    variant="outlined"             
                                />
                            </TableCell>

                           <TableCell align="center">
                                <input
                                    size="small" 
                                    variant="outlined"             
                                />
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
    </div>
    
    <div style={{ position: 'absolute', width: '100%', height: 200, top: 590 }}>
    <Link to='/feetype_sp' style={{ textDecoration: "none" }}>
      <Button style={{ backgroundColor: "#485D84", 
              width: 406, height: 42.87, color: "#FFFFFF", 
              fontSize: 21 ,zIndex: 1, 
              position: 'absolute', left: 540, top: 40}}>
        SAVE
    </Button>
    </Link >
      <div 
      style={{backgroundColor: '#385CA8',
       opacity: 0.5,width: "100%", height: 200, position: 'relative'
      }}>
      </div>
    </div>
  </div>        
  );
}