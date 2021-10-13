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







// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import { Divider } from '@material-ui/core';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
// import IconButton from '@material-ui/core/IconButton';
// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import Table from '@material-ui/core/Table';
// import moment from 'moment';
// import NumberFormat from 'react-number-format';
// //import Billroomcard from './Billroomcard'
// import { BrowserRouter as Router, Route, useParams, Link, NavLink, Switch } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     margin: theme.spacing(1),
//     marginRight: 40
//   },
//   papercard: {
//     width: '1163px',
//     boxShadow: "0px 0px 0px #E8E8E8",
//     minHeight: '233px',
//     //   margin: 'auto',
//     marginLeft: 0,
//     marginBottom: "16px",
//     //   backgroundColor:'green',
//     position: 'relative',
//     borderRadius: 5

//   },
//   Tablecellcard: {
//     width: '1163px',
//     boxShadow: "0px 0px 0px #E8E8E8",
//     minHeight: '233px',
//     //   margin: 'auto',
//     marginLeft: 0,
//     marginBottom: "16px",
//     //   backgroundColor:'green',
//     position: 'relative',
//     borderRadius: 5

//   },
//   Tablecellcard2: {
//     width: '570px',
//     boxShadow: "0px 0px 0px #E8E8E8",
//     minHeight: '233px',
//     //   margin: 'auto',
//     marginLeft: "15%",
//     marginBottom: "16px",
//     //   backgroundColor:'green',
//     position: 'relative',
//     borderRadius: 5

//   },
//   floortext: {
//     display: 'inline',
//     marginRight: '87px',
//     color: '#4A4A4A',
//     fontSize: '13px',
//     fontWeight: 'bold',
//     position: 'relative',

//   },
//   headfloor: {
//     // display: 'block',
//     color: '#4A4A4A',
//     fontWeight: 'bold',
//     fontSize: '16px',
//     posiotion: 'absolute',
//     marginLeft: '45px',
//     paddingTop: '14px'
//   },
//   minitext: {
//     fontSize: '11.3px',
//     color: '#AAAAAA',
//     position: 'absolute',
//     fontWeight: '300',
//     top: 0,
//     marginTop: '13px',
//   },
//   paperrow: {
//     margin: 'auto',
//     maxWidth: '1163px',
//     height: '5px',
//     position: 'relative',
//     boxShadow: 'none',
//     borderBottom: '1px solid #D8D8D8',
//     borderRadius: '0px'
//   },
//   newdetext: {
//     position: 'absolute',
//     color: '#4A4A4A',
//     fontSize: '13px',
//     marginTop: "17px",
//     fontWeight: '400'
//   },
//   infobutton: {
//     position: 'absolute',
//     width: '24px',
//     height: '24px',
//     marginTop: "14.5px",
//     marginLeft: "1086px",
//     color: "#485D84"
//   },

//   root2: {
//     minWidth: 275,
//   },

//   heder: {
//     width: '100%',
//     padding: theme.spacing(1),
//     marginTop: '4%',
//   },

//   BuildingnameMove: {
//     marginLeft: '5%',
//   },

//   TabMove: {
//     marginLeft: "5%",
//   },

//   Searchstyle: {
//     backgroundColor: "#fff",
//     borderRadius: '8px',
//     width: 200,
//     marginBottom: 40,
//     marginLeft: 37,
//     marginTop: 10,
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },

//   SearchBtn: {
//     backgroundColor: "#fff",
//     marginBottom: 40,
//     marginLeft: 37,
//     '& > * + *': {
//       marginTop: theme.spacing(0),
//     },
//   },

//   Spacing: {
//     margin: '5%',
//   },

//   Card: {
//     width: '80%',
//     padding: theme.spacing(3),
//     margin: 'auto',
//   },

//   Cards: {
//     width: '100%',
//     padding: theme.spacing(2),
//     margin: 'auto',
//   },

//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },

//   dropdown: {
//     width: 200,
//   },

//   title: {
//     fontSize: 14,
//   },

//   pos: {
//     marginBottom: 12,
//   },

//   Btn: {
//     marginLeft: "92%",
//     marginTop: "-6%",
//   },
//   headfloors: {
//     // display: 'block',
//     color: '#4A4A4A',
//     fontWeight: 'bold',
//     fontSize: '16px',
//     posiotion: 'absolute',
//     marginLeft: '45px',
//     paddingTop: '14px'
//   },
// }));

// export default function Billfloorcard(props) {
//   const classes = useStyles();
//   const str = props.Date
//   const [bill, setBill] = useState([]);
//   const { id } = useParams();
//   const [billdetails, setBilldetails] = useState([])

