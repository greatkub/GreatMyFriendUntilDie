import React from 'react'
import Billfloorcard from './Billpagecompo/Billfloorcard'
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
    const [bill, setBill] = useState([]);
    const [search, setSearch] = useState("")
    const [dropdown, setDropdown] = useState([])
    const [ building, setBuilding] = useState([])
    const dateFormatter = date => {
      // return moment(date).unix();
      return moment(date).format('DD-MM-YY');
    };
    
    React.useEffect(() => {
        const fetchData = () =>{
         axios.get('/bill/bills/1/date/08-07-2021')
         .then(r => 
          setBill(r.data))
        }
        fetchData()
      }, [])
        console.log(bill)

    React.useEffect(() => {
        const fetchData = () =>{
             axios.get('/dropdown/buildings')
             .then(r => 
              setDropdown(r.data))
            }
            fetchData()
        }, [])
        

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

  
    return (
   
        <ScrollView>
            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div>
                    <div className={classes.frame}>
                        <Datetoday />
                        <h5 >Bill</h5>   

        <div className="row align-items-start">       

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
                //onChange={handleChange}
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
                        {/*<Billfloorcard />*/}
        <div>
            {bill.map((rows)=>{
            return( 
        <div className="container ">
            
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
                        {f.rooms.filter(val=>{
                        if (search == ''){
                          return val;
                        }else if (
                          val.roomNumber.toLowerCase().includes(search.toLowerCase()) 
                         ){
                          return val
                        }                   
                      }).map((n) => { 
                        return(
                        <TableBody >
                            {n.expenses.map((x) => { 
                              return(
                              <TableRow>
                              <TableCell align="right" style={{paddingLeft:'48px'}}>{n.roomNumber}</TableCell>   
                              <TableCell align="left"style={{paddingLeft:'74px'}}
                               tickFormatter={dateFormatter} 
                              >
                              {moment(x.billPeriod).format("L")}
                              {/*x.billPeriod*/}
                            
                              </TableCell>
                              <TableCell align="right"style={{paddingLeft:'73px'}}>
                                    <NumberFormat
                                      value={x.rent.toFixed(2)} 
                                      displayType="text" 
                                      thousandSeparator={true}
                                      decimalScale={2} />
                              </TableCell>

                              <TableCell align="right"style={{paddingLeft:'46px'}}>
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
        </div>       
    </div>
</div>
</ScrollView>
)
}
