import React, { Component } from 'react'
import './acashadd.css'
import inner from '../images/inner.png'
import Hammer from 'react-hammerjs'



class AcashAdd extends Component {
  handleBack=()=>{
    this.props.history.go(-1)
  }
  render(){
    return(
      <div className="AcashAdd">
        <div className="header">
          <p>兑换详情</p>
        </div>
        <div className='inn'>
          <img src={inner} alt=""/>
          <p>提现申请已提交</p>
          <div>
            <div>
              <p>预计到账时间</p>
              <p>2017-03-05 13:14:44</p>
            </div>
            <div>
              <p>到账号</p>
              <p>chen xx</p>
            </div>
            <div>
              <p>兑换积分</p>
              <p>B 600</p>
            </div>
            <div>
              <p>手续费</p>
              <p>B 10</p>
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

export default AcashAdd
