import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import './../../Css/Announcement/Arraylist.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';


const api = axios.create({
    baseURL: 'https://536a20dd-fe69-4914-8458-6ad1e9b3ce18.mock.pstmn.io/testimnew'
    // baseURL: '/announcement/type-announcements'


})


class Arraylist extends React.Component {

    state = {
        news: []
    }
    constructor() {
        super();
        this.getType();
    }

    getType = async () => {
        let data = await api.get('/').then(({ data }) => data);
        this.setState({ news: data })

    }

    handleChange(e) {
        console.log(e.target.value)
    }


    render() {
        return (
            <div>
                <select onChange={this.handleChange} style={{ backgroundColor: 'white' }} >
                    {/* {this.newstype.myarray.map(data=>(
                        <option title={data}>{data}</option>
                    ))} */}

                    {/* <Paper> */}
                        {this.state.news.map(news =>
                            <option key={news.id} value={news.id}>{news.text}</option>
                        )}
                    {/* </Paper> */}


                </select>
                {console.log(4)}

            </div>
        );
    }
}
export default Arraylist;