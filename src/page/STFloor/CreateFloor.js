import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import DeleteIcon from "@material-ui/icons/Delete";

//import Savebtn from "../../Components/Button/Save";

import axios from 'axios';
import { IconButton } from 'material-ui';
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },

    heder: {
        width: '100%',
        padding: theme.spacing(1),
        marginTop: '4%',
    },

    Card: {
        width: '75%',
        padding: theme.spacing(3),
        margin: 'auto',
    },

    Cards: {
        width: '90%',
        padding: theme.spacing(0),
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
    buttonsubmit: {
        width: "407px",
        height: "42.8px",
        position: "absolute",
        top: 620,
        left: "35%"
    },

    buttongenerate: {
        width: "157px",
        height: "30.8px",
        //position: "absolute",
        //top: 620,
        //left: "35%"
    },
    //fame
    mainFame: {
        width: 755,
        minHeight: 721,
        backgroundColor: '#FFFFFF',
        position: 'relative',
        border: '0.75px solid #AAAAAA',
        borderRadius: 5,
        // flexWrap: 'wrap'

    },
    mainFameHeader: {
        height: 85,
        width: "100%",
        borderBottom: '0.75px solid #AAAAAA'
    },
    inFame: {
        width: 605,
        minHeight: 141.5,
        position: 'relative',
        borderRadius: '5px',
        border: '0.75px solid #AAAAAA'

    },
    inFameHeader: {
        width: "100%",
        height: 86.5,
        borderBottom: '0.75px solid #AAAAAA',

    },
    //row in fame
    rominfame: {
        width: '100%',
        height: 55,
        position: 'relative'
    },
    //wrap infame
    wrapfame: {
        width: 605,
        minHeight: 360,
        margin: 'auto',
        position: 'relative'
    },
    //text
    title: {
        fontSize: '22.6px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        position: 'absolute',
        top: 26.6,
        left: 42
    },
    title2: {
        fontSize: '19.4px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        position: 'absolute',

    },
    title3: {
        fontSize: '16.18px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        left: 41,
        top: 13,
        position: 'absolute'

    },
    title4: {
        fontSize: '13px',
        color: '#4A4A4A',
        fontWeight: 'bold',
        top: 46,
        position: 'absolute'
    },
    title5: {
        fontSize: '13px',
        color: '#4A4A4A',
        position: 'absolute'
    },

    //input
    inputSize: {
        height: 31.5,
        width: 189,
        fontSize: '13px',
        color: '#4A4A4A',
        position: 'relative',
        margin: 'auto'
    },

    inputHeadNumbox: {
        width: 103.5,
        height: 31.5,
        fontSize: 13
    },
    submitHeadNumBt: {
        width: 103.5,
        height: 31.5,
        backgroundColor: '#485D84',
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 400,
        textTransform: 'none'

    },
    //button
    buttonDelete: {
        width: 28,
        height: 28,
        borderRadius: 14.1,
        backgroundColor: '#F8F8F8',
        position: 'relative'
    },


    //decor
    decorLeftRight: {
        width: 41
    },

    grabWidth: {
        width: 17.7
    },
    makeCenter: {
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: 3
    }



}));



