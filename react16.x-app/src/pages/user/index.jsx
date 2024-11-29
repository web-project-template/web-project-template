import './User.css';
import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Tom',
      sex: '男',
      age: 18
    }
  }

  render() {
    const {name, sex, age,} = this.state;
    return (
      <div className="user-page">
        <h2>个人信息</h2>
        <div>name:{name}</div>
        <div>sex:{sex}</div>
        <div>age:{age}</div>
        <Link className='btn btn-primary' to="/user/edit">编辑</Link>
      </div>
    )
  }
}