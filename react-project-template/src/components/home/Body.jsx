import './Body.css';
import React, {Component} from 'react';
import Pobsub from 'pubsub-js';
import {getChengXiao, /*getOuYangNaNa*/} from "../../api";

export default class Body extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showList: [
        {
          "title": "程潇1",
          "url": "./cx01.jpg"
        },
        {
          "title": "程潇2",
          "url": "./cx02.jpg"
        },
        {
          "title": "程潇3",
          "url": "./cx03.jpg"
        },
        {
          "title": "程潇4",
          "url": "./cx04.jpg"
        }
      ]
    };
    this.imgs = []

    Pobsub.subscribe("CLICK_VIEW", (type, data) => {
      console.log("收到兄弟节点传来的数据：", data)
    })

    Pobsub.subscribe("CLICK_NAVIGATION", (type, data) => {
      console.log("收到兄弟节点传来的数据：", data)
    })

    Pobsub.subscribe("CLICK_CX", (type, data) => {
      this.restCXList();
    })

    Pobsub.subscribe("CLICK_OYNN", (type, data) => {
      this.restOYNNList();
    })
  }

  restCXList() {
    this.setState({
      showList: [
        {
          "title": "程潇1",
          "url": "./cx01.jpg"
        },
        {
          "title": "程潇2",
          "url": "./cx02.jpg"
        },
        {
          "title": "程潇3",
          "url": "./cx03.jpg"
        },
        {
          "title": "程潇4",
          "url": "./cx04.jpg"
        }
      ]
    })
    this.lazyLoadImg();
  }

  restOYNNList() {
    this.setState({
      showList: [
        {
          "title": "欧阳娜娜",
          "url": "./oynn01.jpg"
        },
        {
          "title": "欧阳娜娜",
          "url": "./oynn02.jpg"
        },
        {
          "title": "欧阳娜娜",
          "url": "./oynn03.jpg"
        },
        {
          "title": "欧阳娜娜",
          "url": "./oynn04.jpg"
        }
      ]
    })
    this.lazyLoadImg();
  }

  onClickMoreBtn() {
    getChengXiao().then(res => {
      this.setState({
        showList: this.state.showList.concat(res)
      })
      this.imgs = [].concat(...document.querySelectorAll('.home-body img'))
      // console.log("this.state.showList:", this.state.showList)
    })
  }

  componentDidMount() {
    // console.log("componentDidMount");
    function throuttle(fn, interval) {
      let lastTime = new Date().valueOf()
      return function () {
        let now = new Date().valueOf()

        if (now - lastTime > interval) {
          lastTime = now
          fn()
        }
      }
    }

    this.imgs = [].concat(...document.querySelectorAll('.home-body img'))
    this.lazyLoadImg();

    window.addEventListener('scroll', throuttle(this.onScrollListener.bind(this), 100), false);
  }

  onScrollListener() {
    this.lazyLoadImg();
  }

  lazyLoadImg() {
    let windowHeight = window.innerHeight
    if (this.imgs.length <= 0) return;
    this.imgs.forEach((item, idx) => {
      let sourceSrc = item.getAttribute('data-src')
      if (sourceSrc) {
        let currentSrc = item.getAttribute('src')
        let rect = item.getBoundingClientRect()
        if (rect.top < windowHeight && currentSrc !== sourceSrc) {
          // console.log('加载图片:', item)
          item.setAttribute('src', sourceSrc)
        }
      }
    })
  }

  render() {
    return (
      <div className="home-body">
        <div className="cotainer">
          {
            this.state.showList.map((val, idx) => {
              return (<div className="item" key={idx}>
                <div className="item-inner">
                  <div className="item-img">
                    <img src='./default.gif' data-src={val.url} alt=""/>
                  </div>
                  <div className="item-desc">
                    <p>{val.title}</p>
                  </div>
                </div>
              </div>)
            })
          }
        </div>
        <div className={'more-btn'} onClick={this.onClickMoreBtn.bind(this)}>加载更多...</div>
      </div>
    )
  }
}