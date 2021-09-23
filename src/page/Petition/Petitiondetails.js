
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import Table from '@material-ui/core/Table';

import axios from 'axios';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { IconButton } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import Datetoday from '../../Components/AllComponent/Datetoday';

import NumberFormat from 'react-number-format';
import moment from 'moment';

import { BrowserRouter as Rounter, Route, Link, NavLink, Switch, useParams, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },

    frame: {
        width: '1163px',
        //height: '232px',
        //backgroundColor: 'red',
    },

    heder: {
        width: '100%',
        padding: theme.spacing(1),
        marginTop: '4%',
    },

    Card: {
        width: '90%',
        marginLeft: '15%',
        padding: theme.spacing(1),
        margin: 'auto',
    },

    DateMove: {

        marginLeft: '15%',
        marginRight: '17%',
        marginTop: '-16%',
        padding: theme.spacing(1),
        margin: 'auto',
    },

    Hederpettition: {
        marginLeft: '-3%',
        marginTop: '-3%'
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

    media: {
        height: 322,
        width: 561,
        marginLeft: "20%",
        marginTop: 10,


        borderRadius: 8

    }

}));

/*export default function (props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [allroom, setAllroom] = useState([]);
  //const location = useLocation()
  //const { id } = useParams();
  useEffect(() => {
    axios("/petition/petitions" )
        .then(response => {
            console.log("hi" + response.data)
            setAllroom(response.data);
        })
        .catch(error => {
            console.log('Error getting fake data: ' + error);
        })
}, []);
console.log(allroom)
  return (
  <div className="container ">
    {allroom.map((rooms)=>{
      return(   
        <Card className={classes.Card} variant="outlined">
           {rooms.petition.map((pet)=>{
            return(
            <Table 
              aria-label="caption table">
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.heder}>
                         <h4>{pet.title} </h4>     
                        </TableCell>
                        <TableCell>
                            <IconButton aria-label="delete">
                                <EmojiObjectsIcon/>
                            </IconButton>  
                        </TableCell>
                        <TableCell>
                           <IconButton aria-label="delete">
                                <DeleteIcon/>
                            </IconButton>  
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell //value={pet.roomNumber} 
                          className={classes.heder}>
                            <p>Room {pet.roomNumber}</p>    
                        </TableCell>
                        <TableCell className={classes.heder}>
                            {pet.petitionDate} 
                        </TableCell>
                        <TableCell >
                            Status: {pet.statusInfo}
                        </TableCell> 
                    </TableRow>
                </TableHead>  
            <TableBody>
      
            <div className="container ">
                <Table>
                   <TableRow>
                      {pet.description} 
                    </TableRow>
                    <TableBody></TableBody>                     
                </Table>  
            </div>
      </TableBody>
    </Table>    
     )})}                
    </Card>
  )})}  
</div> 
  );
}*/

export default function Petitiondetails(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [allroom, setAllroom] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        //const petitiondetails=(id) =>{

        axios("/petition/petitions/" + id)
            .then(response => {
                console.log("hi" + response.data)
                setAllroom(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })

    }, [id]);

    const PetitionNote = (id) => {
        axios.post(`/petition/delete-petition/${id}`)
            .then(() => {
                setAllroom(
                    allroom.filter((row) => {
                        return row.id != id;
                    })
                );
            });
    };

    const Solve = (id) => {
        axios.post(`/petition/solve-petition/${id}`, {

            "Status": true

        }).then((response) => {
            window.location.href = `/notedetails/${id}`
            console.log(response);
        })
    };

    console.log(allroom)
    return (
        <div className="container ">
            <div className={classes.DateMove}>
                <Datetoday

                />
                <h5 className={classes.Hederpettition} id="newannouncetitle">
                    Petition Details
                </h5>
            </div>

            {allroom.map((row) => {
                return (
                    <Card className={classes.Card} variant="outlined">
                        {row.petition.map((x) => {
                            return (
                                <Table
                                    aria-label="caption table">
                                    <TableHead >
                                        <TableRow>
                                            <TableCell className={classes.heder}>
                                                <h4> {x.title} </h4>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton aria-label="delete">
                                                    <EmojiObjectsIcon
                                                        onClick={() => { Solve(id) }}
                                                    />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell>
                                                <IconButton aria-label="delete">
                                                    <DeleteIcon
                                                        onClick={() => { PetitionNote(id) }}
                                                    />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className={classes.heder}>
                                                <h6>{x.userFirstName}</h6>
                                                <h6>Room{x.roomNumber}</h6>
                                            </TableCell>
                                            <TableCell className={classes.heder}>
                                                {moment(x.petitionDate).format("L")}
                                            </TableCell>
                                            <TableCell >
                                                {x.statusInfo}
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        <div className="container ">
                                            <Table>
                                                <TableRow className={classes.heder}>
                                                    <h5> {x.description}</h5>
                                                </TableRow>
                                                <TableRow>
                                                    <img className={classes.media}
                                                        src={x.image} />
                                                </TableRow>
                                            </Table>
                                        </div>
                                    </TableBody>
                                </Table>
                            )
                        })}
                    </Card>
                )
            })}
        </div>
    );
}