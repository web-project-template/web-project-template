import './User.css';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class UserEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  onClickSave() {
    console.log("保存中...");
    setTimeout(() => {
      console.log("保存成功，跳转到/user");
      this.props.history.push({pathname: '/user'})
    }, 1000)
  }

  render() {
    return (
      <div className="user-edit">
        <h2 style={{borderBottom: "1px solid #e4e4e4"}}>编辑个人信息</h2>
        <br/>
        <p style={{color: 'red', textAlign: 'center'}}>更改个人信息</p>
        <br/>
        <button className='btn btn-primary' onClick={this.onClickSave.bind(this)}>保存</button>
      </div>
    )
  }
}

export default withRouter(UserEdit)