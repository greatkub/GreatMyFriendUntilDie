import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import { useState } from 'react';
import { ScrollView } from 'react-native';

//import Savebtn from "../../Components/Button/Save";

import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },

    heder: {
        width: '100%',
        padding: theme.spacing(1),
        marginTop: '4%',
    },

    Card: {
        width: '75%',
        padding: theme.spacing(3),
        margin: 'auto',
    },

    Cards: {
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

    Btn: {
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
        //position: "absolute",
        //top: 620,
        //left: "35%"
    },
}));



export default function CreateFloor(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [previous, setPrevious] = useState({});

    const [inputfloorToAdd, setInputfloorToAdd] = useState(null)
    const [committedfloorToAdd, setCommittedFloorToAdd] = useState([]);


    const [keptSample, setKeptSample] = useState([])

    const roomObject = {
        "room_number": "101"
    }
    function habdlerClick() {
        console.log("This all floor" + inputfloorToAdd)
        setCommittedFloorToAdd(inputfloorToAdd);


        for (var i = 0; i < inputfloorToAdd; i++) {


            const sampleObject = {
                "FloorName": `${i + 1}`,
                "FloorNumber": i + 1,
                "Rooms": [],

            }


            keptSample.push(sampleObject)

        }
        // sampleObject.FloorName = 3

        props.keptArray(keptSample)
        console.log(keptSample)
        // console.log(sampleObject)


    }


    function habdlerClick() {
        console.log("This all floor" + inputfloorToAdd)
        setCommittedFloorToAdd(inputfloorToAdd);


        for (var i = 0; i < inputfloorToAdd; i++) {


            const sampleObject = {
                "FloorName": `${i + 1}`,
                "FloorNumber": i + 1,
                "Rooms": [],

            }


            keptSample.push(sampleObject)

        }
        // sampleObject.FloorName = 3

        props.keptArray(keptSample)
        console.log(keptSample)

        // console.log(sampleObject)


    }

    return (
        <div style={{width: '100%' }}>
                    <ScrollView>

            <div className="container" style={{ position: 'relative'}}>
                <div>
                        <div style={{ width: '100%', height: '650px' }}>


                            <Card className={classes.Card} variant="outlined">
                                <Table aria-label="caption table">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell className={classes.heder}>
                                                <div className="row">
                                                    <div className="col">
                                                        <h4>Floor</h4>
                                                    </div>
                                                    {/* <button onClick={() => console.log(keptSample)}>

                                                </button> */}

                                                    <div className="col-md-3">
                                                        <input
                                                            placeholder="No of Floor"
                                                            type="number"
                                                            value={inputfloorToAdd}
                                                            onChange={(e) => setInputfloorToAdd(parseInt(e.currentTarget.value))}
                                                        />
                                                    </div>

                                                    <div className="col-md-3">
                                                        <Button className={classes.buttongenerate}
                                                            size="small" variant="contained" color="primary" disableElevation
                                                            style={{ backgroundColor: '#485D84' }}
                                                            onClick={() => {
                                                                habdlerClick()
                                                            }}>Generate Floor</Button>
                                                    </div>
                                                </div>

                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <br />

                                        <div className="container ">
                                            <Card className={classes.Cards} variant="outlined">
                                                <Table >
                                                    <TableHead >
                                                        <h5 className={classes.heder}>King Solomon</h5>
                                                        <TableRow>
                                                            <TableCell align="left">Floor</TableCell>
                                                            <TableCell align="center">Edit Name Floor</TableCell>
                                                            {/* <TableCell align="center">Number of Room</TableCell> */}
                                                            <TableCell align="right" >Delete</TableCell>
                                                        </TableRow>
                                                    </TableHead>

                                                    {/* {Array generate each floor loop} */}
                                                    {keptSample.map((value, index) => (

                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell align="left" numfloor={`floor${index}`}>
                                                                    {index + 1}
                                                                </TableCell>
                                                                
                                                                <TableCell align="center">
                                                                    <input placeholder="Number of Room" placeholder={index + 1} onChange={e => value.FloorName = e.target.value} />
                                                                </TableCell>

                                                                {/* <TableCell align="center"><input placeholder="Number of Room" />

                                                            </TableCell> */}
                                                                <TableCell align="left">
                                                                    <Button> <DeleteSweepOutlinedIcon /></Button>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    ))}
                                                </Table>


                                                <div className="container-fruid ">
                                                    <NavLink to='/setting'>
                                                        <Button >
                                                            {/*<Savebtn save="save"/>*/}
                                                        </Button>
                                                    </NavLink>
                                                </div>
                                            </Card>
                                        </div>
                                    </TableBody>
                                </Table>
                            </Card>
                        </div>
                </div>

                {/* <Link to="/settingroom" onClick={() => props.keptArray(keptSample)}>
                <Button
                    className={classes.buttonsubmit}
                    variant="contained" color="primary" disableElevation
                    style={{ backgroundColor: '#485D84' }} >
                    Save
                </Button>
            </Link> */}



            </div>

           
            </ScrollView>
            <div style={{ position: 'absolute', width: '100%', height: 200, top: 620 }}>
                <Link to="/settingroom" onClick={() => props.keptArray(keptSample)}>

                    <Button
                        style={{
                            backgroundColor: "#485D84", width: 406,
                            height: 42.87, color: "#FFFFFF", fontSize: 21, zIndex: 1,
                            position: 'absolute', left: 540, top: 40
                        }}>
                        SAVE
                    </Button>

                    <div style={{
                        backgroundColor: '#385CA8', opacity: 0.5
                        , width: "100%", height: 200, position: 'relative'
                    }}>

                    </div>

                </Link>


            </div>
        </div>

    );
}

