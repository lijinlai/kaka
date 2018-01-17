import React, { Component } from 'react'
import './settings.css'
import tou3 from '../images/tou3.png'
import { Link } from 'react-router-dom'
import { Switch } from 'antd'
import xiaoyu from '../images/xiaoyu.png'

class Settings extends Component {

  render() {
    return (
      <div className='settings-wrap'>
        <div className="header">
          <Link to='/myhome'>

            <img src={xiaoyu} alt=""/>
          </Link>
          <p>意见反馈</p>
        </div>
        <div>
          <img src={ tou3 } alt="加载失败"/>
        </div>
        <div>
          <span onClick={()=>{this.props.history.push('/myhome/setting/data')}}>
            <p>修改个人资料</p>
            <p>{'>'}</p>
          </span>
          <span onClick={()=>{this.props.history.push('/myhome/setting/password')}}>
            <p>修改密码</p>
            <p>{'>'}</p>
          </span>
          <span>
            <p>清除缓存</p>
            <p>210MB</p>
          </span>
          <span>
            <p>是否公开我的消息</p>
            <Switch />
          </span>
          <span>
            <p>接受新消息通知</p>
            <Switch defaultChecked={true}/>
          </span>
        </div>
        <Link to='/login'>退出登录</Link>

      </div>
    )
  }
}

export default Settings
