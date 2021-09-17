import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { line } from 'cli-spinners';
import Axios from "axios";
import {BrowserRouter as Router, Route, NavLink, Switch, useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    fame: {
        width: "755px",
        height: "653px",
        backgroundColor: "#FFFFFF"
    },
    titleframe: {
        height: "85.7px",
        width: "100%",
        position: "relative"
    },
    mainframe: {
        height: "567.3px",
        width: "100%",
    },
    textbuilding: {
        fontSize: "22.6px",
        fontWeight: "bold",
        color: "#4A4A4A",
        paddingLeft: 40,
        paddingTop: 22
    },
    line: {
        height: "1px",
        width: "90%",
        backgroundColor: "#D8D8D8",
        top: 30,
        position: "relative",
        margin: "auto"
    },
    eachtitle: {
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setrow: {
        height: "31.5px",
        width: "100%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setrow2: {
        height: "31.5px",
        width: "100%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setwidth: {
        width: "100%",

    },
    setwidth2: {
        width: "100%",
        height: "59.8px",
        position: "relative"
    },
    setrow3: {
        height: "31.5px",
        width: "200%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setauto: {
        height: 266,
        width: 670,
        margin: "auto",
        paddingTop: 40,
        position: "relative"

    },
    buttonsubmit: {
        width: "407px",
        height: "42.8px",
        position: "absolute",
        top: 450,
        left: "20%"
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

}));

