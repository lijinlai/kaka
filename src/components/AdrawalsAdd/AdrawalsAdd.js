import React, { Component } from 'react'
import shijian from '../images/shijian.png'
import Hammer from 'react-hammerjs'
import './drawalsadd.css'

class AdrawalsAdd extends Component {
  handleBack=()=>{
    this.props.history.go(-1)
  }
  render(){
    return(
      <div className="AdrawalsAdd">
        <div className="header">
          <p>兑换详情</p>
        </div>
        <div className='inn'>
          <img src={shijian} alt=""/>
          <p>提现申请已提交</p>
          <div>
            <div>
              <p>预计到账时间</p>
              <p>2017-03-05 13:14:44</p>
            </div>
            <div>
              <p>储蓄卡</p>
              <p>工商银行 尾号2344</p>
            </div>
            <div>
              <p>提现金额</p>
              <p>¥26</p>
            </div>
            <div>
              <p>手续费</p>
            <p>0.01</p>
            </div>
          </div>
          <Hammer onTap={this.handleBack} >
            <div className='tixian'>
              完成
            </div>
          </Hammer>
        </div>
      </div>
    )
  }
}

export default AdrawalsAdd
