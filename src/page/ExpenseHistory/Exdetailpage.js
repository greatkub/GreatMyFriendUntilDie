import React from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Navbar2 from '../../Components/AllComponent/Navbar2';
import ExRoomdetail from '../Expens/DetailExpenseCompo/RoomExpenseCompo/ExRoomdetail.js';
import ExOtherdetail from '../Expens/DetailExpenseCompo/OtherExpenseCompo/ExOtherdetail.js';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';
import {BrowserRouter as Router, Route, Link, NavLink, Switch,useParams} from "react-router-dom";

import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '113px',
        backgroundColor: 'red',
    },
    floortext: {
        display: 'inline',
        marginRight: '73px',
        color: '#4A4A4A',
        fontSize: '13px',
        fontWeight: 'bold',
        position: 'relative',
    
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

    root: {
        minWidth: 275,
      },
    
      heder:{
        width: '100%',
        padding: theme.spacing(1),
        marginTop: '4%', 
      },
    
      Spacing:{
        margin: '5%',
      },
    
      
      Card:{
        width: '80%',
        padding: theme.spacing(3),
        margin: 'auto',
      },
    
      Cards:{
        width: '110%',
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
    
      Move:{
        marginTop: "-7%"
      }
    
}));

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
export default function Exdetailpage({isOpened}) {
    const classes = useStyles();
    const {id} = useParams();
    const [historydetails, setHistorydetails] = useState([])
    React.useEffect(() => {
        const fetchData = () =>{
         axios.get('/history/expense-history-detail/'+id)
         .then(r => 
          setHistorydetails(r.data))
        }
        fetchData()
      }, [id])
    return (
        <ScrollView>
            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div>
                    <div className={classes.frame}>
                        <Datetoday />
                        Expense History Detail
                    </div>
                    {/*<div>
                        <ExRoomdetail/>
                        <ExOtherdetail/>
                    </div>*/}
                     <div> 
            {historydetails.map((data)=>{
              return(  
            <Table  aria-label="caption table">
              <TableBody> 
                {data.room.map((num) => { 
                  return(
              <div className="container ">
                <Card className={classes.Cards} variant="outlined">
                  <Table >  
                      <TableHead >  
                        <h5 className={classes.heder}>Room {num.roomNumber}</h5>       
                       <TableRow >
                       <TableCell >Name</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Bed</TableCell>
                        <TableCell>Billed Period</TableCell>
                        <TableCell>Rent</TableCell>
                        <TableCell>Electricity</TableCell> 
                        <TableCell>Water</TableCell>   
                        <TableCell>Others</TableCell>  
                        <TableCell>Total</TableCell>     
                        <TableCell>Status</TableCell>                 
                        </TableRow>
                      </TableHead>   

                      {num.beds.map((b) => { 
                        return(
                          <TableBody>
                                <TableRow>
                                <TableCell>{b.userFirstName} {b.userLastName}</TableCell>
                                <TableCell></TableCell>
                                <TableCell>{b.bedName}</TableCell>
                                <TableCell>{num.billPeriod}</TableCell> 
                                <TableCell>{b.rent}</TableCell>       
                                <TableCell>{b.electricityPrice}</TableCell>       
                                <TableCell>{b.waterPrice}</TableCell>       
                                <TableCell>{b.otherPrice}</TableCell>       
                                <TableCell></TableCell>  
                                <TableCell>{b.statusInfo}</TableCell>             
                              </TableRow>      
                        </TableBody> 
                         )})}                
                      </Table>                       
                 </Card>                            
            </div>    
             )})}   
                                                               
        </TableBody>
        {data.room.map((num) => { 
                  return(
            <Table className={classes.Move}
             aria-label="caption table">
               
            <TableBody>
           
              <div className="container ">
              {num.other.map((O) => { 
              return( 
                <Card className={classes.Cards} variant="outlined">
                  <Table>
                  <TableHead >  
                          
                       <TableRow >
                       <TableCell >Electricity</TableCell>
                        <TableCell>Water</TableCell>
                        <TableCell>Internet</TableCell>

                                       
                        </TableRow>
                      </TableHead>   
  
                        <TableBody>
                          
                        </TableBody>    
                        </Table>             
                      </Card>  
                        )})}                                  
                    </div>                                                 
             </TableBody>
          </Table>
             )})}      
        </Table>
        )})}  
      </div>
                </div>
            </div>
        </ScrollView>

    )
}
