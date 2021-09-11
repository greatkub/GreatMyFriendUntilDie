import React from 'react'
import Billfloorcard from './Billpagecompo/Billfloorcard'
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
        paddingLeft: 110


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

    }
}));

export default function Billpage({isOpened}) {
    const classes = useStyles();
    
    return (
        <ScrollView>
            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div>
                    <div className={classes.frame}>
                        <Datetoday />
                    </div>
                    <div>
                        <Billfloorcard />
                    </div>
                </div>
            </div>
        </ScrollView>

    )
}
