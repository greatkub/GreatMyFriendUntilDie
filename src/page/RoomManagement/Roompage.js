import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Floorsection from './Roomcomponent/Floorsection';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import DropBuilding from '../../Components/Dropdown/DropFloor';
import DropFloor from '../../Components/Dropdown/DropBuilding';
import DropStatus from '../../Components/Dropdown/DropStatus';
import { Button } from '@material-ui/core';
import DropIsAvailable from '../../Components/Dropdown/DropIsAvailable.js';

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '232px',
        position: "relative"
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
    texttitle: {
        fontSize: "19px",
        fontWeight: "bold",
        color: "#4A4A4A"
    },
    textDrop: {
        fontSize: 16,
        color: "#4A4A4A"

    },
    titleText: {
        fontSize: 19.4,
        fontWeight: 'bold',
        color: "#4A4A4A"

    },
    buttontop: {
        backgroundColor: '#485D84',
        borderRadius: "5px",
        textTransform: "none",
        fontSize: "13px",
        color: '#fff',
        fontWeight: 'normal',
        width: "107.6px",
        height: "31.5px",
        // position: "absolute",

        '&:hover': {
            backgroundColor: '#687690',
            color: '#fff',
            width: "107.6px",
            height: "31.5px"
        },
    }
}));

export default function Roompage({ isOpened }) {
    const classes = useStyles();
    const [allFloor, setAllFloor] = useState([]);

    const [keptDropFloor, setKeptDropFloor] = useState("")
    const [keptDropBuilding, setKeptDropBuilding] = useState("")

    useEffect(() => {
        axios('/room/room-beds/King Solomon')
            .then(response => {
                console.log(response.data)
                setAllFloor(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);

    return (
        <ScrollView>
            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div>

                    <div className={classes.frame}>
                        <Datetoday />
                        {/* <Button  style={{backgroundColor: 'blue'}} onClick={() => props.isOpened('Anna')}/> */}
                        <div className={classes.titleText}>
                            Room Management
                        </div>

                        <div style={{ display: "flex", position: "absolute", bottom: 70, width: '100%' }}>

                            <div style={{ position: 'relative', width: 161 }}>
                                <div className={classes.textDrop}>
                                    Search
                                </div>
                                <div style={{ height: 4 }} />

                                <input placeholder="" type="text" style={{ backgroundColor: 'white', height: 31.5, width: 161, fontSize: 16, color: '#4A4A4A', position: 'absolute' }}>

                                </input>
                            </div>

                            <div style={{ width: 12 }} />

                            <div>
                                <div className={classes.textDrop}>
                                    Building
                                </div>
                                <div style={{ height: 4 }} />

                                <DropBuilding />
                            </div>

                            <div style={{ width: 12 }} />

                            <div>
                                <div className={classes.textDrop}>
                                    Floor
                                </div>
                                <div style={{ height: 4 }} />

                                <DropFloor
                                    //url='/filter/filter-building/King David'
                                />
                                
                            </div>

                            <div style={{ width: 12 }} />


                            <div>
                                <div className={classes.textDrop}>
                                    Status
                                </div>
                                <div style={{ height: 4 }} />

                                <DropIsAvailable />
                            </div>

                            <div style={{ width: 12 }} />



                            <div style={{ position: 'absolute', right: 0, top: 28 }}>
                                <Button className={classes.buttontop} >
                                    Search
                                </Button>
                            </div>
                        </div>

                        <div className={classes.titleText} style={{ position: 'absolute', bottom: 0 }}>
                            Building
                        </div>
                    </div>

                    <div>
                        <div style={{ height: 20 }} />
                        {allFloor.map((item, index) => (
                            <Floorsection
                                floorName={item.floorName}
                                allFloor={allFloor[index].rooms}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ScrollView>

    )
}