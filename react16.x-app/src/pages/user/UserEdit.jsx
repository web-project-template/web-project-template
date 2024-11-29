import './User.css';
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class UserEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: ""
    };
  }

  onClickSave() {
    setTimeout(() => {
      this.props.history.push({pathname: '/user'})
    }, 1000)
  }

  render() {
    const {userName} = this.state;
    return (
      <div className="user-edit">
        <h2 style={{borderBottom: "1px solid #e4e4e4"}}>编辑个人信息</h2>
        <br/>
        姓名：
        <input type="text" value={userName} onChange={(event) => {
          this.setState({
            userName: event.target.value
          })
        }}/>
        <br/>
        <button className='btn btn-primary' onClick={this.onClickSave.bind(this)}>保存</button>
      </div>
    )
  }
}

export default withRouter(UserEdit)