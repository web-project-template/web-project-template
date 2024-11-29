import './index.css'
import React, {Component} from 'react'
import Header from './Header'
import Body from './Body'

export default class Home extends Component {
  state = {
    currentNavigation: ""
  }

  constructor(props) {
    super(props)
  }

  changeNavigation = (value) => {
    this.setState({currentNavigation: value})
  }

  render() {
    return (
      <div className="home">
        <Header mainTitle='图片欣赏' changeNavigation={this.changeNavigation}/>
        <Body currentNavigation={this.state.currentNavigation}/>
      </div>
    )
  }
}