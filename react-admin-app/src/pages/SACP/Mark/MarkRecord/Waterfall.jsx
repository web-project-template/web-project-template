import React from 'react';
import './Waterfall.scss';

export default class Waterfall extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columnMaxHeight: 0,
            imageList: this.props.images.map(url => {
                return {
                    id: Math.ceil(Math.random() * 100000000),
                    url,
                    top: 0,
                    left: 0,
                }
            }),
        }
    }

    componentDidMount() {
        setTimeout(() => {
            const rootEle = this.refs['container'];
            const {width} = rootEle.getBoundingClientRect();
            const {columnCount, columnWidth, columnGap} = calculate(width)

            this.columnGap = columnGap
            this.columnCount = columnCount
            this.columnWidth = columnWidth
            this.columnHeightArr = Array.apply(null, {length: this.columnCount}).map(() => 0)
            this.startIndex = 0;

            setTimeout(() => {
                this.load()
            }, 100)
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.images.length > prevProps.images.length) {
            console.log(prevProps.images.length)
            let startIndex = prevProps.images.length;
            let newImages = this.props.images.slice(startIndex, this.props.images.length)
            let newItems = newImages.map(url => {
                return {
                    id: Math.ceil(Math.random() * 100000000),
                    url,
                    top: 0,
                    left: 0,
                }
            })
            this.setState({
                imageList: this.state.imageList.concat(newItems)
            }, () => {
                this.load();
            })
        }
    }

    async load() {
        let i = this.startIndex;
        for (i; i < this.state.imageList.length; i++) {
            this.startIndex++;
            const item = this.state.imageList[i]
            const {url} = item;
            let image = await asyncLoadImage(url).catch(err => {
                console.log('err 加载图片错误：', url, err)
            })

            if (!image) return

            const footerEle = this.refs[`footer${i}`];
            const react = footerEle.getBoundingClientRect();
            // console.log(footerEle, JSON.parse(JSON.stringify(react)));
            const {height: footerHeight} = react;
            const scaleHeight = (this.columnWidth) / (image.width / image.height) + this.columnGap
            const itemHeight = scaleHeight + footerHeight
            // console.log(image.width, image.height, scaleHeight, footerHeight, itemHeight)
            // console.log({scaleHeight, footerHeight, itemHeight})

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
                    }} key={item.id}>
                        <div className="image-wrapper">
                            <img src={item.url}/>
                        </div>
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
    let columnCount = 7
    let columnGap = 5
    let columnWidth = (containerWidth - ((columnCount - 1) * columnGap)) / columnCount

    return {
        columnCount,
        columnGap,
        columnWidth
    }
}