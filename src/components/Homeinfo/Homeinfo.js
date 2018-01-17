import React, { Component } from 'react'
import './homeinfo.css'
import { Icon } from 'antd';
import 'antd/dist/antd.css'
import{ Link } from 'react-router-dom'
import dizhi from '../images/dizhi22.png'
import inner from '../images/inner.png'
import Footer from '../Footer/Footer'

class Homechen extends Component {
  state={
    text:''
  }
  handlechange= e =>{
    this.setState({
      text:e.target.value
    })
  }
  render(){
    // console.log(this.props.location);
    const { state } =this.props.location
    return(
      <div className="Homechen">
        <div className="header">
          <Link to='/home'>
            <Icon type="left" className='icon'/>
          </Link>
          <p>任务详情</p>
        </div>
        <div className="main">
          <div className="chen">
            <div>
              <img src={state.imgurl} alt=""/>
              <div>
                <p>chen xx</p>
                <img src={state.icon} alt=""/>
              </div>
            </div>
          </div>
          <div className="text">
            <textarea cols="30" rows="4" name='hou' value={this.state.text} onChange={this.handlechange} placeholder={state.text}>

            </textarea>
            <div className='add'>
              <div>
                <img src={dizhi} alt="" className='one'/>
                <p>{state.address}</p>
              </div>
              <div>
                <img src={inner} alt="" className='two'/>
                <span>{state.integral}</span>
              </div>
            </div>
          </div>
          <div className="renwu">
            <Link to='/hometask'>
              <div>接受任务</div>
            </Link>
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}

export default Homechen
