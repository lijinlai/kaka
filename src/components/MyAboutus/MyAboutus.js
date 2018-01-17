import React, { Component } from 'react'
import './myaboutus.css'
import Hammer from 'react-hammerjs'
import xiaoyu from '../images/xiaoyu.png'
import logo from '../images/logo.png'

class MyAboutus extends Component {
  handleBack=()=>{
    this.props.history.go(-1)
  }

  render(){
    return(
      <div className="MyAboutus">
        <div className="header">
          <Hammer onTap={this.handleBack} >
            <img src={xiaoyu} alt=""/>
          </Hammer>
          <p>关于我们</p>
        </div>
        <img src={logo} alt=""/>
        <p>帮你所看，随享咔咔</p>
        <div className="data">
          <p>官方微信：weijichao1125</p>
          <p>联系邮箱：727308779@qq.com</p>
          <p>手机号码：15100000000</p>
          <p>关于我们：<br/><span>一个帮你实现你现在你想看所看不到的景象平台，帮你了解所发生的真实景象。</span></p>
        </div>
      </div>
    )
  }
}

export default MyAboutus
