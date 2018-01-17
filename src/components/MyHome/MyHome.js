import React, { Component } from 'react'
import './myhome.css'
import{ Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import {Icon} from 'antd';
import Footer from '../Footer/Footer'
import kaka from '../images/kaka_03.png'
import tou3 from '../images/tou3.png'
import rili from '../images/rili.png'
import a1 from '../images/a1.png'
import a2 from '../images/a2.png'
import a3 from '../images/a3.png'
import a4 from '../images/a4.png'
import a5 from '../images/a5.png'
import a6 from '../images/a6.png'
import a7 from '../images/a7.png'
import a8 from '../images/a8.png'

class MyHome extends Component {
  state={
    list:[
      {
        id:'1',
        imgurl:a1,
        title:'我的账户',
        link:'/news/account'
      },
      {
        id:'2',
        imgurl:a2,
        title:'积分充值',
        link:'/myhome/integral'
      }
    ],
    task:[
      {
        id:'3',
        imgurl:a3,
        title:'已完成任务'
      },
      {
        id:'4',
        imgurl:a4,
        title:'已发布任务'
      },
      {
        id:'5',
        imgurl:a5,
        title:'我的收藏'
      },
    ],
    about:[
      {
        id:'6',
        imgurl:a6,
        title:'意见反馈',
        link:'/myhome/opinion'
      },
      {
        id:'7',
        imgurl:a7,
        title:'关于我们',
        link:'/myhome/about'
      },
      {
        id:'8',
        imgurl:a8,
        title:'设置',
        link:'/myhome/setting'

      }
    ]
  }
  render(){
    const { list,task,about } =this.state
    const alist =list.map((item,id)=>{
      return(
        <div key={id}>
          <Link to={{
              pathname:item.link,
              state: item
          }}>
            <div className="aone">
              <img src={item.imgurl} alt=""/>
              <div>
                <p>
                  {item.title}
                </p>
                <Icon type="right" />
              </div>
            </div>
          </Link>
        </div>
      )
    })
    const atask =task.map((item,id)=>{
      return(
        <div key={id}>
          <Link to={{
              pathname:`/myhome/task/${item.id}`,
              state: item
          }}>
            <div className="aone">
              <img src={item.imgurl} alt=""/>
              <div>
                <p>
                  {item.title}
                </p>
                <Icon type="right" />
              </div>
            </div>
          </Link>
        </div>
      )
    })
    const aabout =about.map((item,id)=>{
      return(
        <div key={id}>
          <Link to={{
              pathname:item.link,
              state: item
          }}>
            <div className="aone">
              <img src={item.imgurl} alt=""/>
              <div>
                <p>
                  {item.title}
                </p>
                <Icon type="right" />
              </div>
            </div>
          </Link>
        </div>
      )
    })
    return(
      <div className="MyHome">
        <div className="kaka">
          <img src={kaka} alt="ka" className='kaka'/>
          <div className='my'>
            <img src={tou3} alt=""/>
            <p>15100000000</p>
            <Link to='/myhome/card'>
              <div>我的名片</div>
            </Link>
          </div>
          <div className='qiandao'>
            <img src={rili} alt=""/>
            <p>签到</p>
          </div>
        </div>
        <div className="list">
          {alist}
          {atask}
          {aabout}
        </div>
        <Footer/>
        </div>
    )
  }
}

export default MyHome
