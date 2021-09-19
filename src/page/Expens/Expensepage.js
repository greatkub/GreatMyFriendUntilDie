/*import React from 'react'
import Floorcard from './Expencompo/Floorcard'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Navbar2 from '../../Components/AllComponent/Navbar2';

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
    footerbtn: {

    }
}));

export default function Expensepage({ isOpened }) {
    const classes = useStyles();



    return (
        <div style={{width: '100%'}}>
            <ScrollView>
                <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                    <div>
                        <div className={classes.frame}>
                            <Datetoday />
                        </div>
                        <div>
                            <Floorcard />
                        </div>
                    </div>
                </div>
            </ScrollView>
             <div style={{width: '100%', backgroundColor: 'red', height: '108px'}}>
               
            </div>
        </div>


    )
}*/

import { ScrollView } from 'react-native';
import React, {useEffect,useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import axios from "axios";
import moment from 'moment';
import NumberFormat from 'react-number-format';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Savebtn from "../../Components/Button/Save";
import { Button } from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    marginTop: '-6%'   
  },

  Cards:{
    width: '100%',
    padding: theme.spacing(2),
    marginTop: "-7%",
    margin: 'auto',
    height: "120%"
  },

  heder:{
    width: '90%',
    padding: theme.spacing(2),
    margin: '1%',
    
  },

  container: {
    maxHeight:440,
    width: '100%'
  },

  Gridmove:{
    marginLeft: 80
  },
  
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 15),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    
  },

 Searchstyle: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    width: 200,
    marginBottom: 40,
    marginTop: -24,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },

  Field:{
    marginTop: "2%"
  },

  Heading:{
    marginTop: "3%"
  },

  Btn:{
    marginLeft: "60%",
    marginTop: "-8%"

  },

  fabButton: {
    width: "60%",
    //left: 120,
    top: 40,
    right: 50,
    margin: '0 auto',
  },

  Tabmove: {
   marginLeft: "1%"
  },

  Spacing:{
    margin: '1%'
  },

}));

export default function Expense() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [currenDate, setCurrentDate] = useState("")
  const [previousDate, setPreviousDate] = useState("2021-07-08")
  const [elecPrevious, setElecPrevious] = useState("")
  const [elecCurrent, setElecCurrent] = useState()
  const [elecUsage, setElecUsage] = useState("")
  const [waterPrevious, setWaterPrevious] = useState("")
  const [waterCurrent, setWaterCurrent] = useState("")
  const [waterUsage, setWaterUsage] = useState("")
  const [startbill, setStartbill] = useState("")
  const [endbill, setEndbill] = useState("")
  const [roomId, setRoomId] = useState([])
  const [expense, setExpense] = useState([])

  /*function handlerChangeJSOn() {
    xpense[0].buildingName = "Laila"
    console.log(xpense)
  }*/

 /* function handlerChangeJSOn() {
    xpense[0].buildingName = "Laila"
    setXpense(xpense[0].floors[0].rooms)
  }*/

  function handlerChangeJSOn() {
    /*xpense[0].buildingName = "Laila*/
    let rooms = []
    
    setKeepstate(xpense[0].floors[0].rooms)
    console.log(keepstate)
   
    for( const i in keepstate) {
      console.log(i)
      console.log("hi")
    }
  }


const [keepstate , setKeepstate] = useState([])
const [ allroom, setAllroom] = useState()

const Expensesave = event => {
  event.preventDefault();
    const expenseLists = [];

    for( let floor in xpense[0].floors) {
      for (let room in xpense[0].floors[floor].rooms)
      {
      console.log(room)
      console.log('fkdsakjadshgdsahgjadsjhg')
      var a = xpense[0].floors[floor].rooms[room];
      // a.CurrentDate = new Date().toISOString().substring(0, 10);
      //a.CurrentDate = new Date().toISOString()
        expenseLists.push(xpense[0].floors[floor].rooms[room]);
      }      
      // console.log(i)
      // console.log("hi")
    }
  
    console.log('aaaa', expenseLists.length)
    console.log(expenseLists);


    setKeepstate(expenseLists);
    //console.log(keepstate)
    //console.log(JSON.stringify(keepstate))
    axios.post("/rentingtransaction/electricity-water-expenses", 
    //allroom
      keepstate
   
 
).then((response)=>{
  console.log('done')
    console.log(response);
    console.log(keepstate)
  })
  .catch(error => {
    console.log(error.response)
 })
  
};

//get
 const [xpense, setXpense] = useState([])
  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('/rentingtransaction/electricity-water-expenses/2')
    .then(r => {    
      setXpense(r.data)
    })
  };
  fetchData()
}, [])
console.log(xpense)