//   useEffect(() => {
//     axios("/bill/bills-detail/" + id)
//       .then(response => {
//         console.log("hi" + response.data)
//         setBilldetails(response.data);
//       })
//       .catch(error => {
//         console.log('Error getting fake data: ' + error);
//       })
//   }, [id]);

//   // useEffect(() => {
//   //     axios('https://536a20dd-fe69-4914-8458-6ad1e9b3ce18.mock.pstmn.io/floorexpense')
//   //         .then(response => {
//   //             console.log("hi" + response.data)
//   //             setAllFloor(response.data);
//   //         })
//   //         .catch(error => {
//   //             console.log('Error getting fake data: ' + error);
//   //         })
//   // }, []);

//   //API id, current date and role haven't been add yet
//   return (
//     <div>
//       {billdetails.map((rows) => {
//         return (
//           <div>

//             <Paper className={classes.papercard}>
//               <h4 className={classes.headfloors}>Floor</h4>
//               <div className={classes.headfloor}>
//                 <div style={{ position: 'absolute', paddingTop: '6px' }}>
//                   <div className={classes.floortext}>
//                     Name
//                     <div className={classes.minitext} style={{ paddingLeft: '101px' }}>  </div>
//                   </div>
//                   <div className={classes.floortext}>
//                     Bed
//                     <div className={classes.minitext} style={{ paddingRight: '1px' }}>  </div>
//                   </div>
//                   <div className={classes.floortext}>
//                     Billed Period
//                     <div className={classes.minitext} style={{ paddingLeft: '275px' }}></div>
//                   </div>
//                   <div className={classes.floortext}>
//                     Rent
//                     <div className={classes.minitext} style={{ paddingLeft: '403px' }}>THB</div>
//                   </div>
//                   <div className={classes.floortext}>
//                     Electricity
//                   </div>
//                   <div className={classes.floortext}>
//                     Water
//                   </div>
//                   <div className={classes.floortext}>
//                     Others
//                   </div>
//                   <div className={classes.floortext}>
//                     Total
//                   </div>
//                   <div className={classes.floortext}>
//                     Status
//                     <div className={classes.minitext} style={{ paddingLeft: '403px' }}> </div>
//                   </div>
//                 </div>
//               </div>
//               <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px" }} />
//               {rows.prices.map((p) => {
//                 return (
//                   <TableBody>
//                     <TableRow>
//                       <TableCell align="right" style={{ paddingLeft: '25px' }}>
//                         {rows.userFirstName} {" "} {rows.userLastName}


//                       </TableCell>


//                       <TableCell align="left" style={{ paddingLeft: '28px' }}>
//                         {rows.bedName}
//                       </TableCell>
//                       <TableCell align="left" style={{ paddingLeft: '60px' }}>
//                         {moment(p.billPeriod).format("L")}
//                       </TableCell>
//                       <TableCell align="right" style={{ paddingLeft: '79px' }}>4800</TableCell>
//                       <TableCell align="right" style={{ paddingLeft: '57px' }}>
//                         {p.electricityPrice}
//                       </TableCell>
//                       <TableCell align="right" style={{ paddingLeft: '79px' }}>
//                         {p.waterPrice}
//                       </TableCell>
//                       <TableCell align="left" style={{ paddingLeft: '56px' }} >
//                         {p.other}
//                       </TableCell>
//                       <TableCell align="left" style={{ paddingLeft: '36px' }} >
//                         {p.totalPrice}
//                       </TableCell>
//                       <TableCell align="right" style={{ paddingLeft: '54px' }} >
//                         {p.statusInfo}
//                       </TableCell>
//                       <TableCell></TableCell>
//                     </TableRow>
//                   </TableBody>
//                 )
//               })}
//             </Paper>

//             <div>
//               <Paper className={classes.papercard}>
//                 <div className={classes.headfloor} >
//                   Other
//                   <div style={{ position: 'absolute', paddingTop: '6px' }}>

//                     <div className={classes.floortext}>
//                       Date
//                     </div>
//                     <div className={classes.floortext}>
//                       Fine
//                       <div className={classes.minitext} style={{ paddingLeft: '1px' }}> (THB) </div>

//                     </div>
//                     <div className={classes.floortext}>
//                       Furniture
//                       <div className={classes.minitext} style={{ paddingLeft: '16px' }}> (THB) </div>

//                     </div>
//                     <div className={classes.floortext}>
//                       Internet

//                       <div className={classes.minitext} style={{ paddingLeft: '12px' }}> (THB) </div>
//                     </div>
//                     <div className={classes.floortext}>
//                       Parking

