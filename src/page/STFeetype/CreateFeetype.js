/*import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import EditIcon from '@material-ui/icons/Edit';
import { BrowserRouter as Rounter, Route, Link, NavLink, Switch } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '@material-ui/core/Modal';
import axios from "axios";
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },

  heder:{
    width: '100%',
    padding: theme.spacing(1),
    marginTop: '4%',
    
  },
  Cards:{
    width: '78%',
    padding: theme.spacing(3),
    margin: 'auto',
  },
  Dialogcards:{
    width: '100%',
    padding: theme.spacing(5),
    margin: 'auto',
  },
  Card:{
    width: '83%',
    padding: theme.spacing(3),
    margin: 'auto',
  },

  title: {
    fontSize: 14,
  },

  pos: {
    marginBottom: 12,
  },

  Btn:{
    marginLeft: "88%",
    marginTop: "0.5%",  
    
  },

  head:{
    marginLeft: "12%",  
  },

  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    //border: '2px solid #000',
    //boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  },
  frame: {
      width: 1124,
      height: 654
  },
  infame: {
    width: 798,
    height: 446,
    border: '1px solid #AAAAAA',

  }
}));

export default function CreateFeetype(props) {

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen =() =>{
    setOpen(true)
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const [feetype, setFeetype] =useState([]);
  const [userId, setUserId]=useState("");

  const [addFeetypename, setAddfeetypename]= useState("");
  const [addFeeprice, setAddfeeprice]= useState("");
  const [modalEdit, setModalEdit]=useState(false);
  const [modaldelete, setModalDelete]=useState(false);

  

  useEffect(() => {
    axios('/feetype/fee-types')
    .then(response => {
         console.log(response.data)
    setFeetype(response.data);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);

  const addFeetype =()=>{
    axios.post("/feetype/fee-type/",{
      "FeeTypeName":addFeetypename,
      "FeeTypePrice": parseInt(addFeeprice)
  
    }).then(() => {
    setFeetype([
      {
        ...feetype,
        FeeTypeName:addFeetypename,
        FeeTypePrice: parseInt(addFeeprice)
      },
    ]);    
    window.location.href = '/createfeetype';
  });
    setOpen(false)
    //window.location.href = '/createfeetype';
   
};

const deletetable=(id) =>{
  axios.post(`/feetype/fee-type/${id}`).then(() => {
  setFeetype(feetype.filter((row) => {
        return row.id != id;
      })
    );
  });
};


const selectFeetype=(rows, data)=>{
    setAddfeetypename(rows);
    setAddfeeprice(rows);
    (data==='Edit')
    ?
    EditModal()
    :Modals()
  }

  const EditModal=()=>{
    setModalEdit(!modalEdit);
  }

  const Modals=()=>{
    setModalDelete(!modaldelete);
  }

  const UpdateFeetype=(id)=>{
    axios.post("/feetype/edit-fee-type/" + id, feetype,{
      "id": id,
      "FeeTypeName":addFeetypename,
      "FeeTypePrice": parseInt(addFeeprice)
    }).then(() => {
      setFeetype([
      {
        ...feetype,
        id: userId,
        FeeTypeName:addFeetypename,
        FeeTypePrice: parseInt(addFeeprice)
      },
    ]);    
  });
    setOpen(false)
    //window.location.href = '/createfeetype';
  };

const submittFeeset=()=>{
  axios('',{
  }).then(()=>{

  })
}

const EditTextfeild=(
  <div className={classes.modal}>
      <DialogContentText>
      <DialogTitle id="edit-apartment">Create Fee Type Name</DialogTitle>

            <input 
                name="FeetypeName" 
                label="FeetypeName" 
                className={classes.inputMaterial} 
                id="FeetypeName"
                onChange={(event)=> {
                  setAddfeetypename(event.target.value);
                }} 
                value={addFeetypename.feeTypeName}/>
             <br/>
             <br/>
             <input
                name="FeetypePrice" 
                label="FeetypePrice"  
                id="FeetypePrice"
                className={classes.inputMaterial} 
                onChange={(event)=> {
                  setAddfeeprice(event.target.value);
                }} 
                value={addFeeprice.feeTypePrice}/>
            <br/>
     
      </DialogContentText>
      <br/><br/>
      <div align="right">
       <Button 
              onClick={()=>UpdateFeetype()}
              variant="contained" 
              disableElevation
              style={{ backgroundColor: '#485D84' }}
              color="primary">Edit</Button>
        <Button onClick={()=>EditModal()}>cancel</Button>  
      </div>
    </div>
  )

  return (
      <div className={classes.frame}>
        <Card className={classes.Card} variant="outlined">
            <Table aria-label="caption table">
                <TableHead >
                    <TableRow>
                        <TableCell className={classes.heder}>
                         <h4>Feetype <Button onClick={handleClickOpen}>
                             <AddCircleIcon  onClick={handleClickOpen} color="primary"/></Button>  </h4>      
                        </TableCell>
                    </TableRow>
                </TableHead>  
            <TableBody>
            <br/>

            <h5 className={classes.head}>            
              <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="edit-apartment">
                <DialogTitle id="edit-apartment">Create Fee Type Name</DialogTitle>
                  <DialogContent>
                    <DialogContentText>              
                        <input   
                            placeholder="Feetype name"
                            type="text"
                            name="Feetype name"
                            fullWidth
                            //value={addFeetypename}
                            onChange={(event)=> {
                              setAddfeetypename(event.target.value);
                            }} 
                            />                
                    </DialogContentText>
                    <DialogContentText >
                        <input   
                            placeholder="Feetype price"
                            type="number"
                            name="Feetype price"
                            fullWidth
                            //value={addFeeprice}
                            onChange={(event)=> {
                              setAddfeeprice(event.target.value);
                            }} 
                            />                     
                    </DialogContentText>      
                </DialogContent>     
                <DialogActions >
                      <Button variant="contained" color="primary" disableElevation
                              onClick={addFeetype}
                              style={{ backgroundColor: '#485D84' }}>
                              Create
                      </Button>   
                      <Button variant="contained"  disableElevation
                            onClick={handleClickOpen}>
                        cancel
                      </Button>    
              </DialogActions>  
          </Dialog> 
        </h5> 

      <div className="container">
        <Card className={classes.Cards} variant="outlined">
          <Table >
            <TableBody>
              {feetype.map((row)=>(
              <TableRow>
                  <TableCell align="left">{row.userId}</TableCell> 
                  <TableCell align="left">{row.feeTypeName} </TableCell> 
                  <TableCell align="right">
                    <Chip label={row.feeTypePrice}   
                    
                    
                    />    THB 
                  </TableCell>
                  <TableCell align="right">
                 <Button onClick={()=>selectFeetype(row, "Edit")}><EditIcon/></Button>
                  </TableCell>
                  <TableCell align="right">
                  <Button onClick={()=>{deletetable(row.id)}}><DeleteSweepOutlinedIcon/></Button> 
                  </TableCell>   
              </TableRow>        
              ))}      
            </TableBody>                     
          </Table>  
        </Card>  
      </div>
      </TableBody>
    </Table>   

    <Modal
     open={modalEdit}
     onClose={EditModal}>
        {EditTextfeild}
     </Modal>
  
    <div className="container-fruid ">
      <NavLink to="/setting">
          <Button className={classes.Btn}
                  variant="contained" color="primary" disableElevation
                  style={{ backgroundColor: '#485D84' }}>Create</Button> 
                  </NavLink>
              </div>      
          </Card>        
       </div>    
  );
}*/

