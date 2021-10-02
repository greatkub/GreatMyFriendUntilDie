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
import moment from 'moment';

// import {storage} from "./config";
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
        left: 130,
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
        left: 640,
        top: 520
    },
    btmBelowRedUnClick: {
        width: 406,
        height: 42.8,
        backgroundColor: "#E5B6B6",
        textTransform: "none",
        color: '#ffffff',
        fontSize: 17,
        position: "absolute",
        left: 640,
        top: 520
    },
    saveCenterBtbelow: {
        width: 406,
        height: 42.8,
        backgroundColor: "#485D84",
        textTransform: "none",
        color: '#ffffff',
        fontSize: 17,
        position: "absolute",
        left: 400,
        top: 520
    }

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

    const [bedName, setBedName] = useState("A")
    const [getNumberOfBed, setNumberOfBed] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [shouldDelete, setDelete] = useState(false)



    const api = axios.create({
        baseURL: `/user/add-user-bed/room/${id}`
    })

    const apidelete = axios.create({
        baseURL: `/user/delete-user/${currentUserId}`
    })

    const apiEdit = axios.create({
        baseURL: `/user/edit-user/room/${id}/user/${currentUserId}`
    })




    const deleteTenant = async () => {


        let res = await apidelete.post('/').then(response => {
            console.log(response)
            console.log('Etherea: ');
        }).then(response => {
            alert('The tenant has been checked out')
            console.log('Saved');
            window.location.href = `/personinfo/${id}`;
            

        }).catch(error => {
            console.log('Eta: ' + error);
        })
    }

    const editTenant = async () => {

        console.log(id + "room id")
        console.log(currentUserId + "currentUserId")

        let res = await axios({
            url: `/user/edit-user/room/${id}/user/${currentUserId}`,
            method: 'post',
            data: {
                "Address": "11/22 M.3 Soi 9/9",
                "District": "Bang Bo",
                "SubDistrict": "Bang Bo",
                "Province": "Bangkok",
                "ZipCode": "54321",
                "Email": "u6113112@au.edu",
                "PhoneNumber": "0819999896",
                "User": {
                    "FirstName": addFirstName,
                    "LastName": "KiL",
                    "GenderId": 1,
                    "BirthDate": "1999-02-20",
                    "IdentificationNo": "1234567890987",
                    "ProfileUrl": "https://firebasestorage.googleapis.com/v0/b/habitat-34ee0.appspot.com/o/16473212_1918745521679927_8257466333135884922_n.jpeg?alt=media&token=a4da4376-5f9b-4657-a5fd-1cc0b4f7993d"
                },
                "Bed": {
                    "RoomId": parseInt(id)
                }
            }
        }).then(response => {
            alert('The tenant has been edited')
            console.log('Saved');
            window.location.href = `/personinfo/${id}`;

        }).catch(error => {
            console.log('Edit Eta: ' + error);
            alert('Fail')

            console.log(id)
            console.log(currentUserId + "This user")
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
                "gender_id": parseInt(addGender),
                "birthdate": addDateBirth,
                "identificationNo": addIdCard,
                "profile_url": "https://firebasestorage.googleapis.com/v0/b/habitat-34ee0.appspot.com/o/16473212_1918745521679927_8257466333135884922_n.jpeg?alt=media&token=a4da4376-5f9b-4657-a5fd-1cc0b4f7993d"
            },
            "Bed": {
                "bed_name": bedName,
                "room_id": parseInt(id)
            }
        }).then(response => {
            // alert('The tenant has been added')
            console.log('Saved');
            window.location.href = `/personinfo/${id}`;

        }).catch(error => {
            console.log('Eta: ' + error);
        })
    }



    // /user/number-of-bed/32




    //  useEffect( async () => {
    //     // setIsLoading(false)
    //     await axios(`/user/number-of-bed/${id}`)
    //         .then(response => {
    //             setNumberOfBed(response.data[0].numberOfBed)
    //             // setIsLoading(true)

    //         })
    //         .catch(error => {
    //             console.log('Error getting fake data: ' + error);
    //         })

    // }, []);



    useEffect(async () => {
        // setIsLoading(false)
        await axios(`/user/number-of-bed/${id}`)
            .then(response => {
                setNumberOfBed(response.data[0].numberOfBed)
                // setIsLoading(true)

            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
        await axios(`/user/user-room/${id}`)
            .then(response => {
                console.log(response.data, "allData")
                setAllData(response.data);
                setCurrentUser(response.data[currentBed].userId)
                console.log(currentUserId + "From axious use effect")
                setIsLoading(true)


            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
                setIsLoading(true)

            })


    }, []);



    function handleSave() {
        setEdit(!Edit)
        console.log(Edit)



        if (Edit == true) {
            addTenant()
            console.log("the tenant has been saved")

        } else {
            console.log("You are editting tenant")
            // deleteTenant()
        }

    }

    function hanthese() {
        console.log(currentBed)
        console.log(allData.length)

    }

    function firstCharacterAt() {

    }

    const roomBed = ["A", "B", "C", "D", "E", "F", "G", "H"]
    const [canSave, setSave] = useState(false)
    var previous = 0
    const [getIndex, setIndex] = useState(0)

    useEffect(() => {
        try {
            if (allData.length > 0) {
                console.log(allData[currentBed].room[0].bedName)
                console.log('im fine')
                setSave(false)
                setEdit(false)
            } else {
                setSave(true)
                setEdit(true)
            }

        } catch (error) {
            console.error('The err: ', error)
            setSave(true)
            setEdit(true)


        }

        // if (allData.length > 0 && currentBed == getIndex) {
        //     console.log(getIndex)

        //     setSave(false)
        // } else {
        //     setSave(true)
        //     console.log("kk")

        // }

    }, [getIndex, isLoading]);

    function newhandleClick(i) {
        // const thisBed = currentBed


        setNewCurrentBed(i)
        setBedName(roomBed[i])
        setIndex(i)
        // console.log(currentBed)



        if (allData.length > 0 && currentBed == i) {
            setCurrentUser(allData[currentBed].userId)
            previous = i
            console.log(allData[currentBed].userId + "in if")
            // console.log("hi")
            // setSave(true)
            // console.log(canSave)
            // setEdit(true)
        } else {
            console.log("hoo")

            setSave(false)
            // setEdit(false)
        }
        // console.log(previous)

    }

    function letEdit() {
        if (Edit == true) {
            setEdit(false)
            editTenant()
            console.log("Edit done")
        } else {
            setEdit(true)
            console.log("Not yet Edit")


        }
    }

    // const [image, setImage] = useState(null);

    // const onImageChange = (e) => {
    //     const reader = new FileReader();
    //     let file = e.target.files[0]; // get the supplied file
    //     // if there is a file, set image to that file
    //     if (file) {
    //         reader.onload = () => {
    //             if (reader.readyState === 2) {
    //                 console.log(file);
    //                 setImage(file);
    //             }
    //         };
    //         reader.readAsDataURL(e.target.files[0]);
    //         // if there is no file, set image back to null
    //     } else {
    //         setImage(null);
    //     }
    // };

    // const uploadToFirebase = () => {
    //     if (image) {
    //       const storageRef = storage.ref();
    //       const imageRef = storageRef.child(image.name);
    //       imageRef.put(image)
    //      .then(() => {
    //         alert("Image uploaded successfully to Firebase.");
    //     });
    //     } else {
    //       alert("Please upload an image first.");
    //     }
    // }


    if (isLoading) {

        return (
            <ScrollView>
                <div className={isOpened ? classes.scrollspace36 : classes.scrollspace}>
                    <div>

                        <div className={classes.frame}>
                            <Datetoday />
                            <div className={classes.titleText}>
                                {allData.length > 0 ? `King Solomon • Room: ${allData[0].room[0].roomNumber}` : ""}

                            </div>

                            {/* <button onClick={() => console.log(addGender)}>

                            </button> */}


                        </div>

                        <Paper className={classes.paper}>
                            <div style={{ height: '111.6px', width: '100%' }}>

                                <div className={classes.titleText} style={{ paddingTop: 20, paddingLeft: 38 }}>
                                    Bed
                                </div>
                                <div style={{ paddingTop: 8, paddingLeft: 38 }}>
                                    <div className={classes.segwrap} >

                                        {[...Array(getNumberOfBed)].map((bed, index) => {
                                            return (
                                                <Button className={currentBed == index ? classes.segmentbtnBlue : classes.segmentbtnWhite} onClick={() => newhandleClick(index)}>
                                                    {allData.length >= index + 1 ? allData[index].room[0].bedName : "Vacant"}


                                                </Button>
                                            )
                                        })}

                                    </div>

                                </div>


                            </div>

                            <Divider />


                            <div>
                                <img className={false ? classes.img : classes.emptyimg} alt="complex" src={false ? allData[0].profileURL : ""} />
                                {/* <input type="file" accept="image/x-png,image/jpeg"
                                // onChange={(e) => { onImageChange(e); }} 
                                />

                                <button>Upload to Firebase</button> */}


                            </div>
                            <div className={classes.fameinfo}>
                                <div className={classes.famerow}>
                                    <div className={classes.block_md}>
                                        <div className={classes.headname}>
                                            First Name
                                        </div>
                                        <div style={{ height: 4 }}></div>
                                        <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} style={{ paddingLeft: 10 }} onInput={e => setAddFirstName(e.currentTarget.textContent)} >

                                            {parseInt(allData.length) > currentBed ? allData[currentBed].firstName : ""}
                                        </div>

                                    </div>
                                    <div className={classes.grab4} />
                                    <div className={classes.block_md}>
                                        <div className={classes.headname}>
                                            Last Name
                                        </div>

                                        <div style={{ height: 4 }}></div>
                                        <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} style={{ paddingLeft: 10 }} onInput={e => setAddLastName(e.currentTarget.textContent)}>

                                            {parseInt(allData.length) > currentBed ? allData[currentBed].lastName : ""}

                                        </div>
                                    </div>
                                </div>

                                <div className={classes.grab} />

                                {Edit == false &&
                                    <div className={classes.famerow}>

                                        <div className={classes.block_sm2}>
                                            <div className={classes.headname} >
                                                Date of Birth
                                            </div>

                                            <div style={{ height: 4 }}></div>
                                            <div className={classes.input_md} style={{ paddingLeft: 10 }} >
                                                {parseInt(allData.length) > currentBed ?
                                                    moment( allData[currentBed].birthDate  ).format("DD/MM/YYYY")
                                                // allData[currentBed].birthDate 
                                                
                                                : ""} 
                                            </div>
                                        </div>
                                        <div className={classes.grab4} />
                                        <div className={classes.block_sm2}>
                                            <div className={classes.headname}>
                                                Gender
                                            </div>
                                            <div style={{ height: 4 }}></div>
                                            <div className={classes.input_md} style={{ paddingLeft: 10 }} >
                                                {parseInt(allData.length) > currentBed ? allData[currentBed].gender : ""}

                                            </div>
                                        </div>


                                        <div className={classes.grab4} />
                                        <div className={classes.block_md}>
                                            <div className={classes.headname}>
                                                Identification Number / Passport Number
                                            </div>
                                            <div style={{ height: 4 }} ></div>
                                            <div className={classes.input_md} style={{ paddingLeft: 10 }}  >
                                                {parseInt(allData.length) > currentBed ? allData[currentBed].identificationNo : ""}

                                            </div>
                                        </div>
                                    </div>

                                }

                                {Edit == true &&
                                    <div className={classes.famerow}>

                                        <div className={classes.block_sm2}>
                                            <div className={classes.headname}>
                                                Date of Birth
                                            </div>
                                            <div style={{ height: 4 }}></div>
                                            <input
                                                className={classes.input_md}
                                                placeholder="Date"
                                                type="date"
                                                name="Date"
                                                noValidate
                                                onChange={(event) => {
                                                    setAddDateBirth(event.target.value)
                                                }}
                                            />
                                            {/* <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddDateBirth(e.currentTarget.textContent)}>
                                                {parseInt(allData.length) > currentBed ? allData[currentBed].birthDate : ""}

                                            </div> */}
                                        </div>
                                        <div className={classes.grab4} />
                                        <div className={classes.block_sm2}>
                                            <div className={classes.headname}>
                                                Gender
                                            </div>
                                            <div style={{ height: 28 }}></div>
                                            <DropGender className={classes.input_md} style={{ marginTop: '30px' }}
                                                save={addGender => setAddGender(addGender)}
                                            >

                                            </DropGender>
                                            {/* <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddGender(e.currentTarget.textContent)}>
                                                {parseInt(allData.length) > currentBed ? allData[currentBed].gender : ""}

                                            </div> */}
                                        </div>


                                        <div className={classes.grab4} />
                                        <div className={classes.block_md}>
                                            <div className={classes.headname} >
                                                Identification Number / Passport Number
                                            </div>
                                            <div style={{ height: 4 }}></div>
                                            <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddIdCard(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                                {parseInt(allData.length) > currentBed ? allData[currentBed].identificationNo : ""}

                                            </div>
                                        </div>
                                    </div>

                                }


                                <div className={classes.grab} />
                                <div className={classes.famerow} >
                                    <div className={classes.headname}>
                                        Address
                                    </div>
                                    <div className={classes.input_full} contenteditable={Edit == true ? "true" : "false"} onInput={e => setAddAddress(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                        {parseInt(allData.length) > currentBed ? allData[currentBed].address : ""}

                                    </div>
                                </div>
                                <div className={classes.grab} />

                                {Edit == false &&
                                    <div className={classes.famerow2} style={{ position: 'relative', marginTop: -26 }}>
                                        <div className={classes.input_sm} placeholder="District" onInput={e => setDistrict(e.currentTarget.textContent)} style={{ paddingLeft: 10 }}  >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].district : ""}

                                        </div>

                                        <div className={classes.grab4} />

                                        <div className={classes.input_sm} placeholder="Sub-district" onInput={e => setSubDistrict(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].subDistrict : ""}

                                        </div>

                                        <div className={classes.grab4} />

                                        <div className={classes.input_sm} placeholder="Province" onInput={e => setProvince(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].province : ""}

                                        </div>

                                        <div className={classes.grab4} />

                                        <div className={classes.input_sm} placeholder="Zip code" onInput={e => setZip(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].zipCode : ""}

                                        </div>
                                    </div>
                                }

                                {Edit == true &&
                                    <div className={classes.famerow2} style={{ position: 'relative', marginTop: -26 }}>
                                        <input className={classes.input_sm} placeholder="District" onChange={e => setDistrict(e.target.value)} >

                                        </input>

                                        <div className={classes.grab4} />

                                        <input className={classes.input_sm} placeholder="Sub-district" onChange={e => setSubDistrict(e.target.value)}>

                                        </input>

                                        <div className={classes.grab4} />

                                        <input className={classes.input_sm} placeholder="Province" onChange={e => setProvince(e.target.value)}>

                                        </input>

                                        <div className={classes.grab4} />

                                        <input className={classes.input_sm} placeholder="Zip code" onChange={e => setZip(e.target.value)}>

                                        </input>
                                    </div>
                                }



                                <div className={classes.grab} />
                                <div style={{ height: '24px' }}></div>

                                <div className={classes.famerow}>
                                    <div className={classes.block_md}>
                                        <div className={classes.headname}>
                                            Phone Number

                                        </div>
                                        <div style={{ height: 4 }}></div>

                                        <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setPhone(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].phoneNo : ""}

                                        </div>
                                    </div>
                                    <div className={classes.grab4} />
                                    <div className={classes.block_md}>
                                        <div className={classes.headname}>
                                            Email
                                        </div>
                                        <div style={{ height: 4 }}></div>
                                        <div className={classes.input_md} contenteditable={Edit == true ? "true" : "false"} onInput={e => setEmail(e.currentTarget.textContent)} style={{ paddingLeft: 10 }} >
                                            {parseInt(allData.length) > currentBed ? allData[currentBed].email : ""}

                                        </div>
                                    </div>
                                </div>

                                {canSave &&
                                    <Button className={classes.saveCenterBtbelow} onClick={() => handleSave()}>
                                        {"SAVE"}

                                    </Button>
                                }

                                {canSave == false &&
                                    <div>
                                        <Button className={true ? classes.btmBelow : classes.btmBelowRed}
                                            onClick={() => letEdit()}
                                        >
                                            {Edit == true ? "SAVE" : "Edit"}
                                        </Button>
                                        <Button className={Edit ? classes.btmBelowRedUnClick : classes.btmBelowRed}
                                            disabled={Edit}
                                            onClick={deleteTenant}
                                            style={{ color: "#FFFFFF" }}
                                        >

                                            Check out
                                        </Button>
                                    </div>

                                }


                                {/* <Button className={canSave ? classes.btmBelow : classes.btmBelowRed} onClick={() => handleSave()}>

                                    {canSave ? "SAVE" : "Edit"}


                                </Button> */}







                                {/* <Button className={true ? classes.btmBelow : classes.btmBelowRed} onClick={() => handleSave()}>
                                    {Edit == true ? "SAVE" : "Edit"}
                                </Button>
                                <Button className={Edit ? classes.btmBelowRedUnClick : classes.btmBelowRed}
                                    disabled={Edit}
                                onClick={() => handleSave()}
                                >
                                    {true ? "Check out" : "Edit"}
                                </Button> */}


                            </div>

                        </Paper>


                    </div>


                </div>


            </ScrollView>


        )
    } else {
        return (
            <div>
                Loading . . .
            </div>
        )
    }
}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDS5NQ8Oy2bjiNZCELD_7Y4HGrJ290muJM",
//   authDomain: "senior1pjweb.firebaseapp.com",
//   projectId: "senior1pjweb",
//   storageBucket: "senior1pjweb.appspot.com",
//   messagingSenderId: "729115434541",
//   appId: "1:729115434541:web:5448e54eb9552a387d62a4",
//   measurementId: "G-99SYFWFQPP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);