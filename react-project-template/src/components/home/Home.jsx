import './Home.css';
import Header from './Header';
import Body from './Body';
import React, {Component} from 'react';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      msg: ""
    };
  }

  funa = (txt) => {
    console.log("收到子传父数据：", txt)
  }

  render() {
    return (
      <div className="app-home">
        <Header mainTitle='图片欣赏' funa={this.funa}/>
        <Body/>
      </div>
    )
  }
}