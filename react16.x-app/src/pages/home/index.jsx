import './index.css'
import React, {Component} from 'react'
import Header from './Header'
import Body from './Body'
import Pobsub from 'pubsub-js'

export default class Home extends Component {
  state = {
    currentNavigation: ""
  }

  constructor(props) {
    super(props)

    Pobsub.subscribe("CHANGE_CURRENT_NAV", (type, data) => {
      this.setState({currentNavigation: data})
    })
  }

  render() {
    return (
      <div className="home">
        <Header currentNavigation={this.state.currentNavigation}/>
        <Body currentNavigation={this.state.currentNavigation}/>
      </div>
    )
  }
}