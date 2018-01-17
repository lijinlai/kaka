import React, { Component } from 'react'
import './hometalk.css'
import{ Link } from 'react-router-dom'
import Hammer from 'react-hammerjs'
import { Icon } from 'antd';
import 'antd/dist/antd.css'
import tou1 from '../images/tou1.png'
import tou2 from '../images/tou2.png'
import tou3 from '../images/tou3.png'
import boy from '../images/boy.png'
import girl from '../images/girl.png'
import huatong from '../images/huatong.png'

class HomeTalk extends Component {
  state ={
    persion:[
      {
        id:'11',
        text:'古根海姆博物馆的外部非常朴实无华,只是将博物馆的名字装饰了一下....',
        name:'H.H',
        icon:boy,
        yourname:'BIG.BOSS',
        talk:'读完你写的我也想去看看',
        imgurl:tou1
      },
      {
        id:'22',
        text:'光是建筑就与众不同啊....',
        name:'五海',
        icon:boy,
        imgurl:tou2
      }
    ],
    TextConent:'',

  }
  handlechange1=(e)=>{
    this.setState({
      TextConent:e.target.value
    })
  }
  handleHui = e =>{
    const { persion }=this.state
    const elsetext={
        name:'happy',
        icon:girl,
        imgurl:tou3,
        text:this.state.TextConent
      }
    this.setState({
      persion:[...persion,elsetext],
      TextConent:''
    })

  }

  render(){
    const {persion}=this.state
    const talking = persion.map((item,index)=>{
      return (
        <div className="persion" key={index}>
          <div>
            <img src={item.imgurl} alt=""/>
            <div>
              <p>{item.name}</p>
              <img src={item.icon} alt=""/>
            </div>
          </div>

          <p>{item.text}</p>
          <div className='your'>
            <p>{item.yourname} : </p>{item.talk}
          </div>

        </div>
      )
    })



    return(
      <div className="HomeTalk">
        <div className="header">
          <Link to='/home'>
            <Icon type="left" className='icon'/>
          </Link>
          <p>评论详情</p>
        </div>
        <div className="talk">
          <div className="ping">评论 (261) </div>
          {talking}

        </div>
        <div className="reply">
          <div>
            <img src={huatong} alt=""/>
            <input type="text" placeholder='评论' value={this.state.TextConent} onChange={this.handlechange1}/>
            <Hammer onTap={this.handleHui} >
              <p>回复</p>
            </Hammer>
          </div>
        </div>

      </div>
    )
  }
}

export default HomeTalk
