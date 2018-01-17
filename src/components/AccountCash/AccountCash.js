import React, { Component } from 'react'
import Hammer from 'react-hammerjs'
import './cash.css'
import{ Link } from 'react-router-dom'
import inner from '../images/inner.png'

class AccountCash extends Component {
  state={
    text:''
  }
  handleBack=()=>{
    this.props.history.go(-1)
  }
  handlechange= e =>{
    this.setState({
      text:e.target.value
    })
  }

  render(){
    return(
      <div className="AccountCash">
        <div className="header">
          <Hammer onTap={this.handleBack} >
            <span>
              取消
            </span>
          </Hammer>
          <p>积分兑换</p>
        </div>
        <div className="abox">
          <div>
            <img src={inner} alt=""/>
            <p>积分兑换</p>
            <div>
              |<input type="text" value={this.state.text} onChange={this.handlechange} />
            </div>
            <p>积分余额860，<span>全部兑换</span></p>
            <div className='tixian'>
              <Link to='/news/account/cash/add'>
                确定
              </Link>
            </div>
            <p className='tt'>2小时内到账</p>
          </div>

        </div>
      </div>
    )
  }
}

export default AccountCash
