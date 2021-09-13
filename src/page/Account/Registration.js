import React, { useState } from "react";
 import { makeStyles } from '@material-ui/core/styles';
 import Button from '@material-ui/core/Button';
 import TextField from '@material-ui/core/TextField';
 import Grid from '@material-ui/core/Grid';
 import Typography from '@material-ui/core/Typography';
 import Paper from '@material-ui/core/Paper';
 import Axios from "axios";
 import "../../Css/Account/Registration.css";
 import NativeSelect from '@material-ui/core/NativeSelect';

 import Container from '@material-ui/core/Container';
 
 const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(7),
    marginRight: 540,
    maxWidth: 510,
    borderRadius: 18
  },
  image: {
    width: 128,
    height: 128,
  },
  
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  fabButton: {
    
    width: 400,
    margin: '0 auto',
  },

  Move:{
    right: 10,
  }
}));
 
 export default function UserCreate() {
   const classes = useStyles();
   const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [confirmpass, setConfirmpass] = useState("");
  const [genderId, setGenderId] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [confirmpass, setConfirmpass] = useState("")
  
   const handleSubmit = event => {
     event.preventDefault();
     Axios.post("/staff/register", {
      "FirstName": firstname,
      "LastName": lastname, 
      "Username": username,
      "Password": password,
      "BirthDate": birthDate,
      "GenderId": parseInt(genderId),
      "Email": email,
      "PhoneNo": phoneNo,
     
    }).then((response)=>{
          window.location.href = '/logins';
      console.log(response);
    })
};
   
   return (
   
       <div className="wrappers">
       <Paper className={classes.paper}>
         <Typography 
         component="h1" variant="h5">
          <h2 style={{ color: '#485D84' }} > REGISTRATION</h2>
         </Typography>
         <form className={classes.form} onSubmit={handleSubmit}>
           <Grid container spacing={2}>
             <Grid item xs={12} sm={6}>
              <div className="firstName">
                 <input
                      placeholder="First Name"
                      type="text"
                      //name="firstName"
                      onChange={(event)=> {
                        setFirstname(event.target.value);
                        }}             
                    />
                  </div>
             </Grid>
             <Grid item xs={10} sm={6}>
             <div className="firstName">
                    <input
                      placeholder="Last Name"
                      type="text" 
                      onChange={(event)=> {
                        setLastname(event.target.value);
                        }}    
                  />
                  </div>
                
              
             </Grid>
             <Grid item xs={12} sm={6}>
             <div className="firstName">
             <input
                      placeholder="First Name"
                      type="Date"
                      //name="firstName"
                      onChange={(event)=> {
                        setBirthDate(event.target.value);
                      }}     
                    />
                    </div>
             </Grid>
             <Grid item xs={12} sm={6}>
             <div className="firstName">
                    <input  
                      placeholder="Gender"
                      type="number" 
                      onChange={(event)=> {
                        setGenderId(event.target.value);
                      }}
                              
                 />
              </div>
             </Grid>
            
             <Grid item xs={12} sm={6}>
             <div className="firstName">
                    <input  
                      placeholder="Email"
                      type="text"  
                      onChange={(event)=> {
                        setEmail(event.target.value);
                      }}
                             
                 />
              </div>
             </Grid>

             <Grid item xs={12} sm={6}>
             <div className="firstName">
                    <input  
                      placeholder="Phone number"
                      type="text"  
                      onChange={(event)=> {
                        setPhoneNo(event.target.value);
                      }}
                             
                 />
              </div>
             </Grid>

             <Grid item xs={12}>
             <div className="firstName">
                  <input
                    placeholder="Username"
                    type="text"     
                    onChange={(event)=> {
                      setUsername(event.target.value);
                    }}
                             
                />     
              </div>
             </Grid>

             <Grid item xs={12} sm={6}>
             <div className="firstName">
                    <input  
                      placeholder="Password"
                      type="password"
                      onChange={(event)=> {
                        setPassword(event.target.value);
                      }}/>
              </div>
             </Grid>
           </Grid>
           <br/>

           <Button 
                type="submit" variant="contained" 
                color="primary" disableElevation
                style={{ backgroundColor: '#485D84' }} 
                className={classes.fabButton}>                   
                    Sign Up
          </Button>
         </form>
         </Paper>
         </div>
 
   );
 }


 