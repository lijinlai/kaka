import React, { Component } from 'react'
import './login.css'
import{ Link } from 'react-router-dom'
import Hammer from 'react-hammerjs'

import logo from '../images/logo.png'
import shouji from '../images/shouji.png'
import mima from '../images/mima.png'
import denglu from '../images/denglu.png'
import icon from '../images/icon.png'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'



class Login extends Component {
  state={
    number:'',
    password:''
  }
  handlechange=e=>{
    this.setState({
      number:e.target.value
    })
  }
  handlechange1=e=>{
    this.setState({
      password:e.target.value
    })
  }
  handleTap=()=>{
    const{number ,password}=this.state
      if(number===''|| number!=='18712737180'){
        alert('请输入正确的手机号')
      }else if(number==='18712737180' && password!=='666666'){
        alert('密码不正确')
      }else if(password===''|| password!=='666666'){
        alert('密码不正确')
      }else if(number==='' && password===''){
        alert('请输入账户和密码')
      }else if(number==='18712737180' && password==='666666'){
        this.props.history.push('/home')
        sessionStorage.id=number
      }

  }
  render(){

    return(
      <div className="Login">
        <img src={logo} alt="logo" className='logo'/>
        <div className='one'>
          <img src={shouji} alt="shou"/>
          <input type="tel"  placeholder='请输入手机号' onChange={this.handlechange}/>
        </div>
        <div className='two'>
          <img src={mima} alt="mi"/>
          <input type="password" placeholder='请输入密码'
            onChange={this.handlechange1}/>
        </div>
        <p>忘记密码？<span>重置</span></p>
        <a>
          <Hammer onTap={this.handleTap} >
            <img src={denglu} alt="deng" className='denglu' />
          </Hammer>
        </a>
        <div className='or'>
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <div className='icon'>
          <img src={icon2} alt="i"/>
          <img src={icon1} alt="i"/>
          <img src={icon} alt="i"/>
        </div>
        <Link to='/home'>
          <div className='btn'>随便看看</div>
        </Link>
        </div>
    )
  }
}

export default Login