console.log(xpense)

  return (
    <div className="container">
            <div>
            <ScrollView>
            <div style={{ width: '100%', height: '650px' }}>
  
    <Tab.Container  defaultActiveKey="home">
    <div className={classes.root}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <div class="container d-flex-end">  
              <div class="container d-flex-start" >
                <h4 className={classes.Tabmove}>Exppense</h4>   
              </div>    
          <Table>
              <Nav variant="pills"className={classes.Tabmove}>
                <Nav.Item >
                  <Nav.Link eventKey="home">Electricity</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Water</Nav.Link>
                </Nav.Item>  
              </Nav>          
        <TableBody>
     <br/>

    <Tab.Content>
        <Tab.Pane eventKey="home">  
        
        <input 
            type="date"/>    
   
          <div className="App">
            <Table  aria-label="caption table">
            {xpense.map((build)=>{
              return(  
            <TableBody>
               <div className="container ">
               
                  {/*<button onClick={()=> xpense}> Test </button>*/}
              <h4 className={classes.Tabmove}>{build.buildingName}</h4>
              {build.floors.map((f)=>{
              return(
              <Card className={classes.Spacing}  variant="outlined">
                <Table>
                    <TableHead >  
                      <h5 className={classes.heder}>Floor{f.floorName}</h5>      
                     <TableRow>
                        <TableCell>Room</TableCell>
                        <TableCell>Bill Period</TableCell>
                        <TableCell>Previous Date</TableCell>
                        <TableCell>Previous Reading</TableCell>
                        <TableCell>Current Reading</TableCell>
                      </TableRow>
                    </TableHead>  
                      {f.rooms.map((r)=>{
                        return( 
                        <TableBody>
                            <TableRow>
                            {/*<TableCell align="left">{r.roomId}</TableCell> */}
                              <TableCell align="left">{r.roomName}</TableCell> 
                              <TableCell align="left">
                                { //moment /*(r.billPeriod).format("L")*/
                                r.billPeriod
                                }
                                </TableCell> 
                              <TableCell align="left" 
                              /*onChange={(event) =>{
                                    setPreviousDate(event.target.value);
                                    }}*/
                                    >                         
                               {moment(r.previousDate).format("L")}
                              </TableCell> 

                              <TableCell align="left">
                                  {r.electricityPreviousReading}        
                              </TableCell> 
                                <TableCell align="left">
                                    <input 
                                        id= {r.roomId}
                                        size="small"
                                        type="text"
                                        onChange={(event) => {
                                         
                                        /*let newXpense = xpense
                                        const objIndex = newXpense.findIndex((obj=> obj.roomId ==event.target.id))*/
                                        //newXpense[objIndex]= event.target.value 
                                        //setXpense(newXpense); 
                                        r.electricityCurrentReading = event.target.value   
                                        //setElecCurrent(event.target.value); 
                                       
                                        }}
                                      />
                                </TableCell> 
                              <TableCell align="left"></TableCell>     
                            </TableRow>        
                        </TableBody>  
                          )})}                   
                    </Table>   
              </Card>  
                   )})}   
            </div>        
      </TableBody>
       )})}  
    </Table>   
        {/*<Button  
        style={{position:'absolute'}}
            type="submit"   
            id="1"          
            onClick={Expensesave}>
          <Savebtn save="save"/> 
        </Button> */}
    </div>   
          </Tab.Pane>    
      </Tab.Content>  


      <Tab.Content>
        <Tab.Pane eventKey="link-1">
        <div className="App">
            <Table  aria-label="caption table">
            {xpense.map((build)=>{
              return(  
            <TableBody>
            <div className="container ">
           {/* <button onClick={()=>handlerChangeJSOn()}> BTN  </button>*/}

              <h4 className={classes.Tabmove}>{build.buildingName}</h4>
                {build.floors.map((f)=>{
                return(
              <Card className={classes.Spacing}  variant="outlined">
                <Table  aria-label="caption table">
                    <TableHead >  
                      <h5 className={classes.heder}>Floor {f.floorName}</h5>      
                     <TableRow>
                        <TableCell>Room</TableCell>
                        <TableCell>Bill Period</TableCell>
                        <TableCell>Previous Date</TableCell>
                        <TableCell>Previous Reaading</TableCell>
                        <TableCell>Current Reading</TableCell>
                        <TableCell >Usage</TableCell>    
                        <TableCell>Remark</TableCell>         
                      </TableRow>
                    </TableHead>  
                      {f.rooms.map((r)=>{
                        return( 
                        <TableBody>
                            <TableRow>
                              <TableCell align="left">{r.roomName}</TableCell> 
                              <TableCell align="left">{r.billPeriod}</TableCell> 
                              <TableCell align="left">{r.previousDate}</TableCell> 
                              <TableCell align="left"
                               
                                
                                >
                                  
                              </TableCell> 

                                <TableCell>
                                    <input 
                                        id= {r.roomId}
                                        size="small"
                                        type="text"
                                        onChange={(event) => {
                                         
                                         
                                          /*let newXpense = xpense
                                          const objIndex = newXpense.findIndex((obj=> obj.roomId ==event.target.id))*/
                                          //newXpense[objIndex]= event.target.value 
                                          //setXpense(newXpense); 
                                          r['WaterCurrentReading'] = event.target.value   
                                          //setElecCurrent(event.target.value); 
                                         
                                          }}
                                          
                                          />
                                </TableCell> 
                              <TableCell align="left"></TableCell>         
                            </TableRow>      
                           
                        </TableBody>  
                          )})}                   
                    </Table>    
                </Card>  
                   )})}   
            </div>    
      </TableBody>
       )})}  
      </Table> 
       {/*<Savebtn  
                          type="submit"  
                          id="2"      
                           onClick={Expensesave} 
                              save="save"
       /> */}          
                         
        </div>
        { /*Water*/}
          </Tab.Pane>
      </Tab.Content>
      </TableBody>
      </Table>       
    </div> 
  </main>

</div>
  
</Tab.Container>
</div>             
      </ScrollView> 
      <div style={{ position: 'absolute', width: '100%', height: 200, top: 620 }}>
                <Button 
                 type="submit"   
                 id="1"    
                onClick={Expensesave}
                style={{ backgroundColor: "#485D84", width: 406, height: 42.87, color: "#FFFFFF", fontSize: 21 ,zIndex: 1, position: 'absolute', left: 540, top: 40}}>
                    SAVE
                </Button>
                <div style={{
                    backgroundColor: '#385CA8', opacity: 0.5
                    , width: "100%", height: 200, position: 'relative'
                }}>

                </div>
        </div>
    </div>


    </div>
  );
}

