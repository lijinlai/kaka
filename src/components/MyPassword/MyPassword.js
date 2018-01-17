import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import xiaoyu from '../images/xiaoyu.png'
import './password.css'

class MyPassword extends Component {
  render(){
    return(
      <div className="MyPassword">
        <div className="header">
          <Link to='/myhome/setting'>
            <img src={xiaoyu} alt=""/>
          </Link>
          <p>修改密码</p>
        </div>
        <div>
          <input type="text" placeholder='请输入原始密码'/>
          <input type="text" placeholder='请输入新密码'/>
          <input type="text" placeholder='再次输入新密码'/>
        </div>
        <Link to='/myhome/setting'>
          <div>
            确定
          </div>
        </Link>

      </div>
    )
  }
}

export default MyPassword
