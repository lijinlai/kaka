import React, { Component } from 'react'
import './newsinfo.css'
import Hammer from 'react-hammerjs'
import xiaoyu from '../images/xiaoyu.png'
import huatong from '../images/huatong.png'
import tou3 from '../images/tou3.png'
import tou1 from '../images/tou1.png'

class Newsinfo extends Component {
  state={
    me:[
      {
        id:'11',
        talking:'在么?',
        imgurl:tou3,
      }
    ],
    text:''
  }
  handleBack=()=>{
    this.props.history.go(-1)
  }
  render(){
    const { me }=this.state
    const atalk =me.map((item,id)=>{
      return(
        <div key={id}>

          <p>{item.talking}</p>

          <img src={item.imgurl} alt=""/>
        </div>
      )
    })
    return(
      <div className="Newsinfo">
        <div className="header">
          <Hammer onTap={this.handleBack} >
            <img src={xiaoyu} alt=""/>
          </Hammer>

          <p>初夏</p>
          <div className='dian'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="talking">
          <img src={tou1} alt=""/>
          <p> 在么？</p>
        </div>
        <div className="atalking">
          { atalk }
        </div>
        <div className="reply">
          <div>
            <img src={huatong} alt=""/>
            <input type="text" placeholder='评论'/>

            <p>回复</p>

          </div>
        </div>

      </div>
    )
  }
}

export default Newsinfo
