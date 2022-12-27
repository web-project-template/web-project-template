import './Header.css'
import React, {Component} from 'react'
import Pobsub from 'pubsub-js';

export default class Header extends Component {
  static defaultProps = {
    mainTitle: "",
    subTitle: "子标题"
  }

  constructor() {
    super();

    this.state = {
      curSubTab: "CX"
    };
  }

  onClickSubNav(data, evt) {
    if (this.state.curSubTab !== data) {
      // console.log('切换subtab:', data, evt)
      Pobsub.publish(`CLICK_${data}`)
      this.setState({curSubTab: data})
    }
  }

  render() {
    return (
      <div className={'home-header'}>
        <h2>{this.props.mainTitle}<span>&nbsp;&nbsp;{this.props.subTitle}</span></h2>
        <div className={'scroller'}>
          {/*<button onClick={this.onClickSubNav.bind(this, 'all')}>全部</button>*/}
          <button onClick={this.onClickSubNav.bind(this, 'CX')}>程潇</button>
          <button onClick={this.onClickSubNav.bind(this, 'OYNN')}>欧阳娜娜</button>
          <button onClick={() => this.props.funa('子传父,蔡徐坤')}>蔡徐坤</button>
          <button onClick={() => this.props.funa('子传父,Lisa')}>Lisa</button>
          <button onClick={() => Pobsub.publish("CLICK_VIEW", '兄弟传值,莫文蔚')}>莫文蔚</button>
          <button onClick={() => Pobsub.publish("CLICK_NAVIGATION", '兄弟传值,蔡健雅')}>蔡健雅</button>
          <button onClick={() => this.props.funa('任家萱')}>任家萱（Selina）</button>
          <button onClick={() => this.props.funa('田馥甄')}>田馥甄（Hebe）</button>
          <button onClick={() => this.props.funa('陈嘉桦')}>陈嘉桦（Ella）</button>
        </div>
      </div>
    )
  }
}