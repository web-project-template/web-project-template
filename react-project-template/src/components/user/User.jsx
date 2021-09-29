import './User.css';
import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      msg: ""
    };
  }

  render() {
    return (
      <div className="app-user">
        <h2 style={{borderBottom: "1px solid #e4e4e4"}}>个人信息</h2>
        <Link className='btn btn-primary' to="/user/edit">编辑</Link>
      </div>
    )
  }
}