import React, {useState, useEffect} from "react";
    import { makeStyles } from '@material-ui/core/styles';
    import Card from '@material-ui/core/Card';
    import CardActions from '@material-ui/core/CardActions';
    import CardContent from '@material-ui/core/CardContent';
    import Button from '@material-ui/core/Button';
    import Typography from '@material-ui/core/Typography';
    import TableHead from "@material-ui/core/TableHead";
    import TableRow from "@material-ui/core/TableRow";
    import TableBody from "@material-ui/core/TableBody";
    import TableCell from "@material-ui/core/TableCell";
    import TableContainer from "@material-ui/core/TableContainer";
    import Paper from '@material-ui/core/Paper';
    import Table from '@material-ui/core/Table';
    import Grid from '@material-ui/core/Grid';
    import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
    import Tab from 'react-bootstrap/Tab'
    import Nav from 'react-bootstrap/Nav'
    import TabContainer from 'react-bootstrap/TabContainer'
    import TabContent from 'react-bootstrap/TabContent'
    import Dialog from "@material-ui/core/Dialog";
    import DialogActions from "@material-ui/core/DialogActions";
    import DialogContent from "@material-ui/core/DialogContent";
    import DialogContentText from "@material-ui/core/DialogContentText";
    import DialogTitle from "@material-ui/core/DialogTitle";
    import TextField from '@material-ui/core/TextField';
    import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
    import EditIcon from '@material-ui/icons/Edit';
    import AddIcon from '@material-ui/icons/Add';
    import { BrowserRouter as Rounter, Route, Link, NavLink, Switch } from 'react-router-dom';
    import Checkbox from '@material-ui/core/Checkbox';
    import FormGroup from '@material-ui/core/FormGroup';
    import FormControlLabel from '@material-ui/core/FormControlLabel';
    import FormControl from '@material-ui/core/FormControl';
    import FormLabel from '@material-ui/core/FormLabel';
    //import "../../Css/Fee/Fee.css"
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
      }
    }));
    
    export default function Bill(props) {
      const [open, setOpen] = React.useState(false);
      const classes = useStyles();
      const handleClickOpen =() =>{
        setOpen(true)
      };
      
      const handleClose = () => {
        setOpen(false);
      };
    
    
      const [price, setPrice]= useState("");
      const [feetype, setFeetype] =useState([]);
      //const [addFeetypename, setAddfeetypename]= useState(false);
      //const [addFeeprice, setAddfeeprice]= useState("");
      //const [feesetname, setFeesetname]= useState("");
      //const [check, setCheck]= React.useState(false)
      //const [data, setData]= React.useState(false)
      //const [arrayList, setArrayList] = React.useState([]);
      const [selected, setSelected] = React.useState([]);
      const [addFeesetname, setAddfeesetname]= useState("");
      const [roomprice, setRoomprice]= useState("");
  
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
      
       const deletetable=(id) =>{
        axios.post(`/feetype/fee-type/${id}`)
        .then(() => {
          setFeetype(
            feetype.filter((row) => {
              return row.id != id;
            })
          );
        });
      };
    
    const AddFeeSet = event => {
      event.preventDefault();
        axios.post("/feeset/create-feeset", {
          "FeeSetName": addFeesetname,
          "RoomPrice": parseInt(roomprice),
          "FeeTypeIds": [1,2,3,4,5]
        }).then((response)=>{
          window.location.href = '/feeset';
          console.log(response);
        })
      };
    
        
    const handleClick = (event, name, calories) => {
      const selectedIndex = selected.indexOf(name);
      const selectedIndex2 = selected.indexOf(calories);
    
      let newSelected = [];
     if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }
      setSelected(newSelected);
    };
    console.log(selected)
    
    const isSelected = (name) => selected.indexOf(name,price) !== -1;
    const isSelected2 = (name) => selected.indexOf(name) !== -1;
      return (
          <div className="container ">
            <Card className={classes.Card} variant="outlined">
                <Table  aria-label="caption table">
                    <TableHead >
                        <TableRow>
                            <TableCell className={classes.heder}>
                             <h4>Create Fee Set</h4>      
                            </TableCell>
                        </TableRow>
                    </TableHead>  
                <TableBody>
                <br/>
                <div className="container ">
              <div className="Feeinput">
                <input   
                    placeholder="Feet Set Name"
                    type="text"
                    name="FeeSetName"
                    onChange={(event)=>{
                      setAddfeesetname(event.target.value)
                    }}
                    noValidate           
                />
                </div> 
            
                <div className="Feeinput">
                  <input   
                      placeholder="Room price"
                      type="number"
                      //name="FeeSetName"
                      onChange={(event)=>{
                        setRoomprice(event.target.value)
                       }}
                      noValidate           
                />
                </div> 
                    <h5 className={classes.head}> 
                          Feetype <Button onClick={handleClickOpen}>
                               <AddIcon/></Button>  
                  <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="edit-apartment">
                    <DialogTitle id="edit-apartment">Create Fee Type Name</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                    <div className="Building">
                    <Card className={classes.Dialogcards} variant="outlined">
                      <Table >
                        <TableBody>      
                        {feetype.map((row,index) => {
                        const isItemSelected = isSelected(row.feeTypeName);
                        const labelId = `enhanced-table-checkbox-${index}`;
                    return(      
                      <TableRow 
                          onClick={(event) => handleClick(event, row.feeTypeName)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.feeTypeName}
                          //selected={isItemSelected}
                          >       
                    <TableCell>
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                      />
                  </TableCell>
                  <TableCell align="Left">
                    {row.feeTypeName}
                  </TableCell>
                  <TableCell align="right">
                  <Chip label={row.feeTypePrice}/> 
                  </TableCell>
                </TableRow>
                );
            })}
            </TableBody>                     
          </Table>  
        </Card>
      </div> 
      <DialogActions >
          <Button 
              variant="contained" 
              color="primary" disableElevation
              style={{ backgroundColor: '#485D84' }}>
          Create
          </Button>   
          <Button variant="contained"  disableElevation
              onClick={handleClickOpen}>
              cancel
          </Button>    
          </DialogActions>
      </DialogContentText>
      </DialogContent>      
       </Dialog>
          </h5> 
          <Card className={classes.Cards} variant="outlined">
              <Table>
                {/*<TableCell> {selected} </TableCell>*/}
                <TableBody>
                  {selected.map((row)=>(
                  <TableRow>
                      <TableCell align="left">{row.name}</TableCell> 
                      <TableCell align="right">
                       <Chip label={row.feeTypePrice}/>
                      </TableCell>
                      <TableCell align="right">
                     
                      </TableCell>
                      <TableCell align="right">
                      <Button onClick={()=>{deletetable(row.id)}}>
                          {/*<DeleteSweepOutlinedIcon/>*/}
                          </Button> 
                      </TableCell>
                  </TableRow>        
                  ))}      
                  </TableBody>              
              </Table>  
            </Card>  
          </div>
          </TableBody>
        </Table>   

         <div className="container-fruid ">
          <Button 
              onClick={AddFeeSet}
              className={classes.Btn}
              variant="contained" color="primary" disableElevation
              style={{ backgroundColor: '#485D84' }}>
            Save
        </Button>             
      </div>      
    </Card>        
  </div>    
      );
    }
    



