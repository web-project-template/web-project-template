import React, {Component} from 'react'
import Pobsub from 'pubsub-js'

export default class Header extends Component {
  static defaultProps = {
    mainTitle: "图片欣赏",
    subTitle: "子标题"
  }

  constructor() {
    super()
  }

  onClickSubNav = (event) => {
    const name = event.currentTarget.getAttribute('data-name')
    if (this.props.currentNavigation !== name) {
      Pobsub.publish(`CHANGE_CURRENT_NAV`, name)
    }
  }

  render() {
    const {mainTitle, subTitle} = this.props;
    var navList = [
      '全部',
      '程潇',
      '欧阳娜娜',
      '蔡徐坤',
      'Lisa',
      '莫文蔚',
      '蔡健雅',
      '任家萱',
      '田馥甄',
      '陈嘉桦',
    ]
    return (
      <div className={'home-header'}>
        <h2>
          {mainTitle}
          <span>&nbsp;&nbsp;{subTitle}</span>
        </h2>
        <div className={'scroller'}>
          {
            navList.map((val, index) => {
              return <button key={index} data-name={val} onClick={this.onClickSubNav}>{val}</button>
            })
          }
        </div>
      </div>
    )
  }
}