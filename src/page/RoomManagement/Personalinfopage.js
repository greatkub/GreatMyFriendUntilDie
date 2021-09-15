import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Datetoday from '../../Components/AllComponent/Datetoday.js'
import { ScrollView } from 'react-native';
import { useState } from 'react';
import Floorsection from './Roomcomponent/Floorsection';
import { Link } from 'react-router-dom';
import { Divider, Paper } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import { TrendingUpTwoTone } from '@material-ui/icons';
import DropGender from '../../Components/Dropdown/DropGender.js';

// import SegmentedControl from 'rn-segmented-control';
// import { SegmentedControl } from 'segmented-control'
// import SegmentedControl from '@react-native-segmented-control/segmented-control';

//this 3 import has to unibstall




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
        position: 'relative'
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
        fontSize: "16px",
        color: "#4A4A4A",
        border: "1px solid #D3D3D3",
        marginTop: 24,
        borderRadius: 4
    },
    input_sm: {
        width: "156.13px",
        height: "100%",
        fontSize: "16px",
        color: "#4A4A4A",
        border: "1px solid #D3D3D3",
        marginTop: 24,
        borderRadius: 4

    },
    input_full: {
        width: "100%",
        height: "31.5px",
        fontSize: "16px",
        color: "#4A4A4A",
        postion: "absolute",
        marginTop: 28.5,
        border: "1px solid #D3D3D3",
        marginTop: 24,
        borderRadius: 4
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

    },
    img: {
        position: "absolute",
        width: 138,
        height: 162,
        borderRadius: 5,
        top: 140,
        left: 112
    },
    emptyimg: {
        position: "absolute",
        width: 138,
        height: 162,
        borderRadius: 5,
        top: 140,
        left: 112,
        border: "1px solid #707070",
        backgroundColor: "#E2E2E2"
    },
    titleText: {
        fontSize: 19.4,
        fontWeight: 'bold',
        color: "#4A4A4A"

    },
    btmBelow: {
        width: 406,
        height: 42.8,
        backgroundColor: "#485D84",
        textTransform: "none",
        color: '#ffffff',
        fontSize: 17,
        position: "absolute",
        left: 390,
        top: 520
    },
    segmentbtnBlue: {
        width: 161.8,
        height: 31.5,
        backgroundColor: "#8396B9",
        color: "#FFFFFF",
        textTransform: "none",

    },
    segmentbtnWhite: {
        width: 161.8,
        height: 31.5,
        backgroundColor: "#FFFFFF",
        color: "##4A4A4A",
        textTransform: "none",

    },
    segwrap: {
        border: '1px solid #AAAAAA'
        , flex: 'wrap'
        , display: 'flex'
        , width: 'fit-content'
        , borderRadius: 5
    },
    btmBelowRed: {
        width: 406,
        height: 42.8,
        backgroundColor: "#A54C44",
        textTransform: "none",
        color: '#ffffff',
        fontSize: 17,
        position: "absolute",
        left: 390,
        top: 520
    },

}));

