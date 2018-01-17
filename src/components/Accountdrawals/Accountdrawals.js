import React, { Component } from 'react'
import Hammer from 'react-hammerjs'
import './drawals.css'
import{ Link } from 'react-router-dom'


class Accountdrawals extends Component {
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
      <div className="Accountdrawals">
        <div className="header">
          <Hammer onTap={this.handleBack} >
            <span>
              取消
            </span>
          </Hammer>
          <p>零钱提现</p>
        </div>
        <div className='bbox'>
          <div>
            <div className='one'>
              <p>到银行卡</p>
              <div>
                工商银行（9647） <p>提现到工商银行，手续费<span>0.2%</span></p>
              </div>
            </div>
            <div className='one'>
              <p>到微信账号</p>
              <div style={{color:'#8f8f8f'}}>
                午后的阳光（5695）
              </div>
            </div>
            <div className='two'>
              <p>提现余额</p>
              <div>
                ¥<input type="text" value={this.state.text} onChange={this.handlechange} />
              </div>
            </div>
            <div className='three'>
              现金余额86.00,<span>全部提现</span>
            </div>
            <div className='tixian'>
              <Link to='/news/account/drawals/add'>
                提现
              </Link>
            </div>
            <p className='tt'>2小时内到账</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Accountdrawals
