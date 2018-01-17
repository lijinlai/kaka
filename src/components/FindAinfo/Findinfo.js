import React, { Component } from 'react'
import './chen.css'
import Hammer from 'react-hammerjs'
import kong from '../images/xiaoguaishou.png'
import xiaoyu from '../images/xiaoyu.png'

class Chen extends Component {

  handleBack=()=>{
    this.props.history.go(-1)
  }
  render(){
    console.log(this.props);
    const { state } =this.props.location
    return(
      <div className="Chen">
        <div className='wrap'>

          <div className="header">
            <Hammer onTap={this.handleBack} >
              <img src={xiaoyu} alt=""/>
            </Hammer>

            <p>个人资料</p>
            <div className='dian'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className='touxiang'>
            <img src={state.imgurl} alt=""/>
          </div>
          <div className='name'>{state.name}</div>
          <div className="btn">
            <div>关注</div>
            <div>私信</div>
          </div>
          <div className="xiao">
            <p>{state.fabu}</p>
            <p>{state.huozan}</p>
            <p>{state.guanzhu}</p>
            <p>{state.fensi}</p>
          </div>
        </div>
        <div className='kongkong'>
          <div className="Top">
            个人发布
          </div>
          <img src={kong} alt=""/>
          <p>空空如也，请勤劳发布</p>
        </div>

      </div>
    )
  }
}

export default Chen
