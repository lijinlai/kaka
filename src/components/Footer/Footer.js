import React, { Component } from 'react'
import './footer.css'
import{ Link } from 'react-router-dom'
import shouye from '../images/shouyeHong.png'
import faxian from '../images/faxianhui.png'
import fabu from '../images/fabujia.png'
import xinxi from '../images/xinxihui.png'
import wode from '../images/wodehui.png'

class Footer extends Component {
  render(){
    return(
        <footer>
          <div>
            <Link to='/home'>
              <img src={shouye} alt=""/>
              <p>首页</p>
            </Link>
          </div>
          <div>
            <Link to='/findhome'>
              <img src={faxian} alt=""/>
              <p>发现</p>
            </Link>
          </div>
          <div>
            <Link to='/release'>
              <div><img src={fabu} alt=""/></div>
              <p>发布</p>
            </Link>
          </div>
          <div>
            <Link to='/News'>
              <img src={xinxi} alt=""/>
              <p>消息</p>
            </Link>
          </div>
          <div>
            <Link to='/MyHome'>
              <img src={wode} alt=""/>
              <p>我的</p>
            </Link>
          </div>
        </footer>
    )
  }
}

export default Footer