import React, {useState, useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from '@material-ui/core/Table';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {BrowserRouter as Rounter, Route, Link, NavLink, Switch, useParams} from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '@material-ui/core/Modal';
import axios from "axios";
import CloseIcon from '@material-ui/icons/Close';
import Chip from '@material-ui/core/Chip';

// import "../../Css/Fee/Fee.css"
// import "./Fee.css"
//import {useParam} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    },
    heder: {
        width: '100%',
        padding: theme.spacing(1),
        marginTop: '4%',
    },
    Cards: {
        width: '78%',
        padding: theme.spacing(2),
        marginLeft: '6%'
    },
    Dialogcards: {
        width: '100%',
        padding: theme.spacing(5),
        margin: 'auto',
    },
    Card: {
        width: '83%',
        padding: theme.spacing(3),
        margin: 'auto',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    Btn: {
        marginLeft: "88%",
        marginTop: "0.5%",
    },
    head: {
        marginLeft: "12%",
    },
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconos: {
        cursor: 'pointer'
    },
    inputMaterial: {
        width: '100%'
    },
    frame: {
        width: 1124,
        height: 654
    },
    infame: {
        width: 798,
        height: 446,
        border: '1px solid #AAAAAA',
    },
    IconSize: {
        width: '3%',
        height: '3%',
        marginLeft: '2%',
        cursor: 'pointer'

    },
    TitleMargin: {
        marginTop: '1%',
        marginLeft: '1%',
        marginBottom: '2%'
    },
    tableCell: {
        padding: "0px 8px"
    },
    PriceTag: {
        height: "24px",
        width: "100px",
        backgroundColor: '#D8D8D8',
        borderRadius: '13px',
        fontSize: '13px',
        color: '#4A4A4A',
        fontWeight: '400',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
    },
    dialogPaper: {
        paddingTop: "2%",
        paddingLeft: "10%"
    },
    dialogPaper2: {
        paddingTop: "7%",
        paddingLeft: "10%"
    },
    dialogPaper3: {
        paddingBottom: "7%",
        paddingRight: "7%",
        paddingTop: "7%"
    },
    dialogButton: {
        paddingLeft: "2%"
    },
    BGIcons: {
        height: "32px",
        width: "32px",
        backgroundColor: '#F8F8F8',
        borderRadius: '20px',
        margin: 'auto',
        padding: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        cursor: 'pointer'
    },
    IconSizeTable: {
        height: "20px",
        width: "20px"
    },
    PriceTagFont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        marginTop: '8px',
        fontSize: '16px',
        fontWeight: '400',
        fontcolor: "#4a4a4a"
    },
    FontTable: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',
        textAlign: "left",
        fontSize: '18px',
        fontWeight: '400',
        fontcolor: "#4a4a4a"
    },
    ClosedIconDialogBg: {
        height: "10px",
        width: "10px",
        backgroundColor: '#F8F8F8',
        borderRadius: '20px',
        margin: 'auto',
        padding: '2%',
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'right',
        textAlign: "right",
        cursor: 'pointer'
    },
    ClosedIconDialog: {
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'right',
        textAlign: "right",
        cursor: 'pointer'
    },
    Cursor: {
        cursor: 'pointer'
    }
}));

