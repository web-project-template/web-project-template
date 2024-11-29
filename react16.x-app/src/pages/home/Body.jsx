/* eslint-disable */
import React, {Component} from 'react'
import Pobsub from 'pubsub-js'
import {getChengXiao, /*getOuYangNaNa*/} from "../../api"

export default class Body extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      columnMaxHeight: 0,
      showList: []
    }

    Pobsub.subscribe("CLICK_VIEW", (type, data) => {
      console.log("收到兄弟节点传来的数据：", data)
    })

    Pobsub.subscribe("CLICK_NAVIGATION", (type, data) => {
      console.log("收到兄弟节点传来的数据：", data)
    })

    Pobsub.subscribe("CLICK_CX", (type, data) => {
      this.setState({showList: []})
    })

    Pobsub.subscribe("CLICK_OYNN", (type, data) => {
      this.setState({showList: []})
    })
  }

  onClickMoreBtn() {
    if (this.state.loading) return

    this.setState({loading: true})
    getChengXiao().then(res => {
      this.setState({loading: false})
      this.load(res.map(item => item))
    })
  }

  loadMore() {

  }

  async load(arr) {
    for (let i = 0; i < arr.length; i++) {
      let url = arr[i]
      let image = await asyncLoadImage(url).catch(err => {
        console.log('err 加载图片错误：', url, err)
      })

      if (!image) return

      let finalHeight = (this.columnWidth) / (image.width / image.height) + this.columnGap
      // console.log(image.width, image.height, finalHeight)

      let min = Math.min(...this.columnHeightArr)
      let minIndex = this.columnHeightArr.indexOf(min)

      let item = {
        url,
        image,
        top: min,
        left: minIndex * (this.columnWidth + this.columnGap),
      }

      this.columnHeightArr[minIndex] = min + finalHeight

      this.setState({
        columnMaxHeight: Math.max(...this.columnHeightArr),
        showList: this.state.showList.concat(item)
      })
    }
  }

  async componentDidMount() {
    // console.log("componentDidMount");

    let {columnCount, columnWidth, columnGap} = calculate()

    this.columnGap = columnGap
    this.columnCount = columnCount
    this.columnWidth = columnWidth
    this.columnHeightArr = Array.apply(null, {length: this.columnCount}).map(() => 0)

    this.onClickMoreBtn()
  }

  render() {
    return (
      <div className="home-body">
        <div className="list" style={{height: this.state.columnMaxHeight + 'px'}}>
          {
            this.state.showList.map((item, idx) => {
              return (<div className="list-item" style={{
                width: this.columnWidth + "px",
                left: item.left + 'px',
                top: item.top + 'px'
              }} key={idx}>
                <div>
                  <img src={(item.url) || './default.gif'}/>
                </div>
              </div>)
            })
          }
        </div>
        <div className={'more-btn'}
             onClick={this.onClickMoreBtn.bind(this)}>{this.state.loading ? '加载中...' : '加载更多...'}</div>
      </div>
    )
  }
}

function asyncLoadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = url
    img.onload = () => {
      resolve(img)
    }
    img.onerror = (err) => {
      // console.log(err)
      reject(err)
    }
  })
}

function calculate() {
  let columnCount = 2
  let columnGap = 5
  let columnWidth = (window.innerWidth - 10 - columnGap) / 2

  columnCount = columnCount > 4
    ? 4
    : columnCount < 1
      ? 1
      : columnCount

  return {
    columnCount,
    columnGap,
    columnWidth
  }
}