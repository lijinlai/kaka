import React, { Component } from 'react'
import './newshome.css'
import{ Link } from 'react-router-dom'
import kaka from '../images/kaka_03.png'
import Footer from '../Footer/Footer'
import tou4 from '../images/tou4.png'
import renqun from '../images/renqun.png'
import tongzhi from '../images/tongzhi.png'

class News extends Component {
  state={
    list:[
      {
        id:'aa',
        title:'初夏',
        imgurl:tou4,
        conent:'在么 ?',
        time:'昨天 17:43',
        link:'/news/info'
      },
      {
        id:'bb',
        title:'系统消息',
        imgurl:tongzhi,
        conent:'30秒带你体验随享咔咔?',
        time:'下午 01:25',
        link:'/news/system'

      },{
        id:'cc',
        title:'欢迎加入随享咔咔',
        imgurl:renqun,
        conent:'主人，小咔已经恭候多时了，200积分奉上，可在钱包查收，有任何建议可在消息中回复小咔',
        time:'2017-01-25',
        link:'/news/account'

      }
    ]
  }
  render(){

    const { list }=this.state
    const alist =list.map((item,id)=>{
      return(
          <div key={id}>
            <Link to={{
              pathname: item.link
            }} >
              <img src={item.imgurl} alt=""/>
              <div>
                <p>{item.title}</p>
                <div>
                  <p>{item.conent}</p>
                  <span>{item.time}</span>
                </div>
              </div>
            </Link>
            </div>

      )
    })
    return(
      <div className="News">
        <div className="kaka">
          <img src={kaka} alt="ka" className='kaka'/>
        </div>
        <div className="con">
          { alist }
        </div>
        <Footer />
      </div>
    )
  }
}

export default News
