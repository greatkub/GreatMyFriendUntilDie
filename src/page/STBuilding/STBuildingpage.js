import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cardsection from './Cardsection';
import { ScrollView } from 'react-native';


const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '113px',
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
    frame: {
        width: "100%",
        height: "556.5px",
        backgroundColor: "#FFFFFF",
        borderRadius: "5px"
    },
    title: {
        fontSize: "19.4px",
        color: "#4A4A4A",
        fontWeight: "bold"
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
    },
    fametop: {
        height: "123px",
        width: "100%",
        position: "relative"
    },
    allfame: {
        width: "1163px",
        height: "679.5px"
    }

}));

export default function STBuildingpage({ isOpened }) {

    const classes = useStyles();
    const [building, setBuilding] = useState([])

    useEffect(() => {
        axios('/building/buildings')
            .then(response => {
                console.log(response.data)
                setBuilding(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);

    return (
        <div style={{ width: '100%' }}>

            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div className={classes.allfame}>
                    <div className={classes.fametop}>
                        <div style={{ display: "flex", paddingTop: "52px" }}>
                            <div className={classes.title}>
                                Residence
                            </div>
                            <div style={{ width: "41px" }} />
                            <Link to='/addbuilding' style={{ textDecoration: "none" }}>
                                <Button className={classes.buttontop}>
                                    Add Building
                                </Button>
                            </Link>
                        </div>

                    </div>
                    <div className={classes.frame} style={{ display: "flex", flexWrap: 'wrap', paddingLeft: 79, paddingTop: 48.54 }}>
                        <ScrollView style={{ width: "100%", height: "100%" }}>
                            <div style={{ display: "flex", flexWrap: 'wrap' }}>
                                {building.map((value, index) => (
                                    <Cardsection
                                        buildingName={value.buildingName}
                                        numberOfRoom={value.numberOfRoom}
                                        tenant={value.tenant}
                                        overdue={value.overdue}
                                        vacant={value.vacant} 
                                        Manage={

                                            <Link to='/setting2' style={{ textDecoration: "none" }}>
                                            <Button className={classes.buttontop}>
                                              Manage
                                            </Button>
                                        </Link>
                                        }
                                             
                                        Edit={
                                            <Link to={`editbuilding_sp/${value.id}`}  
                                                  style={{ textDecoration: "none" }}>
                                            <Button className={classes.buttontop}>
                                              Edit
                                            </Button>
                                        </Link>
                                        }              
                                    />
                                ))}
                              
                            </div>

                        </ScrollView>
                    </div>
                </div>
            </div>
        </div>

    )
}