export default function CreateFloor(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [previous, setPrevious] = useState({});

    const [inputfloorToAdd, setInputfloorToAdd] = useState(null)
    const [committedfloorToAdd, setCommittedFloorToAdd] = useState([]);
    const [numOfFloor, setNumOfFloor] = useState(0)
    const [presentArrayFloor, setPresentArrayFloor] = useState([])


    const [keptSample, setKeptSample] = useState([])
    const [isLoading, setLoading] = useState(true)
    const { id } = useParams()
    const roomObject = {
        "room_number": "101"
    }



    const [buildingName, setBuildName] = useState([])

    useEffect(async () => {
        console.log(id + "in Use Eff first row")
        await axios(`/building/building/id/${id}`)
            .then(response => {
                console.log(response.data, "in response")
                setBuildName(response.data[0].buildingName)
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })

        await axios(`/building/floors/${id}`)
            .then(response => {
                console.log(response.data, "in getAllCurrentFloor")

                setPresentArrayFloor(response.data)

            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
        
        await axios(`/building/floors/${id}`)
            .then(response => {
                setNumOfFloor(response.data)
                console.log(response.data.length)
                // console.log(response.data.length)
                setLoading(false)
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })

    }, []);

    

    // useEffect(async () => {
    //     await axios(`/building/floors/${id}`)
    //         .then(response => {
    //             console.log(response.data.length)
    //         })
    //         .catch(error => {
    //             console.log('Error getting fake data: ' + error);
    //         })

    // }, []);



    function habdlerClick() {
        
        console.log("This all floor" + inputfloorToAdd)
        setCommittedFloorToAdd(inputfloorToAdd);

        console.log(numOfFloor.length)

        if(numOfFloor.length > 0) {
            const recentFloor = numOfFloor[numOfFloor.length-1].floorNumber

            console.log("true")
            console.log("hhhh")
            console.log(numOfFloor)
            console.log("jjjj")
            for (var i = 0; i < inputfloorToAdd; i++) {
                const sampleObject = {
                    "FloorName": `${i + recentFloor + 1}`,
                    "FloorNumber": i + recentFloor + 1,
                    "Rooms": [],
    
                }
                keptSample.push(sampleObject)
            }
            props.keptArray(keptSample)
            console.log(keptSample)
    
        }else {
            console.log("false")
            const recentFloor = 0

            console.log("hhhh")
            console.log(numOfFloor)
            console.log("jjjj")
            for (var i = 0; i < inputfloorToAdd; i++) {
                const sampleObject = {
                    "FloorName": `${i + recentFloor + 1}`,
                    "FloorNumber": i + recentFloor + 1,
                    "Rooms": [],
    
                }
                keptSample.push(sampleObject)
            }
            props.keptArray(keptSample)
            console.log(keptSample)
    
        }
        

        // const recentFloor = numOfFloor[numOfFloor.length-1].floorNumber
        

        // console.log("hhhh")
        // console.log(numOfFloor)
        // console.log("jjjj")
        // for (var i = 0; i < inputfloorToAdd; i++) {
        //     const sampleObject = {
        //         "FloorName": `${i + recentFloor + 1}`,
        //         "FloorNumber": i + recentFloor + 1,
        //         "Rooms": [],

        //     }
        //     keptSample.push(sampleObject)
        // }
        // props.keptArray(keptSample)
        // console.log(keptSample)


    }
    // const [people, setPeople] = useState(data);

    // const handleRemove = (id) => {
    //     const newPeople = keptSample.filter((keptSample) => {
    //         // != id;
    //         // setKeptSample(keptSample);

    //     });
    // };

    const deleteHandler = (index) => {
        // Assuming that the index means the index of an item which is to be deleted.
        const newList = keptSample.filter((item) => keptSample.indexOf(item) !== index);
        console.log(newList)
        setKeptSample(newList);
    }



    // function habdlerClick() {
    //     console.log("This all floor" + inputfloorToAdd)
    //     setCommittedFloorToAdd(inputfloorToAdd);


    //     for (var i = 0; i < inputfloorToAdd; i++) {


    //         const sampleObject = {
    //             "FloorName": `${i + 1}`,
    //             "FloorNumber": i + 1,
    //             "Rooms": [],

    //         }


    //         keptSample.push(sampleObject)

    //     }
    //     // sampleObject.FloorName = 3

    //     props.keptArray(keptSample)
    //     console.log(keptSample)

    //     // console.log(sampleObject)


    // }


    function deleteItem(i) {
        // const { items } = this.state;
        keptSample.splice(i, 1);
        // this.setState({ items });
        setKeptSample(keptSample)
    }

    return isLoading == false && (
        <div style={{ width: '100%' }}>
            <ScrollView>

                <div style={{ position: 'relative', margin: 'auto' }}>
                    <div className="container" style={{ position: 'relative', margin: 'auto' }}>
                        <div style={{ width: '100%', height: '650px' }}>


                            <div className={classes.mainFame}>

                                <div className={classes.mainFameHeader}>

                                    <div className={classes.title} >
                                        Floors
                                    </div>
                                    {/* <button onClick={() => console.log(arrayFloor)}>

</button> */}

                                    <div style={{
                                        display: 'flex', right: 0, position: 'absolute', top: 26.6,
                                        right: 42
                                    }}>
                                        <input className={classes.inputHeadNumbox}
                                            // style={{height: 10}}
                                            placeholder="No. of Floor"
                                            // type="number"
                                            // value={inputfloorToAdd}
                                            onChange={(e) => setInputfloorToAdd(parseInt(e.currentTarget.value))}
                                        />

                                        <div className={classes.grabWidth} />

                                        <Button className={classes.submitHeadNumBt}
                                            size="small" variant="contained" color="primary" disableElevation
                                            style={{ backgroundColor: '#485D84' }}
                                            onClick={() =>
                                                habdlerClick()
                                            }
                                        >Generate</Button>
                                    </div>


                                </div>
                                <div style={{ height: 30 }}></div>

                                <div className={classes.wrapfame} >

                                    <div className={classes.inFame}>
                                        <div className={classes.inFameHeader} style={{ position: 'relative' }}>
                                            <div className={classes.title2} style={{ position: 'relative', marginLeft: 41, marginTop: 10 }}>
                                                {buildingName}
                                            </div>
                                            {/* display flex */}
                                            <div style={{ display: 'flex' }}>
                                                <div className={classes.title4} style={{ left: 41 }}>
                                                    Floor
                                                </div>
                                                <div className={classes.makeCenter} style={{
                                                    fontSize: '13px',
                                                    color: '#4A4A4A',
                                                    fontWeight: 'bold',
                                                    top: 46,
                                                    position: 'absolute'
                                                }}>
                                                    Edit Name Floor
                                                </div>

                                                <div className={classes.title4} style={{ right: 41 }}>
                                                    Delete
                                                </div>
                                            </div>
                                        </div>

                                        {presentArrayFloor.length > 0 && presentArrayFloor.map((value, index) => (
                                            

                                            <div className={classes.rominfame} style={{ borderBottom: '0.75px solid #AAAAAA' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <div className={classes.title5} style={{ left: 50, top: 18 }} numfloor={value.floorNumber}>
                                                        {value.floorName}

                                                    </div>
                                                    <input className={classes.inputSize} style={{ position: 'absolute', left: 206, top: 12 }}
                                                        placeholder="Number of Room" placeholder={"Floor " + value.floorNumber} onChange={e => value.floorName = e.target.value} />

                                                    <div className={classes.buttonDelete} style={{ right: 48, top: 14, position: 'absolute' }}>
                                                        <DeleteIcon style={{ color: '#4A4A4A', position: 'absolute', width: 16, height: 16, top: 6, right: 6 }}
                                                            onClick={() => deleteHandler(index)} />
                                                    </div>

                          
                                                </div>
                                            </div>

                                        ))}

                                        {keptSample.map((value, index) => (
                                            

                                            <div className={classes.rominfame} style={{ borderBottom: '0.75px solid #AAAAAA' }}>
                                                <div style={{ display: 'flex' }}>
                                                    <div className={classes.title5} style={{ left: 50, top: 18 }} numfloor={`floor${index}`}>
                                                        {/* {index + 1} */}
                                                        {value.FloorName}

                                                    </div>
                                                    <input className={classes.inputSize} style={{ position: 'absolute', left: 206, top: 12 }}
                                                        placeholder="Number of Room" placeholder={"Floor " + value.FloorNumber} onChange={e => value.FloorName = e.target.value} />

                                                    <div className={classes.buttonDelete} style={{ right: 48, top: 14, position: 'absolute' }}>
                                                        {/* <IconButton onClick={() => deleteHandler(index)}> */}
                                                        <DeleteIcon style={{ color: '#4A4A4A', position: 'absolute', width: 16, height: 16, top: 6, right: 6 }}
                                                            onClick={() => deleteHandler(index)} />
                                                        {/* </IconButton> */}
                                                    </div>

                          
                                                </div>
                                            </div>

                                        ))}

                                     
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </ScrollView>
            <div style={{ position: 'absolute', width: '100%', height: 200, top: 620 }}>
                <Link to={`/settingroom/${id}`} onClick={() => props.keptArray(keptSample)}>

                    <Button
                        style={{
                            backgroundColor: "#485D84", width: 406,
                            height: 42.87, color: "#FFFFFF", fontSize: 21, zIndex: 1,
                            position: 'absolute', left: 540, top: 40
                        }}>
                        Next
                    </Button>

                    <div style={{
                        backgroundColor: '#385CA8', opacity: 0.5
                        , width: "100%", height: 200, position: 'relative'
                    }}>

                    </div>

                </Link>


            </div>
        </div>

    );
}

