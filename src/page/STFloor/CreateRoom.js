import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { BrowserRouter as Rounter, Route, Link, NavLink, Switch } from 'react-router-dom';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },

    heder: {
        width: '100%',
        padding: theme.spacing(1),
        marginTop: '-2%',
    },

    Card: {
        width: '80%',
        padding: theme.spacing(3),
        margin: 'auto',
    },

    Cards: {
        width: '100%',
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

    Btn: {
        marginLeft: "92%",
        marginTop: "-6%",
    },
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 80,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: '100%',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        width: "30%",
        top: 10,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    buttonsubmit: {
        width: "407px",
        height: "42.8px",
        position: "absolute",
        top: 620,
        left: "35%"
    },


}));

export default function CreateRoom(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [allroom, setAllroom] = useState([]);
    const [inputRoomToAdd, setInputRoomToAdd] = useState(null)
    const [arrayFloor, setArrayFloor] = useState(2)

    const [getRoomName, setRoomName] = useState()


    useEffect(() => {
        setArrayFloor(props.allFloor)
        axios('/building/rooms/1')
            .then(response => {
                // console.log("hi" + response.data)
                setAllroom(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    });
    // building/floor-room/building/5

    const api = axios.create({
        baseURL: `/building/floor-room/building/4`
    })

    const addFloorandRoom = async () => {
        let res = await api.post('/',
            arrayFloor
        )

    }

    function handlerClick() {
        const a = 100
        // inputRoomToAdd
        // allroom
        const roomObject = {
            "room_number": "101"
        }
        console.log(arrayFloor)
        // console.log(allroom)



        for (var i = 0; i < arrayFloor.length; i++) {



            for (var j = 0; j < parseInt(inputRoomToAdd); j++) {


                const formattedNumber = ("0" + (j + 1)).slice(-2)
                const roomNumber = String(i + 1) + formattedNumber
                const roomObject = {
                    "room_number": roomNumber
                }
                arrayFloor[i].Rooms.push(roomObject)
                // console.log()
                // console.log(String(i+1) + formattedNumber)



            }


            // keptSample.push(sampleObject)

        }


        setArrayFloor(arrayFloor)
        console.log("end")

    }

    return (
        <div style={{ width: '100%' }}>
            <ScrollView>

                <div className="container ">
                    <div style={{ width: '100%', height: '650px' }}>
                        <div style={{ width: '100%', height: '550px' }}>
                            {/* <button onClick={() => console.log("hi")}>

                            </button> */}

                            <Card className={classes.Card} variant="outlined">
                                <Table aria-label="caption table">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell className={classes.heder}>
                                                <div style={{display: 'flex'}}>
                                                    <h4>Rooms</h4>
                                                    <input
                                                        placeholder="No of Room"
                                                        type="number"
                                                        // value={inputfloorToAdd}
                                                        onChange={(e) => setInputRoomToAdd(parseInt(e.currentTarget.value))}
                                                    />

                                                    <Button className={classes.buttongenerate}
                                                        size="small" variant="contained" color="primary" disableElevation
                                                        style={{ backgroundColor: '#485D84' }}
                                                        onClick={() =>
                                                            handlerClick()
                                                        }
                                                    >Generate Floor</Button>
                                                </div>

                                            </TableCell>

                                        </TableRow>
                                    </TableHead>

                                    <TableBody>

                                        <div className="container">
                                            <h5 className={classes.heder}>King Solomon</h5>

                                            {arrayFloor.length > 0 ? arrayFloor.map((set) => {
                                                return (
                                                    <div>
                                                        <div style={{ width: "100%", minHeight: "200px", border: "1px solid #AAAAAA", borderRadius: 5 }}>
                                                            <div style={{ height: "86.5px", width: "100%", borderBottom: "1px solid #AAAAAA" }}>
                                                                Floor {set.FloorName}
                                                            </div>
                                                            {set.Rooms.map((r, index) => {
                                                                return (
                                                                    <div style={{ display: 'flex', height: 50, width: "100%", borderBottom: "1px solid #AAAAAA" }}>
                                                                        <div>
                                                                            {r.room_number}
                                                                        </div>
                                                                        <input
                                                                            onChange={e => r.room_number = e.target.value}
                                                                        >

                                                                        </input>
                                                                        <button>
                                                                            delete
                                                                        </button>
                                                                    </div>


                                                                )
                                                            })}

                                                        </div>
                                                        <div style={{ height: '20px' }}>
                                                        </div>



                                                    </div>
                                                )



                                            }) : ""}
                                            {/* {arrayFloor.map((set) => {
                                            return (
                                                <Card className={classes.Cards} variant="outlined">
                                                    <h5 className={classes.heder}>{set.FloorName}</h5>
                                                    <Table>
                                                        <TableHead >
                                                            <h5 className={classes.heder}>Floor{set.FloorNumber}</h5>

                                                            <TableRow>
                                                                <TableCell>Rooms</TableCell>
                                                                <TableCell align="center">Edit Name Rooms</TableCell>
                                                                <TableCell>Delete</TableCell>
                                                            </TableRow>

                                                        </TableHead> */}
                                            {/* {set.room.map((r) => {
                                                            return (
                                                                <TableBody>
                                                                    <TableRow >
                                                                        <TableCell align="left">{r.roomNumber}</TableCell>
                                                                        <TableCell align="center">
                                                                            <TextField
                                                                                size="small"
                                                                                variant="outlined"
                                                                            />
                                                                        </TableCell>
                                                                        <TableCell align="left">
                                                                            <Button>Delete </Button>
                                                                        </TableCell>
                                                                    </TableRow>
                                                                </TableBody>
                                                            )
                                                        })} */}
                                            {/* </Table>
                                                </Card>
                                            )
                                        })} */}
                                        </div>
                                    </TableBody>
                                </Table>
                            </Card>

                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </ScrollView>


            {/* <Link to="/initial">
                <Button
                    onClick={addFloorandRoom}
                    className={classes.buttonsubmit}
                    variant="contained" color="primary" disableElevation
                    style={{ backgroundColor: '#485D84' }} >
                    Save
                </Button>
            </Link> */}


            <Link to="/initial">

                <div style={{ position: 'absolute', width: '100%', height: 200, top: 620 }}>
                    <Button onClick={addFloorandRoom}
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
                </div>
            </Link>

        </div>



    );


}



