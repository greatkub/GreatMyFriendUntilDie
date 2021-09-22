
import React, {useState, useEffect} from "react";
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
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Input from "@material-ui/core/Input";
import TextField from '@material-ui/core/TextField';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import { ScrollView } from 'react-native';
//import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
    },
  
    heder:{
      width: '100%',
      padding: theme.spacing(1),
      marginTop: '4%', 
    },
  
    Card:{
      width: '75%',
      padding: theme.spacing(3),
      margin: 'auto',
    },
  
    Cards:{
      width: '90%',
      padding: theme.spacing(0),
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
    buttonsubmit: {
      width: "407px",
      height: "42.8px",
      position: "absolute",
      top: 620,
      left: "35%"
  },

  buttongenerate: {
    width: "157px",
    height: "30.8px",
    
},
  }));


export default function SetFloor(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [previous, setPrevious] = useState({});

    const [inputfloorToAdd, setInputfloorToAdd] = useState(null)
    const [committedfloorToAdd, setCommittedFloorToAdd] = useState([]);

    const [allfloor, setAllFloor] = useState([]);
    useEffect(() => {

      axios('/building/buildings/4')
        .then(r => {
            console.log("hi" + r.data)
            setAllFloor(r.data);
        })
        .catch(error => {
            console.log('Error getting fake data: ' + error);
        })
}, []);

    const onToggleEditMode = (id) => {
        setCommittedFloorToAdd((state) => {
          return committedfloorToAdd.map((row) => {
            if (committedfloorToAdd.id === id) {
              return { ...row, isEditMode: !row.isEditMode };
            }
            return row;
          });
        });
      };

    const updateFloor = (id)=>{
        axios.put("", {})
    }
      const onChange = (e, row) => {
        if (!previous[row.id]) {
          setPrevious((state) => ({ ...state, [row.id]: row }));}
        const value = e.target.value;
        const name = e.target.name;
        const { id } = row;
        const newRows = committedfloorToAdd.map((row) => {
          if (row.id === id) {
            return { ...row, [name]: value };
          }
          return committedfloorToAdd;
        });
        setCommittedFloorToAdd(newRows);
      };

    return (
        <div className="container">
          <div>
          <ScrollView>
        <div style={{ width: '100%', height: '650px' }}>
        
          <Card className={classes.Card} variant="outlined">
              <Table  aria-label="caption table">
            
                  <TableHead >
                      <TableRow>
                          <TableCell className={classes.heder}> 
                           <div className="row">
                              <div className="col">
                                    <h4>Floor</h4>  
                                   
                              </div>

                               <div className="col-md-3">
                                <input 
                                    placeholder="No of Floor"
                                    type="number"
                                    value={inputfloorToAdd}
                                    onChange={(e)=>setInputfloorToAdd(parseInt(e.currentTarget.value))}
                                    />
                                </div>

                                <div className="col-md-3">
                                <Button className={classes.buttongenerate}
                                size="small" variant="contained" color="primary" disableElevation
                                        style={{ backgroundColor: '#485D84' }}
                                         onClick={()=>{ 
                                        setCommittedFloorToAdd(inputfloorToAdd);
                                    }}>Generate Floor</Button>
                                </div>
                           </div>           
                          </TableCell>
                      </TableRow>
                  </TableHead>  
              <TableBody>
              <br/>

              <div className="container ">
                <Card className={classes.Cards} variant="outlined">
                  <Table >
                    <TableHead >  
                        <h5 className={classes.heder}></h5>       
                       <TableRow>
                          <TableCell align="left">Floor</TableCell>
                          <TableCell align="center">Edit Name Floor</TableCell>
                          <TableCell align="center">Number of Room</TableCell>
                          <TableCell>Delete</TableCell>         
                        </TableRow>
                     </TableHead>  

                      
                        {[...Array(committedfloorToAdd)].map((value, index) => (

                    <TableBody>
                        <TableRow>
                        <TableCell align="left" numfloor={`floor${index}`}>
                            {index+1}
                        </TableCell> 
                        <TableCell align="center">
                            <input/>
                        </TableCell>
                        <TableCell align="center"><input placeholder="Number of Floor" /></TableCell> 
                        <TableCell align="left">
                        <Button> <DeleteOutlinedIcon/></Button> 
                        </TableCell>
                        </TableRow>   
                    </TableBody>     
                   ))}               
                  </Table>  

                  <div className="container-fruid ">
                  <NavLink to='/setting'>
      <Button >
          
      </Button>
      </NavLink>         
              </div>  
                </Card>  
              </div>
        </TableBody>
      </Table>                  
      </Card>   
  
      </div>             
      </ScrollView> 
    </div>
    
       
    <Link to="/settingroom">
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
  