export default function Createbuilding(props) {

    const classes = useStyles()
   
    const { id } = useParams();

    useEffect(() => { 
        Axios.get("/building/building/" +id )
            .then(response =>
                
                {

                /*setBuilding(response.data.building);
                setAddress(response.data.address);
                setProvince(response.data.province);
                setSubdistric(response.data.subdistric);
                setDistrict(response.data.district);
                setZipcode(response.data.zipcode);
                setEmail(response.data.email);
                setPhone(response.data.phone);*/
                //console.log("hi hi hi" + response.data);      
                //console.log("hi hi hi" + building);    
                //console.log("hi hi hi" + address);   
                
                const {data} = response;
                setBuildingName(data[0].buildingName)
                setAddress(data[0].address)
                setDistrict(data[0].district)
                setProvince(data[0].province)
                setSubDistrict(data[0].subDistrict)
                setZipCode(data[0].zipCode)
                setEmail(data[0].email)
                setPhoneNo(data[0].phoneNo)

                console.log(data)
                     
            }
            
        )
            .catch(error => {
                console.log('Error getting fake data: ' + error);
                })             
    }, []);




      const [buildingName, setBuildingName] = useState('');
      const [address, setAddress] = useState('');
      const [province, setProvince] = useState('');
      const [subDistrict, setSubDistrict] = useState('');
      const [district, setDistrict] = useState('');
      const [zipCode, setZipCode] = useState('');
      const [email, setEmail] = useState('');
      const [phoneNo, setPhoneNo] = useState('');
  
 /*  const handleSubmit = event => {
      event.preventDefault();
      var data = {
        "Address": address,
        "District": district,
        "SubDistrict": subDistrict,
        "Province": province,
        "ZipCode": zipCode,
        "Email": email,
        "PhoneNumber": phoneNo,
        "Building": {
            "BuildingId": parseInt(id),
           
            "BuildingName": buildingName
        }
      }
      fetch('/building/edit-building/'+id, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(
        (result) => {
          alert(result['message'])
          if (result['status'] === 'ok') {
            window.location.href = '/';
          }
        }
      )
    }*/

    const handleSubmit = event => {
        event.preventDefault();
        Axios.post("/building/edit-building/"+id, {

            "Address": address,
            "District": district,
            "SubDistrict": subDistrict,
            "Province": province,
            "ZipCode": zipCode,
            "Email": email,
            "PhoneNumber":phoneNo,
            "Building": {
                "BuildingId": parseInt(id),
                "BuildingName": buildingName
            }

        }).then((response) => {
            window.location.href = '/building_sp';
            console.log(response);
        })

    };


  
    return (
        <div className={classes.fame}>
            <div className={classes.titleframe}>
                <div className={classes.textbuilding}>
                    Edit Building
                </div>
                <div className={classes.line} />
            </div>

            <div className={classes.mainframe}>
                <div className={classes.setauto}>
                    <div className="Building">
                        <div htmlFor="BuildingName" className={classes.eachtitle} style={{ paddingBottom: 5 }}>Building Name</div>
                       
                        <input   
                            className={classes.setrow}
                            //className="form-control"
                            placeholder="Building Name"
                            id="building"
                            type="text"
                            name="building"
                            value={buildingName}
                            onChange={(event) => {
                                setBuildingName(event.target.value);
                            }}
                        />
                      
                    </div>
                    <div className="password">
                        <div htmlFor="Address" className={classes.eachtitle} style={{ paddingBottom: 5 }}>Address</div>
                        <input
                            className={classes.setrow}
                            placeholder="Address"
                            type="text"
                            id="address"
                            //name="Address"
                            value={address}
                            onChange={(event) => {
                                setAddress(event.target.value);
                            }} />
                    </div>

                    <div style={{ display: "flex" }} className={classes.setwidth}>
                        <div className="Province">
                            <div htmlFor="Province" className={classes.eachtitle} ></div>

                            <input
                                className={classes.setrow2}
                                placeholder="Province"
                                type="text"
                                id="province"
                                value={province}
                                //name="Province"
                                onChange={(event) => {
                                    setProvince(event.target.value);
                                }} />

                        </div>
                        <div style={{ width: "12px" }}></div>
                        <div className="SubDistric">
                            <div htmlFor="Sub-Distric" className={classes.eachtitle}></div>

                            <input
                                className={classes.setrow2}
                                placeholder="Sub-disdrict"
                                type="text"
                                value={subDistrict}
                                id="sub distric"
                                //name="Province"
                                onChange={(event) => {
                                    setSubDistrict(event.target.value);
                                }} />

                        </div>
                        <div style={{ width: "12px" }}></div>

                        <div className="District">
                            <div htmlFor="District" className={classes.eachtitle}></div>
                            <input

                                className={classes.setrow2}
                                placeholder="Disdrict"
                                type="text"
                                value={district}
                                //name="Province"
                                onChange={(event) => {
                                    setDistrict(event.target.value);
                                }} />
                        </div>

                        <div style={{ width: "12px" }}></div>

                        <div className="zipcode">
                            <div htmlFor="District" className={classes.eachtitle}></div>
                            <input
                                className={classes.setrow2}
                                placeholder="Zipcode"
                                type="text"
                                value={zipCode}
                                //name="Zipcode"
                                onChange={(event) => {
                                    setZipCode(event.target.value);
                                }} />

                        </div>
                    </div>

                    <div style={{ display: "flex" }} className={classes.setwidth2}>
                        <div style={{ width: "45%" }} >
                            <div htmlFor="Phone" className={classes.eachtitle} style={{ paddingBottom: 5 }}>Phone Number</div>
                            <input
                                className={classes.setrow}
                                placeholder="Phone Number"
                                type="text"
                                value={phoneNo}
                                //name="Phone Number"
                                style={{ position: "absolute", width: "48.5%" }}
                                onChange={(event) => {
                                    setPhoneNo(event.target.value);
                                }} />
                        </div>
                        <div style={{ width: "45%" }}>
                            <div htmlFor="lastName" className={classes.eachtitle} style={{ paddingLeft: "46px", paddingBottom: 5 }}>Email</div>
                            <input
                                className={classes.setrow}
                                placeholder="Email"
                                type="text"
                                style={{ position: "absolute", width: "48.5%", left: 345 }}
                                value={email}
                                //name="lastName"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }} />
                        </div>
                    </div>

                         
                    <Button

                        className={classes.buttonsubmit}
                        variant="contained" color="primary" disableElevation
                        onClick={handleSubmit}
                        style={{ backgroundColor: '#485D84' }} >
                        Save
                    </Button>
                   

                </div>

            </div>


        </div>
    )
}


