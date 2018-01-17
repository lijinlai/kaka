import React, { Component } from 'react'
import './problem.css'
import xiaoyu from '../images/xiaoyu.png'
import { Link } from 'react-router-dom'

class Problem extends Component {
  state = {
    data: [
      {
        id: 33,
        user1: 'Q',
        user2: 'A',
        ask: '提现后多长时间可以到我的支付宝账户？',
        anwser: '您申请提现以后，系统会马上处理您的提现申请，一般情况下24小时内会到账，遇周末或节假日特色情况下会顺延到工作日处理，处理成功后会收到体统的提示。'
      },
      {
        id: 34,
        user1: 'Q',
        user2: 'A',
        ask: '提现会收手续费吗？',
        anwser: '会的，由于第三方支付渠道（支付宝、微信）需要收取一定的手续费，同时，作为提供服务所得回报，随享会对每笔收入收取2%的服务费。受第三方支付渠道政策调整或其他因素，随享有权随时调整服务费率。'
      }
    ]
  }
  render(){
    const { data } = this.state
    const adatae =data.map( item => {
      return (
        <div key={ item.id }>
          <div>
            <p>{ item.user1 } : </p>
            <p>{ item.ask }</p>
          </div>
          <div>
            <p>{ item.user2 } : </p>
            <p>{ item.anwser }</p>
          </div>
        </div>
      )
    })
    return(
      <div className="Problem">
        <div className="header">
          <Link to='/news/account'>
            <img src={xiaoyu} alt=""/>
          </Link>
          <p>常见问题</p>
        </div>
        <div >
          {adatae}
        </div>

      </div>
    )
  }
}

export default Problem
