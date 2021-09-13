import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Floorcom from './STRoomComp/Floorcom.js';
import axios from 'axios';
import { useEffect } from 'react';
import DisplayDialog from './DisplayDialog.js';
import DropFloor from '../../Components/Dropdown/DropFloor.js';
import Arraylist from '../../Components/Anouncement/Arraylist.js';

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '1163px',
        height: '232px',
        backgroundColor: 'red',
        position: "relative"
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
    texttitle: {
        fontSize: "19px",
        fontWeight: "bold",
        color: "#4A4A4A"
    }
}));

export default function STRoompage({ isOpened }) {
    const classes = useStyles();
    useEffect(() => {
        axios('/room/room-types/King David')
            .then(response => {
                console.log(response.data)
                setAllFloor(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);
    const [allFloor, setAllFloor] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false)


    const [dropFloorSelect, setDropFloorSelect] = useState("2")

    function findpositionElement() {
        for (var i = 0; i < allFloor.length; i++) {
            if (allFloor[i].floorName == dropFloorSelect) {
                return i
            }

        }
    }



    return (
        <div style={{ width: "100%", height: "100%" }}>
            <DisplayDialog
                trigger={buttonPopup}
                setTrigger={setButtonPopup} />

            <ScrollView
            // scrollEnabled={!buttonPopup}
            >
                <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                    <div>
                        <div style={{ height: '58px' }}></div>
                        <div className={classes.frame}>
                            <div className={classes.texttitle}>
                                Room Types
                            </div>

                          
                            <DropFloor
                                url='/announcement/type-announcements'
                            />

                                


                            <div className={classes.texttitle} style={{ position: 'absolute', bottom: 19 }}>
                                King Solomon
                            </div>
                        </div>
                        <div>
                            {/* {allFloor.filter(floor => floor.floorName == '2').map((item, index) => ( */}
                            {true ?
                                allFloor.map((item, index) => (

                                    <Floorcom
                                        // key={index}
                                        // getcurrentSelect = {currentSelect => setCurrentSelect(currentSelect)}
                                        setTrigger={setButtonPopup}
                                        floorName={item.floorName}
                                        allFloor={allFloor[index].rooms}
                                    />
                                ))
                                :
                                allFloor.filter(floor => floor.floorName == dropFloorSelect).map((item, index) => (
                                    <Floorcom
                                        // key={index}
                                        // getcurrentSelect = {currentSelect => setCurrentSelect(currentSelect)}
                                        setTrigger={setButtonPopup}
                                        floorName={item.floorName}
                                        allFloor={allFloor[findpositionElement()].rooms}
                                    />
                                ))}



                            {/* {allData.map((value, index) => {
                            return value.type === "Important News" ?
                                <ImpNews
                                    key={index}
                                    Name={value.title}
                                    img={value.imageUrl}
                                    //cell={value.description}
                                    Date={value.announceDate}
                                    ID={value.id} />
                                : null

                        })} */}

                        </div>

                    </div>
                </div>
            </ScrollView>
        </div>

    )
}