export default function Personalinfopage({ isOpened }) {
    const classes = useStyles()


    const [name, setName] = useState("")

    const { id } = useParams();

    const [allData, setAllData] = useState([])

    //groupsubmit//
    const [addFirstName, setAddFirstName] = useState("")
    const [addLastName, setAddLastName] = useState("")
    const [addDateBirth, setAddDateBirth] = useState("")
    const [addGender, setAddGender] = useState("")
    const [addIdCard, setAddIdCard] = useState("")
    const [addAddress, setAddAddress] = useState("")
    const [addDistrict, setDistrict] = useState("")
    const [addSubDistrict, setSubDistrict] = useState("")
    const [addProvince, setProvince] = useState("")
    const [addZip, setZip] = useState("")
    const [addPhone, setPhone] = useState("")
    const [addEmail, setEmail] = useState("")

    const [currentUserId, setCurrentUser] = useState(0)


    const idroom = 3


    const [Edit, setEdit] = useState(false)

    const [currentBed, setNewCurrentBed] = useState(0)

    const [bedName, setBedName] = useState("Bed A")

    const api = axios.create({
        baseURL: `/user/add-user-bed/room/${id}`
    })

    const apidelete = axios.create({
        baseURL: `/user/delete-user/${currentUserId}`
    })

    const deleteTenant = async () => {

        
        let res = await apidelete.post('/').then(response => {
            console.log(response)
            console.log('Etherea: ');
        })
        .catch(error => {
            console.log('Eta: ' + error);
        })
    }

    

    const addTenant = async () => {
        let res = await api.post('/', {
            "Address": addAddress,
            "District": addDistrict,
            "SubDistrict": addSubDistrict,
            "Province": addProvince,
            "ZipCode": addZip,
            "Email": addEmail,
            "PhoneNumber": addPhone,
            "User": {
                "first_name": addFirstName,
                "last_name": addLastName,
                "gender_id": 1,
                "birthdate": "1999-02-10",
                "identificationNo": addIdCard,
                "profile_url": "https://firebasestorage.googleapis.com/v0/b/habitat-34ee0.appspot.com/o/16473212_1918745521679927_8257466333135884922_n.jpeg?alt=media&token=a4da4376-5f9b-4657-a5fd-1cc0b4f7993d"
            },
            "Bed": {
                "bed_name": bedName,
                "room_id": parseInt(id)
            }
        })
    }

    function handleClick0() {
        if (allData.length > 0) {
            setCurrentUser(allData[currentBed].userId)
            setEdit(true)
        }else{
            setEdit(false)
        }
        setNewCurrentBed(0)
        
        setBedName("Bed A")
    }


    function handleClick1() {
        if (allData.length > 1 ) {
            setEdit(true)

            setCurrentUser(allData[currentBed].userId)

        }else{
            setEdit(false)
        }

        setNewCurrentBed(1)
        setBedName("Bed B")

    }

    function handleClick2() {
        if (allData.length > 2) {
            setEdit(true)
            setCurrentUser(allData[currentBed].userId)

        }else{
            setEdit(false)
        }
        setNewCurrentBed(2)
        setBedName("Bed C")
    }


    
    useEffect(() => {

        axios(`/user/user-room/${id}`)
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
                setCurrentUser(allData[currentBed].userId)
                console.log(currentUserId)

            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
            
            
            
    }, []);

    function handleChange(e) {
        console.log(e.target.value);
    }

    function handleSave() {
        setEdit(!Edit)
        console.log(Edit)
        if(Edit == true) {
            addTenant()
        } else {
            console.log("in else delete Tenant")
            deleteTenant()
        }

    }






    return (
        <ScrollView>
            <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                <div>

                    <div className={classes.frame}>
                        <Datetoday />
                        <div className={classes.titleText}>
                            {allData.length > 0 ? `King Solomon • Room: ${allData[0].room[0].roomNumber}` : "" }
                          
                        </div>
                        <button onClick={()=> console.log(allData)}>

                        </button>

                    </div>
                    <Paper className={classes.paper}>
                        <div style={{ height: '111.6px', width: '100%' }}>

                            <div className={classes.titleText} style={{ paddingTop: 20, paddingLeft: 38 }}>
                                Bed
                            </div>
                            <div style={{ paddingTop: 8, paddingLeft: 38 }}>
                                <div className={classes.segwrap} >

                                    <Button className={currentBed == 0 ? classes.segmentbtnBlue : classes.segmentbtnWhite} onClick={() => handleClick0()}>
                                        {allData.length > 0 ? allData[0].room[0].bedName : "Vacant"}
                                    </Button>
                                    <Button className={currentBed == 1 ? classes.segmentbtnBlue : classes.segmentbtnWhite} onClick={() => handleClick1()}>
                                        {allData.length > 1 ? allData[1].room[0].bedName : "Vacant"}

                                    </Button>
                                    <Button className={currentBed == 2 ? classes.segmentbtnBlue : classes.segmentbtnWhite} style={{ display: 'none' }} onClick={() => handleClick2()}>
                                        {allData.length > 2 ? allData[2].room[0].bedName : "Vacant"}

                                    </Button>
                                </div>
                            </div>


                        </div>

                        <Divider />
                        <div>
                            <img className={allData.length > 0 && Edit == false ? classes.img : classes.emptyimg} alt="complex" src={allData.length > 0 && Edit == false ? allData[0].profileURL : ""} />

                        </div>
                        <div className={classes.fameinfo}>
                            <div className={classes.famerow}> {/*   First Name, Last Name */}
                                <div className={classes.block_md}>
                                    <div className={classes.headname}>
                                        First Name
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddFirstName(e.currentTarget.textContent)} >
                                        {allData.length > 0  && Edit == false ? allData[currentBed].firstName : ""}
                                    </div>


                                </div>
                                <div className={classes.grab4} />
                                <div className={classes.block_md}>
                                    <div className={classes.headname}>
                                        Last Name
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddLastName(e.currentTarget.textContent)}>
                                        
                                      {allData.length > 0 && Edit == false ? allData[currentBed].lastName : ""}

                                    </div>
                                </div>
                            </div>
                            <div className={classes.grab} />
                            <div className={classes.famerow}> {/*  Date of Birth, Gender, Identification Number / Passport Number */}

                                <div className={classes.block_sm2}>
                                    <div className={classes.headname}>
                                        Date of Birth
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddDateBirth(e.currentTarget.textContent)}>
                                        {allData.length > 0 && Edit == false ? allData[currentBed].birthDate : ""}

                                    </div>
                                </div>
                                <div className={classes.grab4} />
                                <div className={classes.block_sm2}>
                                    <div className={classes.headname}>
                                        Gender
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddGender(e.currentTarget.textContent)}>
                                        {allData.length > 0 && Edit == false ? allData[currentBed].gender : ""}

                                    </div>
                                </div>
                                <div className={classes.grab4} />
                                <div className={classes.block_md}>
                                    <div className={classes.headname}>
                                        Identification Number / Passport Number
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddIdCard(e.currentTarget.textContent)}>
                                        {allData.length > 0 && Edit == false ? allData[currentBed].identificationNo : ""}

                                    </div>
                                </div>
                            </div>
                            <div className={classes.grab} />
                            <div className={classes.famerow} > {/*  Address */}
                                <div className={classes.headname}>
                                    Address
                                </div>
                                <div className={classes.input_full} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddAddress(e.currentTarget.textContent)}>
                                    {allData.length > 0 && Edit == false ? allData[currentBed].address : ""}

                                </div>
                            </div>
                            <div className={classes.grab} />

                            <div className={classes.famerow2} style={{ position: 'relative', marginTop: -26 }}> {/*   District, Sub-district, Province, Zip code */}
                                <div className={classes.input_sm} contenteditable={Edit == true ? "true" : "false"} placeholder="District" onInput={e => setDistrict(e.currentTarget.textContent)}>
                                    {allData.length > 0 && Edit == false ? allData[currentBed].district : ""}

                                </div>

                                <div className={classes.grab4} />

                                <div className={classes.input_sm} contenteditable={Edit == true ? "true" : "false"} placeholder="Sub-district" onInput={e => setSubDistrict(e.currentTarget.textContent)}>
                                    {allData.length > 0 && Edit == false ? allData[currentBed].subDistrict : ""}

                                </div>

                                <div className={classes.grab4} />

                                <div className={classes.input_sm} contenteditable={Edit == true ? "true" : "false"} placeholder="Province" onInput={e => setProvince(e.currentTarget.textContent)}>
                                    {allData.length > 0 && Edit == false ? allData[currentBed].province : ""}

                                </div>

                                <div className={classes.grab4} />

                                <div className={classes.input_sm} contenteditable={Edit == true ? "true" : "false"} placeholder="Zip code" onInput={e => setZip(e.currentTarget.textContent)}>
                                    {allData.length > 0 && Edit == false ? allData[currentBed].zipCode : ""}

                                </div>
                            </div>

                            <div className={classes.grab} />
                            <div style={{ height: '24px' }}></div>

                            <div className={classes.famerow}> {/*   Phone Number, Email */}
                                <div className={classes.block_md}>
                                    <div className={classes.headname}>
                                        Phone Number

                                    </div>
                                    <div style={{ height: 4 }}></div>

                                    <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setPhone(e.currentTarget.textContent)}>
                                        {allData.length > 0 && Edit == false ? allData[currentBed].phoneNo : ""}

                                    </div>
                                </div>
                                <div className={classes.grab4} />
                                <div className={classes.block_md}>
                                    <div className={classes.headname}>
                                        Email
                                    </div>
                                    <div style={{ height: 4 }}></div>
                                    <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setEmail(e.currentTarget.textContent)}>
                                        {allData.length > 0 && Edit == false ? allData[currentBed].email : ""}

                                    </div>
                                </div>
                            </div>
                            <Button className={Edit == true ? classes.btmBelow : classes.btmBelowRed} onClick={() => handleSave()}>
                                {Edit == true ? "SAVE" : "Check out"}

                            </Button>
                        </div>

                    </Paper>


                </div>


            </div>
        </ScrollView>
    )
}