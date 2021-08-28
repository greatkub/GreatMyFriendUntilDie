import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ScrollView } from 'react-native';
import Datetoday from '../../Components/AllComponent/Datetoday';
import { Paper } from '@material-ui/core';
import { red } from 'chalk';
import { Row } from 'react-bootstrap';
import Petitiontable from './Petitioncompo/Petitiontable';
import { Divider } from '@material-ui/core';

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
    mainfame: {
        width: '1163px',
        height: '567px',
        backgroundColor: 'blue',
        position: 'relative'
    },
    miniXfame: {
        width: '352px',
        height: '147px',
        backgroundColor: '#ffffff',
        position: 'relative',
        backgroundColor: '#ffffff'
    },
    Xfame: {
        width: '731px',
        height: '395px'
    }
    ,
    Yfame: {
        width: "407px",
        height: "567px",
        position: "absolute",
        backgroundColor: "#ffffff",
        right: 0
    },
    textDash: {
        fontSize: 19,
        color: "#4A4A4A",
        fontWeight: 'bold'
    },
    textRoom: {
        fontSize: 26,
        color: "#4A4A4A",
        fontWeight: 'bold'
    },
    normaltext: {
        fontSize: 16,
        color: "#4A4A4A",
    },
    circleborder: {
        width: 18,
        height: 18,
        borderRadius: '9px',
        marginRight: 20,
        marginLeft: 40
    },
     papercard: {
        width: '1163px',
        boxShadow: "0px 0px 0px #E8E8E8",
        minHeight: '233px',
        //   margin: 'auto',
        marginLeft: 0,
        marginBottom: "16px",
        //   backgroundColor:'green',
        position: 'relative',
        borderRadius: 5

    },
    headfloor: {
        // display: 'block',
        color: '#4A4A4A',
        fontWeight: 'bold',
        fontSize: '16px',
        posiotion: 'absolute',
        marginLeft: '45px',
        paddingTop: '14px'
    },
    headfloor: {
        // display: 'block',
        color: '#4A4A4A',
        fontWeight: 'bold',
        fontSize: '16px',
        posiotion: 'absolute',
        marginLeft: '45px',
        paddingTop: '14px'
    },


}));

export default function Petitionpage({ isOpened }) {
    const classes = useStyles();



    return (
        <div style={{ width: '100%' }}>
            <ScrollView>
            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div>
                    <div className={classes.frame}>
                        <Datetoday />

                        
                        Petition
                    </div>
                    <div>
                    <Paper className={classes.papercard}>
                        <div className={classes.headfloor} >
                            Select All
                            <div style={{ position: 'absolute', paddingTop: '6px' }}>

                             
                            </div>
                        </div>
                        <Divider style={{ backgroundColor: "#AAAAAA", marginTop: "50px" }} />
                        
                       {/* {floors.room.map((sub) => { 
                            return(
                            <Exroomcard 
                                roomid = {sub.roomid}
                            />
                            )
                        })} */}
                    </Paper>
                    </div>
                </div>
            </div>
            </ScrollView>

        </div>


    )
}
