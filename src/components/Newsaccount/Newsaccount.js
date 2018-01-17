import React, { Component } from 'react'
import './account.css'
import{ Link } from 'react-router-dom'
import xiaoyu from '../images/xiaoyu.png'
import shuaxin from '../images/shuaxin.png'
import xianjin from '../images/xianjin.png'
import jifen from '../images/jifen.png'
import guaishou from '../images/guaishou.png'
import shouzhi from '../images/shouzhi.png'
import changjian from '../images/changjian.png'
class Account extends Component {

  render(){
    return(
      <div className="Account">
        <div className="header">
          <Link to='/myhome'>
            <img src={xiaoyu} alt="" className='xiaoyu'/>
          </Link>
          <p>我的账户</p>
          <img src={shuaxin} alt="" style={{marginRight:'4%'}}/>

        </div>
        <div className="qian">
          <img src={xianjin} alt=""/>
          <div>
            <p>现金余额</p>
            <span>26.60</span>
          </div>
          <Link to='/news/account/drawals'><p>提现</p></Link>
        </div>
        <div className="qian">
          <img src={jifen} alt=""/>
          <div>
            <p>积分余额</p>
            <span>180.00</span>
          </div>
          <Link to='/news/account/cash'><p>兑现</p></Link>
        </div>
        <div className="guai">
          <img src={guaishou} alt=""/>
        </div>
        <div className="ming">
          <div>
            <Link to='/news/account/payments'>
              <img src={shouzhi} alt=""/>
              <p>收支明细</p>
            </Link>
          </div>
          <div>
            <Link to='/news/account/problem'>
              <img src={changjian} alt=""/>
              <p>常见问题</p>
            </Link>
          </div>

        </div>
      </div>
    )
  }
}

export default Account
