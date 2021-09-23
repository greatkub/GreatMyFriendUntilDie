// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Datetoday from '../../Components/AllComponent/Datetoday.js'
// import { ScrollView } from 'react-native';
// import { useState } from 'react';
// import Navbar2 from '../../Components/AllComponent/Navbar2';
// import Roomdetail from './DetailBillCompo/RoomdetailCompo/Roomdetail.js';
// import Otherdetail from './DetailBillCompo/OtherdetailCompo/Otherdetail.js';

// const useStyles = makeStyles((theme) => ({
//     frame: {
//         width: '1163px',
//         height: '113px',
//         backgroundColor: 'red',
//     },
//     scrollspace: {
//         height: "730px",
//         width: '1163px',
//         margin: 'auto',
//         paddingLeft: 110,
//         transition: 'all 0.5s ease'
//     },
//     scrollspace36: {
//         height: "730px",
//         width: '1163px',
//         margin: 'auto',
//         paddingLeft: 36,
//         transition: 'all 0.5s ease'

//     }
// }));

// export default function DetailBillpage({isOpened}) {
//     const classes = useStyles();
    
   

//     return (
//         <ScrollView>
//             <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
//                 <div>
//                     <div className={classes.frame}>
//                         <Datetoday />
//                         Building Name
//                     </div>
//                     <div>
//                         <Roomdetail/>

//                        <Otherdetail/>
//                     </div>
//                 </div>
//             </div>
//         </ScrollView>

//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import axios from 'axios';
import { useState, useEffect } from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
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
//import Billroomcard from './Billroomcard'
import {BrowserRouter as Router, Route, useParams, Link, NavLink, Switch} from "react-router-dom";

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
}));

export default function Billfloorcard(props) {
    const classes = useStyles();
    const str = props.Date
    const [bill, setBill] = useState([]);
    const {roomId} = useParams();
    const [billdetails, setBilldetails] = useState([])

    useEffect(() => {
        axios("/bill/bills-detail/"+roomId)
            .then(response => {
                console.log("hi" + response.data)
                setBilldetails(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
                })         
      }, [roomId]);

      // useEffect(() => {
    //     axios('https://536a20dd-fe69-4914-8458-6ad1e9b3ce18.mock.pstmn.io/floorexpense')
    //         .then(response => {
    //             console.log("hi" + response.data)
    //             setAllFloor(response.data);
    //         })
    //         .catch(error => {
    //             console.log('Error getting fake data: ' + error);
    //         })
    // }, []);

    //API id, current date and role haven't been add yet
    return (
            <div> 
                  {billdetails.map((rows)=>{
                    return( 
                <div>      
              
                    <Paper className={classes.papercard}>
                        <h4 className={classes.headfloors}>Floor</h4>
                        <div className={classes.headfloor}>  
                            <div style={{ position: 'absolute', paddingTop: '6px' }}>
                                <div className={classes.floortext}>
                                    Name
                                    <div className={classes.minitext} style={{paddingLeft:'101px'}}>  </div>
                                </div>
                                <div className={classes.floortext}>
                                    Bed
                                    <div className={classes.minitext} style={{paddingRight:'1px'}}>  </div>
                                </div>
                                <div className={classes.floortext}>
                                    Billed Period     
                                    <div className={classes.minitext} style={{paddingLeft:'275px'}}></div>
                                </div>
                                <div className={classes.floortext}>
                                    Rent
                                    <div className={classes.minitext} style={{paddingLeft:'403px'}}>THB</div>
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
                                    <div className={classes.minitext} style={{paddingLeft:'403px'}}> </div>
                                </div>
                            </div>
                        </div>   
                        <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px" }} />
                        {rows.prices.map((p)=>{
                            return( 
                        <TableBody>
                              <TableRow>
                              <TableCell align="right" style={{paddingLeft:'25px'}}>
                              {rows.userFirstName} {" "} {rows.userLastName}

                                
                              </TableCell>   
                             

                              <TableCell align="left"style={{paddingLeft:'28px'}}>
                              {rows.bedName}
                              </TableCell>
                              <TableCell align="left"style={{paddingLeft:'60px'}}>
                                {moment(p.billPeriod).format("L")}
                              </TableCell>
                              <TableCell align="right"style={{paddingLeft:'79px'}}>4800</TableCell>
                              <TableCell align="right"style={{paddingLeft:'57px'}}>
                                {p.electricityPrice}
                              </TableCell>
                              <TableCell align="right"style={{paddingLeft:'79px'}}>
                              {p.waterPrice}
                              </TableCell>
                              <TableCell align="left"style={{paddingLeft:'56px'}} >
                              {p.other}
                               </TableCell>
                               <TableCell align="left"style={{paddingLeft:'36px'}} >
                              {p.totalPrice}
                               </TableCell>
                               <TableCell align="right" style={{paddingLeft:'54px'}} >
                               {p.statusInfo}
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>   
                        </TableBody>  
                         )})}                                                     
                    </Paper> 

    <div>
        <Paper className={classes.papercard}>
            <div className={classes.headfloor} >
                Other
                <div style={{ position: 'absolute', paddingTop: '6px' }}>

                    <div className={classes.floortext}>
                        Date
                    </div>
                    <div className={classes.floortext}>
                        Fine
                        <div className={classes.minitext} style={{ paddingLeft: '1px' }}> (THB) </div>

                    </div>
                    <div className={classes.floortext}>
                        Furniture
                        <div className={classes.minitext} style={{ paddingLeft: '16px' }}> (THB) </div>

                    </div>
                    <div className={classes.floortext}>
                        Internet

                        <div className={classes.minitext} style={{ paddingLeft: '12px' }}> (THB) </div>
                    </div>
                    <div className={classes.floortext}>
                        Parking

                        <div className={classes.minitext} style={{ paddingLeft: '11px' }}> (THB) </div>
                    </div>
                    <div className={classes.floortext}>
                        Total
                        <div className={classes.minitext} style={{ paddingLeft: '3px' }}> (THB) </div>
                    </div>

                </div>
            </div>
            <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px" }} />
         
        </Paper>
   </div>
               
        <div>
              
        </div>                                      
    </div>
     )})}        
    </div> 
            
    );
}   