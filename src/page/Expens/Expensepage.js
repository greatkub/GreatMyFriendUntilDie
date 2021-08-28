import React from 'react'
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
            {/* <div style={{width: '100%', backgroundColor: 'red', height: '108px'}}>
                Hivgbhjkhfjjkfkjf
            </div> */}
        </div>


    )
}