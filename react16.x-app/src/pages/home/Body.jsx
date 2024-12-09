import React, {Component} from 'react'
import {getIdolImages} from "../../api"

export default class Body extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      columnMaxHeight: 0,
      showList: []
    }
  }

  onClickMoreBtn(name = '全部') {
    if (this.state.loading) return
    this.getIdolImages(name)
  }

  resetPhotoWallState() {
    this.setState({
      columnMaxHeight: 0,
      showList: [],
    })
    this.columnHeightArr = Array.apply(null, {length: this.columnCount}).map(() => 0)
  }

  getIdolImages(name = '全部') {
    this.setState({loading: true})
    getIdolImages({name}).then(res => {
      this.setState({loading: false})
      this.loadImages(res.map(item => item))
    })
  }

  async loadImages(arr) {
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentNavigation !== this.props.currentNavigation) {
      this.resetPhotoWallState();
      this.getIdolImages(this.props.currentNavigation)
    }
  }

  async componentDidMount() {
    console.log('currentNavigation=', this.props.currentNavigation)
    let {columnCount, columnWidth, columnGap} = calculate()

    this.columnGap = columnGap
    this.columnCount = columnCount
    this.columnWidth = columnWidth
    this.columnHeightArr = Array.apply(null, {length: this.columnCount}).map(() => 0)

    this.onClickMoreBtn()
  }

  render() {
    const {currentNavigation} = this.props;
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