import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Floorsection from './Roomcomponent/Floorsection';
import { Link } from 'react-router-dom';
import { Divider, Paper } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '105px',
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
    paper: {
        width: '1163px',
        height: '494px',
        boxShadow: "0px 0px 0px #E8E8E8",
        borderRadius: 5,
        border: "1px solid #AAAAAA",
    },
    fameinfo: {
        width: 670,
        height: 310,
        display: 'absolute',
        float: 'right',
        marginTop: '28px',
        marginRight: '127px'
    },
    famerow: {
        height: "59.86px",
        width: "100%",
        display: "flex",
        position: "relative"

    },
    grab: {
        height: "9.7px",
        width: "100%",
        backgroundColor: "white"
    },
    famerow2: {
        height: "31.55px",
        width: "100%",
        position: 'relative',
        display: "flex"

    },
    input_md: {
        height: "31.551px",
        width: "100%",
        fontSize: "13px",
        color: "#4A4A4A",
    },
    input_sm: {
        width: "156.13px",
        height: "100%",
        fontSize: "13px",
        color: "#4A4A4A",

    },
    input_full: {
        width: "100%",
        height: "31.5px",
        fontSize: "13px",
        color: "#4A4A4A",
        postion: "absolute",
        marginTop: 28.5
    },
    grab4: {
        width: "16.18px"
    },
    block_md: {
        width: "327.645px",
        height: "100%",
    },
    headname: {
        fontSize: "16px",
        color: "#4A4A4A",
        position: "absolute"
    },
    block_sm2: {
        width: "155.429px",
        height: "100%",
    }
}));

export default function Personalinfopage({ isOpened }) {
    const classes = useStyles()
    return (
        <ScrollView>
            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div>
                    <div className={classes.frame}>
                        <Datetoday />
                    </div>
                    <Paper className={classes.paper}>
                        <div style={{ height: '111.6px', width: '100%' }}>

                        </div>
                        <Divider />
                        <div className={classes.fameinfo}>
                            <div className={classes.famerow}> {/*   First Name, Last Name */}
                                <div className={classes.block_md}>
                                    <div className={classes.headname}>
                                        First Name
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <input className={classes.input_md}>

                                    </input>
                                </div>
                                <div className={classes.grab4} />
                                <div className={classes.block_md}>
                                    <div className={classes.headname}>
                                        Last Name
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <input className={classes.input_md}>

                                    </input>
                                </div>
                            </div>
                            <div className={classes.grab} />
                            <div className={classes.famerow}> {/*  Date of Birth, Gender, Identification Number / Passport Number */}

                                <div className={classes.block_sm2}>
                                    <div className={classes.headname}>
                                        Date of Birth
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <input className={classes.input_md}>

                                    </input>
                                </div>
                                <div className={classes.grab4}/>
                                <div className={classes.block_sm2}>
                                    <div className={classes.headname}>
                                        Gender
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <input className={classes.input_md}>

                                    </input>
                                </div>
                                <div className={classes.grab4} />
                                <div className={classes.block_md}>
                                    <div className={classes.headname}>
                                        Identification Number / Passport Number
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <input className={classes.input_md}>

                                    </input>
                                </div>
                            </div>
                            <div className={classes.grab} />
                            <div className={classes.famerow} > {/*  Address */}
                                <div className={classes.headname}>
                                    Address
                                </div>
                                <input className={classes.input_full}></input>
                            </div>
                            <div className={classes.grab} />

                            <div className={classes.famerow2}> {/*   District, Sub-district, Province, Zip code */}
                                <input className={classes.input_sm} placeholder="District">

                                </input>
                                <div className={classes.grab4} />
                                <input className={classes.input_sm} placeholder="Sub-district">

                                </input>
                                <div className={classes.grab4} />
                                <input className={classes.input_sm} placeholder="Province">

                                </input>
                                <div className={classes.grab4} />
                                <input className={classes.input_sm} placeholder="Zip code" >

                                </input>
                            </div>

                            <div className={classes.grab} />

                            <div className={classes.famerow}> {/*   Phone Number, Email */}
                                <div className={classes.block_md}>
                                    <div className={classes.headname}>
                                        Phone Number
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <input className={classes.input_md}>

                                    </input>
                                </div>
                                <div className={classes.grab4} />
                                <div className={classes.block_md}>
                                    <div className={classes.headname}>
                                        Email
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <input className={classes.input_md}>

                                    </input>
                                </div>
                            </div>

                        </div>

                    </Paper>
                </div>
            </div>
        </ScrollView>

    )
}
