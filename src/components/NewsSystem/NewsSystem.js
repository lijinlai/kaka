import React, { Component } from 'react'
import Hammer from 'react-hammerjs'
import './newssystem.css'
import xiaoyu from '../images/xiaoyu.png'

class System extends Component {
  handleBack=()=>{
    this.props.history.go(-1)
  }
  render(){
    return(
      <div className="System">
        <div className="header">
          <Hammer onTap={this.handleBack} >
            <img src={xiaoyu} alt=""/>
          </Hammer>
          <p>系统通知</p>
          <div className='dian'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="time">
          <p>2017-01-21</p>
        </div>
        <div className='box'>
          <p>30秒带你体验随享咔咔</p>
          <span>随享咔咔是一款可以随时随刻帮助你所想看到的任何一处场景，只要那个地方有网络，有接单的人，便能看见虽身不能处的地方的场景。</span>
        </div>
      </div>
    )
  }
}

export default System
