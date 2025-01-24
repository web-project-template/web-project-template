import React from 'react';
import './Waterfall.scss';

export default class Waterfall extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columnMaxHeight: 0,
            imageList: [],
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

        let arr = [
            "https://static-kefu.xoyo.com/scap/dev/20250124/label_upload_imgs/4f94970f-baaa-40fb-848f-07144a40cd08.png",
            "https://static-kefu.xoyo.com/scap/dev/20250124/label_upload_imgs/288dea35-9654-4305-b103-bc43f6f46a3b.png",
            "https://static-kefu.xoyo.com/scap/dev/20250117/question/20250117172105070861.png",
            "https://static-kefu.xoyo.com/scap/dev/20241220/video_label_snapshot/71/c374181e-9b1d-4d1b-9b8c-0d0b38defd9a.jpeg",
            "https://static-kefu.xoyo.com/scap/dev/20250124/video_label_snapshot/71/c2249136-f7c1-4d34-a1f4-27f72f56b2f7.jpeg",
            "https://static-kefu.xoyo.com/scap/dev/20241224/video_label_snapshot/71/a1ec7808-ab5e-4f9d-974d-d12ce3f563ed.jpeg",
            "https://static-kefu.xoyo.com/scap/dev/20241223/video_label_snapshot/69/55a312c1-eefb-4811-bcc6-6c005281befd.jpeg",
        ]
        this.load(arr)
    }

    async load(arr) {
        for (let i = 0; i < arr.length; i++) {
            let url = arr[i]
            let image = await asyncLoadImage(url).catch(err => {
                console.log('err 加载图片错误：', url, err)
            })

            if (!image) return

            const scaleHeight = (this.columnWidth) / (image.width / image.height) + this.columnGap
            // const itemHeight = scaleHeight +
            // console.log(image.width, image.height, scaleHeight)

            let footerNode = this.props.footerRender({url});
            console.log(footerNode)

            let min = Math.min(...this.columnHeightArr)
            let minIndex = this.columnHeightArr.indexOf(min)

            let item = {
                url,
                image,
                top: min,
                left: minIndex * (this.columnWidth + this.columnGap),
            }

            this.columnHeightArr[minIndex] = min + scaleHeight

            this.setState({
                columnMaxHeight: Math.max(...this.columnHeightArr),
                imageList: this.state.imageList.concat(item)
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
                        {/*{footerRender(item)}*/}
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