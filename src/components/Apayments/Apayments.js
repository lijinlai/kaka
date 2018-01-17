import React, { Component } from 'react'
import './apayments.css'
import{ Link } from 'react-router-dom'
import xiaoyu from '../images/xiaoyu.png'
import shuaxin from '../images/shuaxin.png'
import inner from '../images/inner.png'

class Apayments extends Component {
  state={
    pay:[
      {
        id:'1',
        name:'签到奖励',
        imgurl:inner,
        pie:'+10.00',
        day:'今日',
        time:'11:25',
        today:'2017-03-17'
      },
      {
        id:'11',
        name:'完成任务',
        imgurl:inner,
        pie:'+50.00',
        day:'今日',
        time:'13:25',
        today:'2017-03-17'
      }
    ]
  }
  render(){
    const { pay }=this.state
    const apay =pay.map((item,id)=>{
      return(
        <div key={id}>
          <img src={item.imgurl} alt=""/>
          <p>{item.name}</p>
          <span>{item.pie}</span>
          <div></div>
          <div></div>
          <div>
            {item.day}
            <p>{item.time}</p>
          </div>
          <p>{item.today}</p>
        </div>
      )
    })
    return(
      <div className="Apayments">
        <div className="header">
          <Link to='/news/account'>
            <img src={xiaoyu} alt="" className='xiaoyu'/>
          </Link>
          <p>我的账户</p>
          <img src={shuaxin} alt="" style={{marginRight:'4%'}}/>

        </div>
        <div className="title">
          <p>本月</p>
          <div></div>
          <span>查看月账单 ></span>
        </div>
        <div className='apay'>
          {apay}
        </div>
      </div>
    )
  }
}

export default Apayments
