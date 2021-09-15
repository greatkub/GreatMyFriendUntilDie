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
  const [elecCurrent, setElecCurrent] = useState([])
  const [elecUsage, setElecUsage] = useState("")
  const [waterPrevious, setWaterPrevious] = useState("")
  const [waterCurrent, setWaterCurrent] = useState("")
  const [waterUsage, setWaterUsage] = useState("")
  const [startbill, setStartbill] = useState("")
  const [endbill, setEndbill] = useState("")
  const [roomId, setRoomId] = useState([])
  const [expense, setExpense] = useState([])

  function handlerChangeJSOn() {
    xpense[0].buildingName = "Laila"
    console.log(xpense)
  }

const [keepstate , setKeepstate] = useState([])
const Expensesave = event => {
  event.preventDefault();
  axios.post("/rentingtransaction/electricity-water-expenses", 
  [{
      "CurrentDate": "2021-08-28",
      "PreviousDate": previousDate,
      "ElectricityPreviousReading": elecPrevious,
      "ElectricityCurrentReading": elecCurrent,
      //"ElectricityUsage": parseInt(elecUsage),
      "WaterPreviousReading": "600",
      "WaterCurrentReading": "400",
      //"WaterUsage": 140,
      "StartBillTransaction": "2021-08-28",
      "EndBillTransaction": "2021-09-16",
      "RoomId": 4
}]).then((response)=>{
    console.log(response);
  })
};

 const [xpense, setXpense] = useState([])
  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('/rentingtransaction/electricity-water-expenses/1')
    .then(r => {  
      
    setXpense(r.data)
     for (const data in r.data) {
      for (const floor in data){
        for (const room in floor.rooms)    
        {
          let Calculate ={
              CurrentDate: "",
              PreviousDate: "2021-07-28",
              ElectricityPreviousReading: "4531",
              ElectricityCurrentReading: "",
              ElectricityUsage: 0,
              WaterPreviousReading: "600",
              WaterCurrentReading: "",
              WaterUsage: 0,
              RoomId: room.roomId     
              }

              xpense.push(Calculate)
          }  
        }
       }    
    })
    
  };
  fetchData()
}, [])
console.log(xpense)

console.log(xpense)
  return (
    <Tab.Container  defaultActiveKey="home" >
    <div className={classes.root}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <div class="container d-flex-end">  
              <div class="container d-flex-start" >
                <h4 className={classes.Tabmove}>Expenses</h4>   
              </div>    
          <Table>
              <Nav variant="pills"className={classes.Tabmove}>
                <Nav.Item >
                  <Nav.Link eventKey="home">Electricity</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  eventKey="link-1">Water</Nav.Link>
                </Nav.Item>  
              </Nav>          
        <TableBody>
     <br/>
    
    <Tab.Content>
        <Tab.Pane eventKey="home">  
          <div className="App">
            <Table  aria-label="caption table">
            {xpense.map((build)=>{
              return(  
            <TableBody>
            <div className="container ">

            <button onClick={()=>handlerChangeJSOn()}> BTN  </button>

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
                                        type="number"
                                        onChange={(event) => {
                                        /*let newXpense = xpense
                                        const objIndex = newXpense.findIndex((obj=> obj.roomId ==event.target.id))*/
                                        //newXpense[objIndex]= event.target.value 
                                        //setXpense(newXpense); 
                                        r.electricityCurrentReading = event.target.value    
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
        <Button 
            type="submit"             
            onClick={Expensesave} >
          <Savebtn save="save"/> 
        </Button> 
    </div>   
          </Tab.Pane>    
      </Tab.Content>   
      <Tab.Content>
        <Tab.Pane eventKey="link-1">
        <div className="App">
            <Table  aria-label="caption table">
            {expense.map((build)=>{
              return(  
            <TableBody>
            <div className="container ">
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
                                onChange={(event) =>{
                                  setWaterPrevious(event.target.value);
                                }}>
                                  {r.waterPreviousReading}
                              </TableCell> 

                                <TableCell>
                                    <input 
                                        size="small"
                                        type= "number"
                                        onChange={(event) =>{
                                          setWaterCurrent(event.target.value);          
                                      }}/>
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
            <Savebtn  
              type="submit"       
              //onClick={()=>console.log("Hi")}     
              //onClick={Expensesave} 
              save="save"
              />         
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
  );
}
