import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import axios from 'axios';
import { useState, useEffect } from 'react';
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
import Billroomcard from './Billroomcard'
import Savebtn from '../../../Components/Button/Save';
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
        marginRight: 40
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
        marginLeft: "5%",
      },
    
      Searchstyle: {
        backgroundColor: "#fff",
        borderRadius: '8px',
        width: 200,
        marginBottom: 40,
        marginLeft: 37,
        marginTop: 10,
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
    
      SearchBtn:{
        backgroundColor: "#fff",
        marginBottom: 40,
        marginLeft: 37,
        '& > * + *': {
          marginTop: theme.spacing(0),
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

export default function Billfloorcard(props) {
    const classes = useStyles();
    const str = props.Date
    const [bill, setBill] = useState([]);
    const [search, setSearch] = useState("")
    
    React.useEffect(() => {
        const fetchData = () =>{
         axios.get('/bill/bills/1/date/08-07-2021')
         .then(r => 
          setBill(r.data))
        }
        fetchData()
      }, [])
        console.log(bill)

      
    
    const Closebill =()=>{
      axios.post("/bill/closed-bill",{
      }).then(() => {
      setBill([
        {
          "BillIds": [1,2,3]
        },
      ]);    
      window.location.href = '/createfeetype';
    });
  };
  
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
  
    return (
        <div >
            {bill.map((rows)=>{
            return( 
        <div className="container ">
            <h5 className={classes.TabMove}>Bill</h5>   
                <div class="container d-flex justify-content-start">       

          <div className="row align-items-start">                
            <div className="col align-self-start">     
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
       
          <div className="col align-self-end">    
            <Button 
                className={classes.SearchBtn}
                variant="contained" color="primary" disableElevation
                style={{ backgroundColor: '#485D84'}}>
              Search</Button>
           </div>
          </div> 
        </div>
              {rows.buildingName}
                    {rows.floors.map((f) => { 
                    return(
                    <Paper className={classes.papercard}>
                        <h4 className={classes.headfloors}>Floor{f.floorName}</h4>
                        <div className={classes.headfloor}>  
                            <div style={{ position: 'absolute', paddingTop: '6px' }}>
                                <div className={classes.floortext}>
                                    Room
                                    <div className={classes.minitext} style={{paddingLeft:'1px'}}>  </div>
                                </div>
                                <div className={classes.floortext}>
                                    Bill period
                                    <div className={classes.minitext} style={{paddingLeft:'1px'}}>  </div>
                                </div>
                                <div className={classes.floortext}>
                                    Rent      
                                    <div className={classes.minitext} style={{paddingLeft:'275px'}}>(THB) </div>
                                </div>
                                <div className={classes.floortext}>
                                    Electricity
                                </div>
                                <div className={classes.floortext}>
                                    Water                
                                </div>
                                <div className={classes.floortext}>
                                    Others             
                                </div>
                                <div className={classes.floortext}>
                                    Total            
                                </div>
                                <div className={classes.floortext}>
                                    Status                 
                                </div>
                                <div className={classes.floortext}>
                                    Detail
                                    <div className={classes.minitext} style={{paddingLeft:'3px'}}> </div>
                                </div>
                            </div>
                        </div>   
                        <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px" }} />
                        {f.rooms.map((n) => { 
                        return(
                        <TableBody >
                            {n.expenses.map((x) => { 
                              return(
                              <TableRow>
                              <TableCell align="right" style={{paddingLeft:'48px'}}>{n.roomNumber}</TableCell>   
                              <TableCell align="left"style={{paddingLeft:'75px'}}>
                              {moment(x.billPeriod).format("L")}
                              </TableCell>
                              <TableCell align="right"style={{paddingLeft:'65px'}}>
                                    <NumberFormat
                                      value={x.rent.toFixed(2)} 
                                      displayType="text" 
                                      thousandSeparator={true}
                                      decimalScale={2} />
                              </TableCell>

                              <TableCell align="right"style={{paddingLeft:'48px'}}>
                                    <NumberFormat
                                      value={x.electricity.toFixed(2)}
                                      displayType="text" 
                                      thousandSeparator={true} 
                                      decimalScale={2} />
                              </TableCell>
                              <TableCell align="right"style={{paddingLeft:'55px'}}>
                                    <NumberFormat
                                      value={x.waterPrice.toFixed(2)}
                                      displayType="text" 
                                      thousandSeparator={true} 
                                      decimalScale={2} />
                              </TableCell>

                              <TableCell align="left"style={{paddingLeft:'75px'}} >
                                    <NumberFormat
                                      value={x.other.toFixed(2)}
                                      displayType="text" 
                                      thousandSeparator={true} 
                                      decimalScale={2} />
                               </TableCell>
                               <TableCell align="right" style={{paddingLeft:'45px'}} >
                                    <NumberFormat
                                      value={x.totalPrice.toFixed(2)}
                                      displayType="text" 
                                      thousandSeparator={true} 
                                      decimalScale={2} />
                                </TableCell>

                                <TableCell align="left"style={{paddingLeft:'62px'}} >
                                  {n.statusInfo}
                              </TableCell>

                              <TableCell style={{paddingLeft:'69px'}} >
                                <Link to={`/billdetails/${n.roomId}`}>
                                    <InfoOutlinedIcon/>
                                </Link>
                              </TableCell>

                              <TableCell></TableCell>
                            </TableRow>  
                            )})}   
                               
                        </TableBody>  
                        )})} 

                    </Paper>
                       )})}  
                       
                </div>      
                )})}  
                 
            </div>         
    );    
}   




{/*<Paper className={classes.paperrow}>
                            <div className={classes.newdetext} style={{ left: 45 }}>
                              
                                101
                            </div>
                            <div className={classes.newdetext} style={{ left: 170 }}>
                                 27/04/2021
                            </div>
                            <div className={classes.newdetext} style={{ right: 815 }}>
                                4,700.00
                            </div>
                            <div className={classes.newdetext} style={{ right: 666 }}>
                                575.00
                            </div>
                             <div className={classes.newdetext} style={{ right: 542 }}>
                                90.00
                            </div>
                            <div className={classes.newdetext} style={{ right: 414 }}>
                                0.00
                            </div>
                            <div className={classes.newdetext} style={{ right: 297.5 }}>
                                5,366.00
                            </div>
                            <div className={classes.newdetext} style={{ right: 170 }}>
                                Unpaid
                            </div>

            <Link  to='/billdetails'>
                <IconButton className={classes.infobutton}>
                    <InfoOutlinedIcon />
                </IconButton>
            </Link>
</Paper>*/}