//                       <div className={classes.minitext} style={{ paddingLeft: '11px' }}> (THB) </div>
//                     </div>
//                     <div className={classes.floortext}>
//                       Total
//                       <div className={classes.minitext} style={{ paddingLeft: '3px' }}> (THB) </div>
//                     </div>

//                   </div>
//                 </div>
//                 <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px" }} />

//               </Paper>
//             </div>

//             <div>

//             </div>
//           </div>
//         )
//       })}
//     </div>

//   );
// }





import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Navbar2 from '../../Components/AllComponent/Navbar2';
import ExRoomdetail from '../Expens/DetailExpenseCompo/RoomExpenseCompo/ExRoomdetail.js';
import ExOtherdetail from '../Expens/DetailExpenseCompo/OtherExpenseCompo/ExOtherdetail.js';
import Paper from '@material-ui/core/Paper';
import { Divider } from '@material-ui/core';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  frame: {
    width: '1163px',
    height: '113px',
    position: 'relative'
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

  //Exroom

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
    borderRadius: 5,
    border: '0.75px solid #AAAAAA'


  },
  floortext: {
    display: 'inline',
    marginRight: '73px',
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




  }


  //Exstudent

  ,
  paperrow: {
    margin: 'auto',
    maxWidth: '1163px',
    height: '54px',
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
  newdetext3: {
    color: '#4A4A4A',
    fontSize: '13px',
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

  //exother

  root1: {
    flexGrow: 1,
    margin: theme.spacing(1),
    marginRight: 40

  },
  papercard1: {
    width: '1163px',
    boxShadow: "0px 0px 0px #E8E8E8",
    minHeight: '233px',
    //   margin: 'auto',
    marginLeft: 0,
    marginBottom: "16px",
    //   backgroundColor:'green',
    position: 'relative',
    borderRadius: 5,
    border: '0.75px solid #AAAAAA'

  },
  floortext1: {
    display: 'inline',
    marginRight: '167px',
    color: '#4A4A4A',
    fontSize: '13px',
    fontWeight: 'bold',
    position: 'relative',

  },
  headfloor1: {
    // display: 'block',
    color: '#4A4A4A',
    fontWeight: 'bold',
    fontSize: '16px',
    posiotion: 'absolute',
    marginLeft: '45px',
    paddingTop: '14px'
  },
  headfloor2: {
    // display: 'block',
    color: '#4A4A4A',
    fontWeight: 'bold',
    fontSize: '16px',
    posiotion: 'absolute',
    marginLeft: '45px',
    marginTop: 14
  },
  minitext1: {
    fontSize: '11.3px',
    color: '#AAAAAA',
    position: 'absolute',
    fontWeight: '300',
    top: 0,
    marginTop: '13px',




  },

  fonttable: {
    color: '#4A4A4A',
    fontSize: '13px',
    fontWeight: 'bold',
  },

  //Exother row
  paperrow2: {
    margin: 'auto',
    maxWidth: '1163px',
    height: '54px',
    position: 'relative',
    boxShadow: 'none',
    borderBottom: '1px solid #D8D8D8',
    borderRadius: '0px'
  },
  newdetext2: {
    position: 'absolute',
    color: '#4A4A4A',
    fontSize: '13px',
    marginTop: "17px",
    fontWeight: '400'
  },
  infobutton2: {
    position: 'absolute',
    width: '24px',
    height: '24px',
    marginTop: "14.5px",
    marginLeft: "1086px",
    color: "#485D84"
  },

  //text
  title2: {
    fontSize: '19.4px',
    color: '#4A4A4A',
    fontWeight: 'bold',
    position: 'absolute',
    top: 60

  }

  , title2bl: {
    fontSize: '19.4px',
    color: '#4A4A4A',
    fontWeight: 'bold',
    position: 'absolute',
    top: 184
  },
}));

