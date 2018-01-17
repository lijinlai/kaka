import React, { Component } from 'react'
import Hammer from 'react-hammerjs'
import kong from '../images/xiaoguaishou.png'
import xiaoyu from '../images/xiaoyu.png'
import './mytask.css'

class Mytask extends Component {
  handleBack=()=>{
    this.props.history.go(-1)
  }
  render(){
    // console.log(this.props.location);
    const { state } =this.props.location
    return(
      <div className="Mytask">
        <div className="header">
          <Hammer onTap={this.handleBack} >
            <img src={xiaoyu} alt=""/>
          </Hammer>
          <p>{state.title}</p>
        </div>
        <img src={kong} alt=""/>
        <p>空空如也～</p>
      </div>
    )
  }
}

export default Mytask
