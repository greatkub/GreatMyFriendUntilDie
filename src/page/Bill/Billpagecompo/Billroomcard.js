import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

    paperrow: {
        margin: 'auto',
        maxWidth: '1163px',
        height: '54px',
        position: 'relative',
        boxShadow: 'none',
        borderBottom: '1px solid #D8D8D8',
        borderRadius: '0px'
    },
    newdetext: {
        position: 'absolute',
        color: '#4A4A4A',
        fontSize: '13px',
        marginTop: "17px",
        fontWeight: '400'
    },
    infobutton: {
        position: 'absolute',
        width: '24px',
        height: '24px',
        marginTop: "14.5px",
        marginLeft: "1086px",
        color: "#485D84"
    },





}));

export default function Billroomcard(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.paperrow}>
            <div className={classes.newdetext} style={{ left: 45 }}>
                {/* {props.roomid} */}
                {props.roomnum}
            </div>
            <div className={classes.newdetext} style={{ left: 170 }}>
                {props.date}
            </div>
            <div className={classes.newdetext} style={{ right: 815 }}>
               {props.rent}
            </div>
            <div className={classes.newdetext} style={{ right: 666 }}>
               {props.electric}
            </div>
            <div className={classes.newdetext} style={{ right: 542 }}>
               {props.water}
            </div>
            <div className={classes.newdetext} style={{ right: 414 }}>
               {props.other}
            </div>
            <div className={classes.newdetext} style={{ right: 297.5 }}>
               {props.totals}
            </div>
            <div className={classes.newdetext} style={{ right: 170 }}>
                {props.status}
            </div>

            <Link  to='/billdetails'>
                <IconButton className={classes.infobutton}>
                    <InfoOutlinedIcon />
                </IconButton>
            </Link>
        </Paper>
    );
}