export default function Exdetailpage({ isOpened }) {
  const classes = useStyles();
  //   const str = props.Date
  const [bill, setBill] = useState([]);
  const { id } = useParams();
  const [billdetails, setBilldetails] = useState([])

  useEffect(() => {
    axios("/bill/bills-detail/" + id)
      .then(response => {
        console.log(response.data)
        setBilldetails(response.data);
      })
      .catch(error => {
        console.log('Error getting fake data: ' + error);
      })
  }, [id]);

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

  //   //API id, current date and role haven't been add yet





  return (
    <ScrollView>
      <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
        <div>
          <div className={classes.frame}>
            <Datetoday />
            <div className={classes.title2}>
              Expense History Detail

            </div>
          </div>
          <div>
            {/* <ExRoomdetail/> */}
            <Paper className={classes.papercard}>
              <div className={classes.headfloor} >
                Room 101
                <div style={{ position: 'absolute', paddingTop: '6px' }}>

                  <div className={classes.floortext} style={{ paddingRight: 100 }}>
                    Name
                  </div>
                  <div className={classes.floortext}>
                    Bed
                  </div>
                  <div className={classes.floortext} style={{ paddingRight: 100, width: 40 }}>
                    <div style={{ position: 'absolute', width: 80, top: -1 }}>
                      Billed Peroid

                    </div>

                  </div>
                  <div className={classes.floortext}>
                    Rent
                    <div className={classes.minitext} style={{ paddingLeft: '1px' }}> (THB) </div>

                  </div>
                  <div className={classes.floortext}>
                    Electricity
                    <div className={classes.minitext} style={{ paddingLeft: '18px' }}> (THB) </div>

                  </div>
                  <div className={classes.floortext}>
                    Water
                    <div className={classes.minitext} style={{ paddingLeft: '5px' }}> (THB) </div>
                  </div>
                  <div className={classes.floortext}>
                    Others
                    <div className={classes.minitext} style={{ paddingLeft: '8px' }}> (THB) </div>
                  </div>
                  <div className={classes.floortext}>
                    Total
                    <div className={classes.minitext} style={{ paddingLeft: '3px' }}> (THB) </div>
                  </div>
                  <div className={classes.floortext}>
                    Status
                  </div>
                </div>
              </div>
              <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px", height: 0.5 }} />

              {/* <ExStudentdetail /> */}
              {billdetails.map((item, index) => {
                return (
                  <Paper className={classes.paperrow}>
                    <div className={classes.newdetext} style={{ left: 45 }}>
                      {/* {props.roomid} */}
                      {/* {item.room[0].beds[0].firstName} {item.room[0].beds[0].lastName} */}
                      Krittamet Chuwongworaphinit
                    </div>
                    <div className={classes.newdetext} style={{ left: 255.5 }}>
                      {item.room[0].beds[0].bedName}

                      {/* bedName */}
                    </div>
                    <div className={classes.newdetext} style={{ left: 352.5 }}>
                      {moment(item.room[0].startTime).format("DD/MM/YYYY")}-{moment(item.room[0].endTime).format("DD/MM/YYYY")}

                      {/* item.startTime */}
                      {/* item.endTime */}

                    </div>
                    <div className={classes.newdetext} style={{ right: 608 }}>
                      {/* 4,700.00 */}
                      <NumberFormat
                        thousandSeparator={true}
                        displayType="text"
                        value={item.room[0].beds[0].rent.toFixed(2)}
                      />

                      {/* {item.room[0].beds[0].rent.toFixed(2)} */}

                      {/* item.totalPrice */}
                    </div>
                    <div className={classes.newdetext} style={{ right: 473 }}>
                      {/* 575.00 */}
                      <NumberFormat
                        thousandSeparator={true}
                        displayType="text"
                        value={item.room[0].beds[0].electricityPrice.toFixed(2)}
                      />

                      {/* {item.room[0].beds[0].electricityPrice.toFixed(2)} */}

                      {/* item.electricityPrice */}
                    </div>
                    <div className={classes.newdetext} style={{ right: 364 }}>
                      {/* item.waterPrice */}
                      {/* 90.00 */}

                      <NumberFormat
                        thousandSeparator={true}
                        displayType="text"
                        value={item.room[0].beds[0].waterPrice.toFixed(2)}
                      />
                      {/* {item.room[0].beds[0].waterPrice.toFixed(2)} */}

                    </div>

                    <div className={classes.newdetext} style={{ right: 249 }}>
                      {/* 0.00 */}
                      <NumberFormat
                        thousandSeparator={true}
                        displayType="text"
                        value={item.room[0].totalOtherPrice.toFixed(2)}
                      />

                      {/* {item.room[0].totalOtherPrice.toFixed(2)} */}

                    </div>

                    <div className={classes.newdetext} style={{ right: 146 }}>
                      {/* 5,366.00 */}
                      <NumberFormat

                        value={item.room[0].beds[0].totalPrice.toFixed(2)}

                        thousandSeparator={true}
                        displayType="text"

                      />
                      {/* {item.room[0].beds[0].totalPrice.toFixed(2)} */}

                    </div>
                    <div className={classes.newdetext} style={{ right: 33 }}>
                      {item.room[0].beds[0].statusInfo}
                    </div>

                  </Paper>
                )
              })}


            </Paper>

            {/* <ExOtherdetail /> */}
            <Paper className={classes.papercard1}>
              <div className={classes.headfloor2}>
                Others
              </div>
              <Table style={{ marginTop: "0px" }}>
                <TableBody>
                  <TableRow >
                    {/* <TableCell className={classes.fonttable} style={{ paddingLeft: 45 }} align='left'>
                      wwdwd
                    </TableCell> */}

                    {billdetails.length > 0 && billdetails[0].room[0].others.map((item, index) => {
                      return (
                        <TableCell className={classes.fonttable} style={{ paddingLeft: 45, width: 1163 / (billdetails[0].room[0].others.length + 1) }} align={index == 0 ? "left" : "center"}>
                          <div>
                            {item.feeTypeName}
                            <div style={index == 0 ? {
                              fontSize: '11.3px',
                              color: '#AAAAAA',
                              fontWeight: '300',
                              position: 'absolute',
                              left: 54
                            } : {
                              fontSize: '11.3px',
                              color: '#AAAAAA',
                              fontWeight: '300',
                              marginBottom: -20
                            }}> (THB) </div>
                          </div>

                        </TableCell>

                      )
                    })}




                    <TableCell className={classes.fonttable} align='right' style={{ paddingRight: 45, marginBottom: -8, paddingBottom: 22, paddingTop:28 }}>
                      Total
                    </TableCell>
                  </TableRow>

                </TableBody>
              </Table>

              <Table style={{ marginTop: "0px" }}>
                <TableBody>
                  <TableRow >
                    {/* <TableCell className={classes.fonttable} style={{ paddingLeft: 45 }} align='left'>
                      wwdwd
                    </TableCell> */}

                    {billdetails.length > 0 && billdetails[0].room[0].others.map((item, index) => {
                      return (
                        <TableCell className={classes.newdetext3} style={{ paddingLeft: 45, width: 1163 / (billdetails[0].room[0].others.length + 1) }} align={index == 0 ? "left" : "center"}>

                          <NumberFormat
                            thousandSeparator={true}
                            value={item.feeTypePrice.toFixed(2)}
                            // decimalSeparator="."
                            displayType="text"

                          />

                          {/* {item.feeTypePrice} */}
                        </TableCell>
                      )
                    })}

                    <TableCell className={classes.newdetext3} align='right' style={{ paddingRight: 45 }}>
                      <NumberFormat
                        thousandSeparator={true}
                        value={billdetails.length > 0 && billdetails[0].room[0].totalOtherPrice.toFixed(2)}
                        // decimalSeparator="."
                        displayType="text"

                      />
                      {/* {billdetails.length > 0 && billdetails[0].room[0].totalOtherPrice} */}
                    </TableCell>



                  </TableRow>
                </TableBody>
              </Table>


              {/* <div className={classes.headfloor1} >
                Other
                <div style={{ position: 'absolute', paddingTop: '6px' }}>

                  <div className={classes.floortext1}>
                    Date
                  </div>
                  <div className={classes.floortext1}>
                    Fine
                    <div className={classes.minitext1} style={{ paddingLeft: '1px' }}> (THB) </div>

                  </div>
                  <div className={classes.floortext1}>
                    Furniture
                    <div className={classes.minitext1} style={{ paddingLeft: '16px' }}> (THB) </div>

                  </div>
                  <div className={classes.floortext1}>
                    Internet

                    <div className={classes.minitext1} style={{ paddingLeft: '12px' }}> (THB) </div>
                  </div>
                  <div className={classes.floortext1}>
                    Parking

                    <div className={classes.minitext1} style={{ paddingLeft: '11px' }}> (THB) </div>
                  </div>
                  <div className={classes.floortext1}>
                    Total
                    <div className={classes.minitext1} style={{ paddingLeft: '3px' }}> (THB) </div>
                  </div>

                </div>
              </div> */}
              {/* <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px", height: 0.5 }} /> */}
              {/* <ExOtherRow/> */}
              {/* <Paper className={classes.paperrow2}>
                <div className={classes.newdetext2} style={{ left: 45 }}>
                  27/04/2021
                </div>
                <div className={classes.newdetext2} style={{ right: 894 }}>
                  100.00
                </div>
                <div className={classes.newdetext2} style={{ right: 671 }}>
                  550.00
                </div>
                <div className={classes.newdetext2} style={{ right: 456 }}>
                  750.00
                </div>
                <div className={classes.newdetext2} style={{ right: 242.5 }}>
                  200.00
                </div>
                <div className={classes.newdetext2} style={{ right: 45 }}>
                  1600.00
                </div>
              </Paper> */}
            </Paper>

          </div>
        </div>
      </div>
    </ScrollView>

  )
}


