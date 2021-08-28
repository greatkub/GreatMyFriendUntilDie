import React, {useState, useEffect} from "react";
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

// import "../../Css/Fee/Fee.css"
// import "./Fee.css"
import axios from "axios";
import Chip from '@material-ui/core/Chip';


//import {useParam} from 'react-router-dom';

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

  //const [editFeetypename, setEditfeetypename]= useState("");
  //const [editFeeprice, setEditfeeprice]= useState("");

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

/*const handleBulkDelete = () => {
  const updatedData = tableData.filter(row => !selectedRows.includes(row))
  setTableData(updatedData)
}*/


/* const handledelete = (id)=>{
  axios.post(`/${id}`).then(()=>{
    const updatetable = data.filter(row=> !selected.include(row))
    setData()
  })

} */



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

/*const UpdatePost=async()=>{
  await axios.post("/feetype/edit-fee-type/"+addFeetypename.id,)
  .then(response=>{
    var Item=feetype;
    Item.map(edit=>{
      if(addFeetypename.id===edit.id)
      {
        edit.Feetypename=addFeetypename.feeTypeName;
        edit.Feetypeprice=addFeeprice.feeTypePrice;
        
      }
    })
    setFeetype(Item);
    EditModal();
  })
}*/


/*const updatestatus = (id) => {
    axios.post("/feetype/edit-fee-type/",
    {FeeTypeName:addFeetypename,id:id,FeeTypePrice:addFeeprice})

    .then((response) => {
        setFeetype(
          feetype.map((row) => {
            return row.id == id
              ? {
                  id: row.id,
                  FeeTypeName: addFeetypename,
                  FeeTypePrice: parseInt(addFeeprice),         
                }
              :row;
          })
        );
      }
    );
  };*/


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
                  <TableCell align="left">{row.feeTypeName}</TableCell> 
                  <TableCell align="right">
                    <Chip label={row.feeTypePrice}/>     
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
  {/*<Modal
    open={modalInsert}
    onClose={AddModal}>
       {bodyInsertar}
     </Modal>*/}         
  
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
}
