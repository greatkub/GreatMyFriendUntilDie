import React from 'react'
import ComplexGrid from '../../Components/Setting/Setting'
import { Button } from '@material-ui/core'
import { styled } from '@material-ui/styles';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './../../Css/Setup/Settingpage.css'
import { Row } from 'react-bootstrap';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    flexGrow: {
        flex: '1',
    },
    button: {
        backgroundColor: '#485D84',
        borderRadius: "23.5px",
        textTransform: "none",
        fontSize: "13px",
        color: '#fff',
        fontWeight: 'normal',
        position: 'relative',
        margin: 'auto',
        float: 'right',
        left: 150,
        top: 0,
        '&:hover': {
            backgroundColor: '#485D84',
            color: '#fff',
            width: "74.5px",
            height: "27.5px"
        },
    },
    button2: {
        backgroundColor: '#485D84',
        borderRadius: "8px",
        textTransform: "none",
        fontSize: "19px",
        color: '#fff',
        fontWeight: 'normal',
        width: "407px",
        height: "43px",
        marginTop: 580,
        position: "absolute",
        margin: "30%",



        '&:hover': {
            backgroundColor: '#687690',
            color: '#fff',
        },


    },
    settingpaper: {
        position: "relative",
        width: 1000,
        height: 660,
        bottom: 0,
        marginbottom: 20,
        borderRadius: 5,
        backgroundColor: "#ffffff"
    },
    incontainer: {
        width: 876,
        height: 432,
        border: "1px solid #AAAAAA",
        margin: "auto",
        borderRadius: 10,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex"

    },
    topicsetup: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "26px",
        color: "#4A4A4A",
        paddingTop: "40px",
    },
    mdcolum: {
        width: 438,
        height: 432,
        position: "relative"
    },
    mdblue: {
        width: 438,
        height: 432,
        position: "relative"
    },
    textsetting: {
        color: "#485D84",
        fontWeight: "bold",
        fontSize: 16,
    },
    subtext: {
        fontSize: 16,
        color: "#AAAAAA",

    },
    scrollspace: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 190,
        transition: 'all 0.5s ease',
        marginTop: 60
    },
    scrollspace36: {
        height: "730px",
        width: '1163px',
        margin: 'auto',
        paddingLeft: 120,
        transition: 'all 0.5s ease',
        marginTop: 60

    },

})

export default function Settingpage({ isOpened }) {
    const classes = useStyles();

    return (
        <div style={{ width: '100%' }}>

            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>

                <div className={classes.settingpaper}>

                    <div className={classes.topicsetup}>
                        Setting
                    </div>

                    <div className={classes.incontainer}>

                        <div className={classes.mdcolum}>
                            <div style={{ height: " 47px" }} />
                            <Link to='/building_sp' style={{textDecoration:"none"}}>
                            <div>
                                <div className="circletext inline item marleft">
                                    1
                                </div>
                                <div>
                                    <div className={classes.textsetting}>
                                        Building
                                    </div>
                                    <div className={classes.subtext}>
                                        Manage and create building
                                    </div>
                                </div>
                            </div>
                            </Link>

                            <div style={{ height: " 50px" }}  />

                            <Link to='/floors_sp' style={{textDecoration:"none"}}>
                            <div>
                                <div className="circletext inline item marleft">
                                    2
                                </div>
                                <div>
                                    <div className={classes.textsetting}>
                                        Floors
                                    </div>
                                    <div className={classes.subtext}>
                                        Setting the floors of building
                                    </div>
                                </div>
                            </div>
                            </Link>

                            <div style={{ height: " 50px" }} />
                            <Link to='/rooms_sp' style={{textDecoration:"none"}}>

                            <div>
                                <div className="circletext inline item marleft">
                                    3
                                </div>
                                <div>
                                    <div className={classes.textsetting}>
                                        Rooms
                                    </div>
                                    <div className={classes.subtext}>
                                        Manage and set up room
                                    </div>
                                </div>
                            </div>
                            </Link>

                            <div style={{ height: " 50px" }} />

                            <Link to='/roomtype_sp' style={{textDecoration:"none"}}>

                            <div>
                                <div className="circletext inline item marleft">
                                    4
                                </div>
                                <div>
                                    <div className={classes.textsetting}>
                                        Room Types
                                    </div>
                                    <div className={classes.subtext}>
                                        Kind of room
                                    </div>
                                </div>
                            </div>
                            </Link>

                        </div>
                        <div className={classes.mdblue}>
                            <div style={{ height: " 47px" }} />

                            <Link to='/feetype_sp' style={{textDecoration:"none"}}>

                            <div>
                                <div className="circletext inline item marleft">
                                    5
                                </div>
                                <div>
                                    <div className={classes.textsetting}>
                                        Fee Types
                                    </div>
                                    <div className={classes.subtext}>
                                        Fee items to set the fee set
                                    </div>
                                </div>
                            </div>
                            </Link>

                            <div style={{ height: " 50px" }} />

                            <Link to='/feesets_sp' style={{textDecoration:"none"}}>

                            <div>
                                <div className="circletext inline item marleft">
                                    6
                                </div>
                                <div>
                                    <div className={classes.textsetting}>
                                        Fee Sets
                                    </div>
                                    <div className={classes.subtext}>
                                        A group of fee types
                                    </div>
                                </div>
                            </div>
                            </Link>

                            <div style={{ height: " 50px" }} />

                            <Link to='/bankacc_sp' style={{textDecoration:"none"}}>

                            <div>
                                <div className="circletext inline item marleft">
                                    7
                                </div>
                                <div>
                                    <div className={classes.textsetting}>
                                        Bank Account
                                    </div>
                                    <div className={classes.subtext}>
                                        Setting the channel to earn
                                    </div>
                                </div>
                            </div>
                            </Link>

                        </div>

                    </div>

                    <Button className={classes.button2}>
                        SAVE
                    </Button>



                </div>
            </div>
        </div>
    )
}