/*import React, { useState, useEffect } from "react";

import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
 
const EditProduct = () => {
   
  let history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
  const [user, setUser] = useState({
    product_name: "",
    product_price: "",
    product_description: ""
  });
 
  const { product_name, product_price, product_description } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
 
  useEffect(() => {
    loadUser();
  }, []);
 
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`/building/edit-building/${id}`, user);
    history.push("/");
  };
 
  const loadUser = async () => {
    const result = await axios.get(`/building/building/${id}`);
    setUser(result.data);
  };



  return (
    <div className="container">
     <div className="row"> 
      <div className="col-sm-5 col-offset-3 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Id"
              name=""
              value={id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="product_name"
              value={product_name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Price"
              name="product_price"
              value={product_price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Description"
              name="product_description"
              value={product_description}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-secondary btn-block">Update User</button>
        </form>
       </div>
      </div> 
    </div>
  );
};

export default EditProduct;*/


/*import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { line } from 'cli-spinners';
import Axios from "axios";
import {BrowserRouter as Router, Route, NavLink, Switch, useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    fame: {
        width: "755px",
        height: "653px",
        backgroundColor: "#FFFFFF"
    },
    titleframe: {
        height: "85.7px",
        width: "100%",
        position: "relative"
    },
    mainframe: {
        height: "567.3px",
        width: "100%",
    },
    textbuilding: {
        fontSize: "22.6px",
        fontWeight: "bold",
        color: "#4A4A4A",
        paddingLeft: 40,
        paddingTop: 22
    },
    line: {
        height: "1px",
        width: "90%",
        backgroundColor: "#D8D8D8",
        top: 30,
        position: "relative",
        margin: "auto"
    },
    eachtitle: {
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setrow: {
        height: "31.5px",
        width: "100%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setrow2: {
        height: "31.5px",
        width: "100%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setwidth: {
        width: "100%",

    },
    setwidth2: {
        width: "100%",
        height: "59.8px",
        position: "relative"
    },
    setrow3: {
        height: "31.5px",
        width: "200%",
        fontSize: "18px",
        color: "#4A4A4A"
    },
    setauto: {
        height: 266,
        width: 670,
        margin: "auto",
        paddingTop: 40,
        position: "relative"

    },
    buttonsubmit: {
        width: "407px",
        height: "42.8px",
        position: "absolute",
        top: 450,
        left: "20%"
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

}));

export default function Createbuilding(props) {

    const classes = useStyles()
    const [building, setBuilding] = useState('')
    const [addresss, setAddresss] = useState('')

    const { id } = useParams();
    
    useEffect(() => {
        Axios("/building/building/"+id)
        .then(result =>     
            {
            console.log("hi" + result.data)    
            setBuilding(result.data);
          
        })
        .catch(error => {
            console.log('Error getting fake data: ' + error);
            })
          
  }, [id]);


    
  const handleSubmit = event => {
      event.preventDefault();
      var data = {
        "Address": address,
        "District": district,
        "SubDistrict": subdistric,
        "Province": province,
        "ZipCode": zipcode,
        "Email": email,
        "PhoneNumber": phone,
        "Building": {
            "BuildingId": id,
            "BuildingName": building
        }
      }
      fetch('/building/edit-building/', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(
        (result) => {
          alert(result['message'])
          if (result['status'] === 'ok') {
            window.location.href = '/';
          }
        }
      )
    }
  
    const [building, setBuilding] = useState('');
    const [address, setAddress] = useState('');
    const [province, setProvince] = useState('');
    const [subdistric, setSubdistric] = useState('');
    const [district, setDistrict] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const Editsave = event => {
        event.preventDefault();
        Axios.post("/building/edit-building/" +id, {

            "Address": " 88 M. 8 Bang Na-Trat Frontage Rd.",
            "District": "Bang Sao Thong",
            "SubDistrict": "Bang Sao Thong",
            "Province": "Samut",
            "ZipCode": "10540",
            "Email": "assumptions@gmail.com",
            "PhoneNumber": "0272323333",
            "Building": {
                "BuildingId": id,
                "BuildingName": "LaLa"
            }

        }).then((response) => {
            window.location.href = '/building_sp';
            console.log(response);
        })

    };

    return (
        <div className={classes.fame}>
            <div className={classes.titleframe}>
                <div className={classes.textbuilding}>
                    Edit Building
                </div>
                <div className={classes.line} />
            </div>
          
            <div className={classes.mainframe}>
                <div className={classes.setauto}>
                    <div className="Building">
                        <div htmlFor="BuildingName" className={classes.eachtitle} style={{ paddingBottom: 5 }}>Building Name</div>
                        <input
                            
                            className={classes.setrow}
                            //className="form-control"
                            placeholder="Building Name"
                            id="building"
                            type="text"
                            name="building"
                            value={building}
                            
                            onChange={(event) => {
                                setBuilding(event.target.value);
                            }}
                        />
                    </div>
                    <div className="password">
                        <div htmlFor="Address" className={classes.eachtitle} style={{ paddingBottom: 5 }}>Address</div>
                        <input
                            className={classes.setrow}
                            placeholder="Address"
                            type="text"
                            id="address"
                            //name="Address"
                            value={address}
                            onChange={(event) => {
                                setAddress(event.target.value);
                            }} />
                    </div>

                    <div style={{ display: "flex" }} className={classes.setwidth}>
                        <div className="Province">
                            <div htmlFor="Province" className={classes.eachtitle} ></div>

                            <input
                                className={classes.setrow2}
                                placeholder="Province"
                                type="text"
                                id="province"
                                value={province}
                                //name="Province"
                                onChange={(event) => {
                                    setProvince(event.target.value);
                                }} />

                        </div>
                        <div style={{ width: "12px" }}></div>
                        <div className="SubDistric">
                            <div htmlFor="Sub-Distric" className={classes.eachtitle}></div>

                            <input
                                className={classes.setrow2}
                                placeholder="Sub-disdrict"
                                type="text"
                                value={subdistric}
                                id="sub distric"
                                //name="Province"
                                onChange={(event) => {
                                    setSubdistric(event.target.value);
                                }} />

                        </div>
                        <div style={{ width: "12px" }}></div>

                        <div className="District">
                            <div htmlFor="District" className={classes.eachtitle}></div>
                            <input

                                className={classes.setrow2}
                                placeholder="Disdrict"
                                type="text"
                                value={district}
                                //name="Province"
                                onChange={(event) => {
                                    setDistrict(event.target.value);
                                }} />
                        </div>

                        <div style={{ width: "12px" }}></div>

                        <div className="zipcode">
                            <div htmlFor="District" className={classes.eachtitle}></div>
                            <input
                                className={classes.setrow2}
                                placeholder="Zipcode"
                                type="text"
                                value={zipcode}
                                //name="Zipcode"
                                onChange={(event) => {
                                    setZipcode(event.target.value);
                                }} />

                        </div>
                    </div>

                    <div style={{ display: "flex" }} className={classes.setwidth2}>
                        <div style={{ width: "45%" }} >
                            <div htmlFor="Phone" className={classes.eachtitle} style={{ paddingBottom: 5 }}>Phone Number</div>
                            <input
                                className={classes.setrow}
                                placeholder="Phone Number"
                                type="text"
                                value={phone}
                                //name="Phone Number"
                                style={{ position: "absolute", width: "48.5%" }}
                                onChange={(event) => {
                                    setPhone(event.target.value);
                                }} />
                        </div>
                        <div style={{ width: "45%" }}>
                            <div htmlFor="lastName" className={classes.eachtitle} style={{ paddingLeft: "46px", paddingBottom: 5 }}>Email</div>
                            <input
                                className={classes.setrow}
                                placeholder="Email"
                                type="text"
                                style={{ position: "absolute", width: "48.5%", left: 345 }}
                                value={email}
                                //name="lastName"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }} />
                        </div>
                    </div>

                         
                    <Button

                        className={classes.buttonsubmit}
                        variant="contained" color="primary" disableElevation
                        onClick={Editsave }
                        style={{ backgroundColor: '#485D84' }} >
                        Save
                    </Button>
                   

                </div>

            </div>

    
        </div>
    )
}*/
