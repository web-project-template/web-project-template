import React from 'react';
import './Waterfall.scss';

export default class Waterfall extends React.Component {
    constructor(props) {
        super(props)

        const images = [
            "images/wall/4f94970f-baaa-40fb-848f-07144a40cd08.png",
            "images/wall/288dea35-9654-4305-b103-bc43f6f46a3b.png",
            "images/wall/20250117172105070861.png",
            "images/wall/c374181e-9b1d-4d1b-9b8c-0d0b38defd9a.jpeg",
            "images/wall/c2249136-f7c1-4d34-a1f4-27f72f56b2f7.jpeg",
            "images/wall/a1ec7808-ab5e-4f9d-974d-d12ce3f563ed.jpeg",
            "images/wall/55a312c1-eefb-4811-bcc6-6c005281befd.jpeg",
            "images/wall/4f94970f-baaa-40fb-848f-07144a40cd08.png",
            "images/wall/288dea35-9654-4305-b103-bc43f6f46a3b.png",
            "images/wall/20250117172105070861.png",
            "images/wall/c374181e-9b1d-4d1b-9b8c-0d0b38defd9a.jpeg",
            "images/wall/c2249136-f7c1-4d34-a1f4-27f72f56b2f7.jpeg",
            "images/wall/a1ec7808-ab5e-4f9d-974d-d12ce3f563ed.jpeg",
            "images/wall/55a312c1-eefb-4811-bcc6-6c005281befd.jpeg",
        ]

        this.state = {
            columnMaxHeight: 0,
            imageList: images.map(url => {
                return {
                    url,
                    top: 0,
                    left: 0,
                }
            }),
        }
    }

    componentDidMount() {
        const rootEle = this.refs['container'];
        const {width} = rootEle.getBoundingClientRect();
        const {columnCount, columnWidth, columnGap} = calculate(width)

        console.log({width});

        this.containerWidth = width
        this.columnGap = columnGap
        this.columnCount = columnCount
        this.columnWidth = columnWidth
        this.columnHeightArr = Array.apply(null, {length: this.columnCount}).map(() => 0)

        setTimeout(() => {
            this.load()
        }, 100)

    }

    async load() {
        for (let i = 0; i < this.state.imageList.length; i++) {
            const item = this.state.imageList[i]
            const {url} = item;
            let image = await asyncLoadImage(url).catch(err => {
                console.log('err 加载图片错误：', url, err)
            })

            if (!image) return

            const footerEle = this.refs[`footer${i}`];
            const react = footerEle.getBoundingClientRect();
            console.log(footerEle, JSON.parse(JSON.stringify(react)));
            const {height: footerHeight} = react;
            const scaleHeight = (this.columnWidth) / (image.width / image.height) + this.columnGap
            const itemHeight = scaleHeight + footerHeight
            // console.log(image.width, image.height, scaleHeight, footerHeight, itemHeight)
            console.log({scaleHeight, footerHeight, itemHeight})

            let min = Math.min(...this.columnHeightArr)
            let minIndex = this.columnHeightArr.indexOf(min)

            this.state.imageList[i].left = minIndex * (this.columnWidth + this.columnGap)
            this.state.imageList[i].top = min;

            this.columnHeightArr[minIndex] = min + itemHeight

            this.setState({
                columnMaxHeight: Math.max(...this.columnHeightArr),
                imageList: this.state.imageList
            })
        }
    }

    render() {
        const {footerRender} = this.props;
        return (<div ref='container' className="list" style={{height: this.state.columnMaxHeight + 'px'}}>
            {
                this.state.imageList.map((item, idx) => {
                    return (<div className="list-item" style={{
                        width: this.columnWidth + "px",
                        left: item.left + 'px',
                        top: item.top + 'px'
                    }} key={idx}>
                        <img src={item.url}/>
                        <div ref={`footer${idx}`}>
                            {footerRender(item, idx)}
                        </div>
                    </div>)
                })
            }
        </div>)
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

function calculate(containerWidth) {
    let columnCount = 3
    let columnGap = 5
    let columnWidth = (containerWidth - ((columnCount - 1) * columnGap)) / columnCount

    return {
        columnCount,
        columnGap,
        columnWidth
    }
}