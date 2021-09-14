import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import './../../Css/Announcement/Arraylist.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';





function DropBuilding(props) {


    const [buildings, setBuilding] = useState([]);

    const api = axios.create({
        baseURL: '/dropdown/floors/King Solomon'
        // 'https://536a20dd-fe69-4914-8458-6ad1e9b3ce18.mock.pstmn.io/testimnew'
        // baseURL: '/announcement/type-announcements'
    })


    const getType = async () => {
        let data = await api.get('/').then(({ data }) => data);
        // this.setState({ news: data })
        setBuilding(data)

    }

    useEffect(() => {

        getType();

    }, []);

    const handleChange = (event) => {
        // console.log(event.target.value);
        props.save(event.target.value)
    }


    return (
        <div style={{ display: 'flex' }}>
            <select onChange={handleChange} style={{ backgroundColor: 'white', height: 31.5, width: 161, fontSize: 16, color: '#4A4A4A' }} >

                <option >Not Specify</option>

                {buildings.map(buildings =>
                    <option  value={buildings.text}>{buildings.text}</option>
                )}

            </select>
            {/* <ArrowDropDownIcon style={{ color: "#000000", position: 'absolute', left: 130, top: 67 }} /> */}

        </div>
    );

}
export default DropBuilding;