export default function CreateFeetype(props) {

    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false);
    };
  
    const [feetype, setFeetype] = useState([]);
    const [userId, setUserId] = useState("");
    const [addFeetypename, setAddfeetypename] = useState("");
    const [addFeeprice, setAddfeeprice] = useState("");
    const [modalEdit, setModalEdit] = useState(false);
    const [modaldelete, setModalDelete] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        axios('/feetype/fee-types')
            .then(response => {
                console.log(response.data)
                setFeetype(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);

    const addFeetype = async () => {
        /*axios.post("/feetype/fee-type/", {
            "FeeTypeName": addFeetypename,
            "FeeTypePrice": parseInt(addFeeprice)*/

      await axios({
            url: "/feetype/fee-type/", 
            method: "POST", 
            data: { 
                "id": id,
                "FeeTypeName": addFeetypename,
                "FeeTypePrice": parseInt(addFeeprice)
            }
      
        }).then(() => {
            setFeetype([
                {
                    ...feetype,
                    FeeTypeName: addFeetypename,
                    FeeTypePrice: parseInt(addFeeprice)
                },
            ]);
            window.location.href = '/feetype_sp';
        });
        setOpen(false)
    };

  /* {
        "id": 4,
        "FeeTypeName": "Cleaning",
        "FeeTypePrice": 520
    }*/

    const deletetable = (id) => {
        axios.post(`/feetype/fee-type/${id}`)
        .then((result) => {
            alert(result['Delete'])
            setFeetype(feetype.filter((row) => {
                    return row.id != id;
                })
            );
        });
    };

    const selectFeetype = (rows, data) => {
        setAddfeetypename(rows);
        setAddfeeprice(rows);
        (data === 'Edit')
            ?
            EditModal()
            : Modals()
    }

    const EditModal = () => {
        setModalEdit(!modalEdit);
    }

    const Modals = () => {
        setModalDelete(!modaldelete);
    }

     /*const UpdateFeetype = (id) => {
        axios.post("/feetype/edit-fee-type/" +id, feetype, {
            "id": parseInt(id),
            "FeeTypeName": addFeetypename,
            "FeeTypePrice": parseInt(addFeeprice)
        }).then(() => {
            setFeetype([
                {
                    ...feetype,
                    id: parseInt(id),
                    FeeTypeName: addFeetypename,
                    FeeTypePrice: parseInt(addFeeprice)
                },
            ]);
        });
        setOpen(false)
    };*/

    const UpdateFeetype = () => {
        axios.post("/feetype/edit-fee-type/14",{ 
            "id": 14,
            "FeeTypeName": addFeetypename,
            "FeeTypePrice": parseInt(addFeeprice)
        },

        ).then((response) => {
            window.location.href = '/feetype_sp';
            console.log(response);
        })
    };

    //TODO Check edit
    // const EditTextfeild = (
    //     <div className={classes.modal}>
    //         <DialogContentText>
    //             <DialogTitle id="edit-apartment">Edit Fee Type</DialogTitle>
    //             <input
    //                 name="FeetypeName"
    //                 label="FeetypeName"
    //                 className={classes.inputMaterial}
    //                 id="FeetypeName"
    //                 onChange={(event) => {
    //                     setAddfeetypename(event.target.value);
    //                 }}
    //                 value={addFeetypename.feeTypeName}/>
    //             <br/>
    //             <br/>
    //             <input
    //                 // name="FeetypePrice"
    //                 // label="FeetypePrice"
    //                 id="FeetypePrice"
    //                 className={classes.inputMaterial}
    //                 onChange={(event) => {
    //                     setAddfeeprice(event.target.value);
    //                 }}
    //                 value={addFeeprice.feeTypePrice}/>
    //             <br/>
    //         </DialogContentText>
    //         <br/><br/>
    //         <div align="right">
    //             <Button variant="contained"
    //                     disableElevation
    //                     style={{backgroundColor: '#FFFFFF'}}
    //                     onClick={() => EditModal()}>cancel</Button>
    //             <Button
    //                 onClick={() => UpdateFeetype()}
    //                 variant="contained"
    //                 disableElevation
    //                 style={{backgroundColor: '#485D84'}}
    //                 color="primary">Edit</Button>
    //
    //         </div>
    //     </div>
    // )

    return (
        <div className={classes.frame}>
            <Card className={classes.Card} variant="outlined">
                <h4 className={classes.TitleMargin}> Fee Types
                    <AddCircleIcon className={classes.IconSize} onClick={handleClickOpen} color="primary"/>
                </h4>
                <hr/>

                <div className="container">
                    <Card className={classes.Cards} variant="outlined">
                        <Table>
                            <tbody>
                            {feetype.map((row, key) => (
                                <TableRow>
                                    <TableCell>{key.id}</TableCell>
                                    <TableCell style={{width: 500, alignItems: "center"}}><h6
                                        className={classes.FontTable}> {row.feeTypeName} </h6></TableCell>
                                    <TableCell>
                                        <div className={classes.PriceTag}>
                                            <h6 className={classes.PriceTagFont}> {row.feeTypePrice} THB </h6>
                                        </div>
                                    </TableCell>
                                    
                                    <TableCell>
                                        <div className={classes.BGIcons}>
                                            <EditIcon className={classes.IconSizeTable}
                                                      onClick={() => selectFeetype(row, "Edit")}/>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className={classes.BGIcons}>
                                            <DeleteIcon onClick={()=>{deletetable(row.id)}}
                                             className={classes.IconSizeTable}
                                             
                                             >
                                            <Button ></Button> 
                                            </DeleteIcon>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            </tbody>
                        </Table>
                    </Card>
                </div>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="edit-apartment"
                    fullWidth={true}>
                    <DialogTitle id="edit-apartment" className={classes.dialogPaper2}>Create Fee Type</DialogTitle>
                    <DialogContent className={classes.dialogPaper}>
                        <DialogContentText>
                            <h6>Fee type name</h6>
                            <input maxlength="40" size="40"
                                   type="text"
                                   id="addFeetypename"
                                // name="Feetype name"
                                   fullWidth
                                //value={addFeetypename}
                                   onChange={(event) => {
                                       setAddfeetypename(event.target.value);
                                   }}
                            />
                        </DialogContentText>
                        <DialogContentText>
                            <h6>Price</h6>
                            <input
                                type="text"
                                maxlength="40" size="40"
                                // name="Feetype price"
                                fullWidth
                                id="addfeeprice"
                                //value={addFeeprice}
                                onChange={(event) => {
                                    setAddfeeprice(event.target.value);
                                }}
                            />
                            
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className={classes.dialogPaper3}>
                        <Button className={classes.Cursor} variant="contained" 
                                style={{backgroundColor:'#485D84'}} color="primary" 
                                onClick={addFeetype} disableElevation> 
                                Create </Button>

                        <div className={classes.dialogButton}>
                            <Button className={classes.Cursor} type={"button"}
                                    variant="contained" disableElevation onClick={handleClose}>
                                    cancel</Button>
                        </div>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={modalEdit}
                    onClose={EditModal}
                    aria-labelledby="edit-apartment"
                    fullWidth={true}>
                    <DialogTitle id="edit-apartment" className={classes.dialogPaper2}>Edit Fee Type</DialogTitle>
                        <DialogContent className={classes.dialogPaper}>
                        <DialogContentText>
                            <h6>Fee type name</h6>
                            <input
                                // name="FeetypeName"
                                // label="FeetypeName"
                                type="text"
                                maxlength="40" size="40"
                                // className={classes.inputMaterial}
                                id="addfeeprice"
                                value={addFeetypename.feeTypeName}
                                onChange={(event) => {
                                    setAddfeetypename(event.target.value);
                                }}/>
                        </DialogContentText>
                        <DialogContentText>
                            <h6>Price</h6>
                            <input
                                type="text"
                                maxlength="40" size="40"
                                id="addFeeprice"
                                value={addFeeprice.feeTypePrice}
                                onChange={(event) => {
                                    setAddfeeprice(event.target.value);
                                }}/>
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions className={classes.dialogPaper3}>
                        <Button className={classes.Cursor}
                                variant="contained" color="primary" disableElevation
                                style={{backgroundColor: '#485D84'}} onClick={() => UpdateFeetype()}>Edit
                        </Button>

                        <div className={classes.dialogButton}>
                            <Button className={classes.Cursor} disableElevation
                                    variant="contained" type={"button"} onClick={() => EditModal()}> cancel
                            </Button>
                        </div>
                    </DialogActions>
                </Dialog>
                
                <div className="container-fruid">
                    <NavLink to="/feesets">
                        <Button className={classes.Btn}
                                variant="contained" color="primary" disableElevation
                                style={{backgroundColor: '#485D84'}}>Save
                        </Button>
                    </NavLink>
                </div>
            </Card>
        </div>
    );
}
