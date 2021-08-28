import React from 'react'
import { IconButton, makeStyles, Paper } from '@material-ui/core'
import { Grid } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

    paperrow: {
        width: '195px',
        height: '85px',
        position: 'relative',
        boxShadow: 'none',
        borderRadius: '4px',
        border: '1px solid #AAAAAA',
        marginRight: '22.6px',
        marginBottom: '22.6px',
        // display: 'flex'



    },
    roomtext: {
        position: 'absolute',
        color: '#4A4A4A',
        fontSize: '22.6px',
        marginTop: "10px",
        fontWeight: 'bold',
        marginLeft: '26.6px'
    },
    infobutton: {
        position: 'absolute',
        width: '24px',
        height: '24px',
        marginTop: "14.5px",
        marginLeft: "1086px",
        color: "#485D84"
    },
    numinroom: {
        height: "20px",
        width: "61px",
        backgroundColor: '#D8D8D8',
        position: 'absolute',
        marginTop: '16px',
        marginLeft: '81px',
        borderRadius: '13px',
        fontSize: '13px',
        color: '#4A4A4A',
        fontWeight: '400',
        display: 'block'
    },
    personicon: {
        width: '18px',
        height: '18px',
        position: 'absolute',
        top: '1.2px',
        left: 6
    },
    aligninicon: {
        display: 'inline-block',
        marginTop: '0.5px',
        marginLeft: '25px'
    },
    typeroom: {
        fontSize: '13px',
        color: '#969696',
        fontWeight: 400,
        position: 'absolute',
        top: 50,
        marginLeft: '17.8px'

    },
    roomstatus: {
        height: '28.3px',
        width: '2.5px',
        backgroundColor: 'red',
        borderRadius: 4,
        position: 'absolute',
        marginLeft: '14.5px',
        marginTop: '15.3px'
    }




}));

export default function Roomsection() {
    const classes = useStyles()

    return (
        <Link to='/personinfo'>

            <Paper className={classes.paperrow}>
                <div className={classes.roomstatus}>

                </div>
                <div className={classes.roomtext}>
                    101
                </div>
                <div className={classes.numinroom}>
                    <PersonIcon className={classes.personicon} />
                    <div className={classes.aligninicon}>1 / 2</div>
                </div>
                <div className={classes.typeroom}>
                    Standard
                </div>

                <IconButton style={{ height: '32px', width: '32px', position: 'absolute', top: 44, left: 148 }}>
                    <ExitToAppIcon style={{ height: '32px', width: '32px', color: 'rgb(237, 237, 237)' }} />
                </IconButton>

            </Paper>
        </Link>
    )
}
