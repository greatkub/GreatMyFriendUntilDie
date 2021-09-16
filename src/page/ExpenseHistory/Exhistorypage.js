import React from 'react'
//import Billfloorcard from './Billpagecompo/Billfloorcard'
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Navbar2 from '../../Components/AllComponent/Navbar2';
import Savebtn from "../../Components/Button/Save";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import axios from 'axios';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
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

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '232px',
        //backgroundColor: 'red',
    },
    scrollspace: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 110


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
        flexGrow: 1,
        margin: theme.spacing(1),
        marginRight: 40
    },
    papercard: {
        width: '1180px',
        boxShadow: "0px 0px 0px #E8E8E8",
        minHeight: '233px',
        //   margin: 'auto',
        marginLeft: 0,
        marginBottom: "16px",
        //   backgroundColor:'green',
        position: 'relative',
        borderRadius: 5

    },
    Tablecellcard: {
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
    Tablecellcard2: {
        width: '570px',
        boxShadow: "0px 0px 0px #E8E8E8",
        minHeight: '233px',
        //   margin: 'auto',
        marginLeft: "15%",
        marginBottom: "16px",
        //   backgroundColor:'green',
        position: 'relative',
        borderRadius: 5

    },
    floortext: {
        display: 'inline',
        marginRight: '87px',
        color: '#4A4A4A',
        fontSize: '13px',
        fontWeight: 'bold',
        position: 'relative',
    
    },

    floortext2: {
      display: 'inline',
      marginRight: '10px',
      color: '#4A4A4A',
      fontSize: '13px',
      fontWeight: 'bold',
      position: 'relative',
  
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
    minitext: {
        fontSize: '11.3px',
        color: '#AAAAAA',
        position: 'absolute',
        fontWeight: '300',
        top: 0,
        marginTop: '13px',
    },
    paperrow: {
        margin: 'auto',
        maxWidth: '1163px',
        height: '5px',
        position: 'relative',
        boxShadow: 'none',
        borderBottom: '1px solid #D8D8D8',
        borderRadius: '0px'
    },
    newdetext: {
        position: 'absolute',
        color: '#4A4A4A',
        fontSize: '13px',
        marginTop: "17px",
        fontWeight: '400'
    },
    infobutton: {
        position: 'absolute',
        width: '24px',
        height: '24px',
        marginTop: "14.5px",
        marginLeft: "1086px",
        color: "#485D84"
    },

    root2: {
        minWidth: 275,
      },
    
      heder:{
        width: '100%',
        padding: theme.spacing(1),
        marginTop: '4%', 
      },
    
      BuildingnameMove:{
        marginLeft: '5%', 
      },
    
      TabMove:{
        marginLeft: "1%",
      },
    
      Searchstyle: {
        backgroundColor: "#fff",
        borderRadius: '8px',
        width: 200,
        marginBottom: 40,
        marginLeft: 15,
        marginTop: 10,
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },

      Searchbuilding: {
        backgroundColor: "#fff",
        borderRadius: '8px',
        width: 200,
        marginBottom: 40,
        marginLeft: -70,
        marginTop: 10,
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },

      Searchbuilding2: {
        backgroundColor: "#fff",
        borderRadius: '8px',
        width: 200,
        marginBottom: 40,
        marginLeft: -150,
        marginTop: 10,
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
    
    
      SearchBtn:{
        backgroundColor: "#fff",
        marginBottom: 40,
        marginLeft: -20,
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
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
        width: '100%',
        padding: theme.spacing(2),
        margin: 'auto',
      },
    
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
    
      dropdown:{
        width: 200,
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
      headfloors: {
        // display: 'block',
        color: '#4A4A4A',
        fontWeight: 'bold',
        fontSize: '16px',
        posiotion: 'absolute',
        marginLeft: '45px',
        paddingTop: '14px'
    },

    Closebill:{
      marginButtom: '-50%'
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
  
export default function Billpage({isOpened}) {
    const classes = useStyles();
    const [history, setHistory] = useState([])
    const [search, setSearch] = useState([])
    const [building, setBuilding] = useState([])
    const [dropdown, setDropdown] =useState([])
    const dateFormatter = date => {
      // return moment(date).unix();
      return moment(date).format('DD-MM-YY');
    };
    
    React.useEffect(() => {
        const fetchData = () =>{
         axios.get('/history/expense-history/VMS/date/2021-06-20')
         .then(r => 
          setHistory(r.data))
        }
        fetchData()
      }, [])
        console.log(history)

    React.useEffect(() => {
        const fetchData = () =>{
             axios.get('/dropdown/buildings')
             .then(r => 
              setDropdown(r.data))
            }
            fetchData()
        }, [])
        
    return (
   
        <ScrollView>
            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div>
                    <div className={classes.frame}>
                        <Datetoday />   
                        <h5 id="newannouncetitle"> Expense History </h5>   

                        <div>

                        <div className="row align-items-start">       

                <div className="col">    
                  <Paper component="form" className={classes.Searchstyle}>
                      <BootstrapInput
                          type="text"
                          size="small"
                          variant="outlined" 
                          //label="Date"     
                          placeholder="search"
                        />
                  </Paper>
               </div>                      
              <div className="col">    
                <Paper component="form" className={classes.Searchbuilding}>
                  <BootstrapInput
                      type="date"
                      size="small"
                      variant="outlined" 
                      label="Date"     
                      placeholder="Date"
                  />
                </Paper>
            </div>

            <div className="col">    
            <Paper component="form" className={classes.Searchbuilding2}>
              <NativeSelect
               className={classes.dropdown}
                id="demo-customized-select-native"
                value={building}
                  onChange={(e)=>{
                    setBuilding(e.target.value);
                  }}    
                input={<BootstrapInput />}
              >
                {dropdown.map((val)=>(
                  <option aria-label="None" value="" >
                    {val.text}
                  </option>   
                 ))}      
              </NativeSelect>
            </Paper>
          </div>


          <div className="col align-self-end">       
              <Button 
                className={classes.SearchBtn}
                variant="contained" color="primary" disableElevation
                style={{ backgroundColor: '#485D84'}}>
                Search</Button>      
          </div>
        </div> 
    </div>   
  
      <div>
        <Table  aria-label="caption table">
          <div className="container">
              {history.map((rows)=>{
                return(          
            <div>  
              <h4 className={classes.TabMove}>{rows.buildingName}</h4>  
                <Card className={classes.Cards} variant="outlined">
                  <Table>
                    <TableHead >  
                      <h5 className={classes.heder}>Floor{rows.floorName}</h5>       
                      <TableRow>
                        <TableCell>Room</TableCell>
                        <TableCell>Bill Period</TableCell>
                        <TableCell>Occupant</TableCell>
                        <TableCell>Total</TableCell>   
                        <TableCell>Status</TableCell>  
                        <TableCell>Details</TableCell>        
                    </TableRow>
                  </TableHead>   
                  {rows.room.map((num) => { 
                    return(
                    <TableBody>
                        {num.expenses.map((x) => { 
                          return(
                          <TableRow>
                            <TableCell align="left">{num.roomNumber}</TableCell>  
                            <TableCell align="left">
                              {moment(x.billPeriod).format("L")}
                            </TableCell>
                            <TableCell align="left">{num.occupant}</TableCell> 
                            <TableCell align="left">{x.totalPrice}</TableCell>   
                            <TableCell align="left">{num.statusInfo}</TableCell>   
                            <TableCell align="left">
                              <Link to={ `/historydetails/${num.roomId}`}>
                              <InfoOutlinedIcon/>
                              </Link>
                            </TableCell>   
                        </TableRow>  
                        )})}   
                    </TableBody>  
                    )})}                      
            </Table>          
          </Card> 
          </div>
           )})}          
        </div>                                                              
  
</Table>                  
</div>
                                        
        </div>       
    </div>
</div>
</ScrollView>
  )
}

/*<div className="row align-items-start">       

<div className="col">    
     <Paper component="form" className={classes.Searchstyle}>
     <BootstrapInput
         type="text"
         size="small"
         variant="outlined" 
         //label="Date"     
         placeholder="search"
         onChange={(e)=>{
           setSearch(e.target.value);
         }}                  
       />
   </Paper>
 </div>                      
 <div className="col">    
     <Paper component="form" className={classes.Searchstyle}>
     <BootstrapInput
         type="date"
         size="small"
         variant="outlined" 
         label="Date"     
         placeholder="Date"
         
       />
   </Paper>
 </div>

 <div className="col">    
   <Paper component="form" className={classes.Searchstyle}>
     <NativeSelect
      className={classes.dropdown}
       id="demo-customized-select-native"
       value={building}
       
         onChange={(e)=>{
           setBuilding(e.target.value);
         }}    
       input={<BootstrapInput />}
     >
       {dropdown.map((val)=>(
         <option aria-label="None" value="" >
           {val.text}
         </option>   
        ))}      
     </NativeSelect>
   </Paper>
 </div>

 <div className="col align-self-end">       
     <Button 
       className={classes.SearchBtn}
       variant="contained" color="primary" disableElevation
       style={{ backgroundColor: '#485D84'}}>
     Search</Button>      
 </div>
 </div> 
</div>      
<div>
       
<div>
   {bill.map((rows)=>{
   return( 
<div className="container ">
   
     {rows.buildingName}
           
           <Paper className={classes.papercard}>
               <h4 className={classes.headfloors}>Floor</h4>
               <div className={classes.headfloor}>  
                   <div style={{ position: 'absolute', paddingTop: '6px' }}>
                       <div className={classes.floortext}>
                           Room  
                       </div>
                       <div className={classes.floortext}></div>
                       <div className={classes.floortext}>
                           Billed At                                 
                       </div>
                       <div className={classes.floortext}></div>
                       <div className={classes.floortext}>
                           Occupants      
                       </div>
                       <div className={classes.floortext}>         
                       </div>  
                       <div className={classes.floortext}>
                           Total
                       </div> 
                       <div className={classes.floortext}></div>
                       <div className={classes.floortext}>
                            Status             
                       </div>  
                       <div className={classes.floortext2}></div>
                       <div className={classes.floortext}>
                           Detail  
                       <div className={classes.minitext} style={{paddingLeft:'150px'}}></div>    
                        </div>
                   </div>
               </div>   
               
               <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px" }} />
               {rows.room.map((num) => { 
                   return(
                   <TableBody>
                   {num.expenses.map((x) => { 
                     return(
                     <TableRow>
                     <TableCell align="right" style={{paddingLeft:'48px'}}>{num.roomNumber}</TableCell>  
                     <TableCell align="left"style={{paddingLeft:'166px'}}>
                       {moment(x.billPeriod).format("L")}
                     </TableCell>
                     <TableCell align="right"style={{paddingLeft:'165px'}}>{num.occupant}</TableCell> 
                     <TableCell align="right"style={{paddingLeft:'171px'}}>{x.totalPrice}</TableCell>   
                     <TableCell align="right"style={{paddingLeft:'156px'}}>{num.statusInfo}</TableCell>  
                     <TableCell align="left" style={{paddingLeft:'86px'}}>
                     <Link to={`/historydetails/${x.roomId}`}>
                       <InfoOutlinedIcon/>
                       </Link>
                     </TableCell>   
                     <TableCell align="left" ></TableCell>   
                     <TableCell align="left" ></TableCell> 
                   </TableRow>  
                   )})}   
               </TableBody>  
               )})} 
           </Paper>
       </div>      
       )})}    
   </div>   */

