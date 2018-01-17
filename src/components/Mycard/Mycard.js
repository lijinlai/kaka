import React, { Component } from 'react'
import './mycard.css'
import xiaoyu from '../images/xiaoyu.png'
import{ Link } from 'react-router-dom'
import xingbake from '../images/xingbake.jpg'
import tou3 from '../images/tou3.png'
import chayao from '../images/chayao.png'

class Mycard extends Component {
  render(){
    return(
      <div className="Mycard">
        <div className="header">
          <Link to='/myhome'>
            <img src={xiaoyu} alt=""/>
          </Link>
          <p>我的名片</p>
        </div>
        <div className='banner'>
          <img src={xingbake} alt="" />
        </div>
        <div className="information">
          <img src={tou3} alt=""/>
          <div>
            <p>15100000000</p>
            <p>山东省 临沂市</p>
            <p>IT互联网</p>
          </div>
          <div></div>
          <div>
            <p>访问总量 261</p>
            <p>获赞总数 96</p>
          </div>
        </div>
        <div className="guaiai">
          <p>这家伙很懒哈</p>
          <div></div>
          <img src={chayao} alt=""/>
        </div>
      </div>
    )
  }
}

export default Mycard
