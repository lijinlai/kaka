import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Modal, Button ,Icon} from 'antd';
import './findhome.css'
import{ Link } from 'react-router-dom'
import tou1 from '../images/tou1.png'
import tou2 from '../images/tou2.png'
import tou3 from '../images/tou3.png'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import dizhi22 from '../images/dizhi22.png'
import yanjing from '../images/yanjing.png'
import xin from '../images/xin.png'
import xiaoxi from '../images/xiaoxi.png'
import boy from '../images/boy.png'
import girl from '../images/girl.png'
import jiantou from '../images/jiantou.png'
import Footer from '../Footer/Footer'

class FindHome extends Component {
  state={
    authors:[
      {
        id:'a',
        imgurl:tou1,
        name:'泡沫',
        icon:boy,
        text:'安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦...',
        img1:img1,
        img2:img2,
        img3:img3,
        imgs:[{imgs:img1},{imgs:img2},{imgs:img3}],
        time:'58分钟前',
        dizhi:dizhi22,
        address:'安秀村',
        faxian:yanjing,
        num1:326,
        xin:xin,
        num2:566,
        xiaoxi:xiaoxi,
        num3:36,
        fabu:'0 发布',
        huozan:'14 获赞',
        guanzhu:'18 关注',
        fensi:'12 粉丝'
      },{
        id:'b',
        imgurl:tou2,
        name:'初夏',
        icon:girl,
        text:'在乌镇，入夜后,和闺蜜一起在酒吧窗前喝一杯甘甜的“三白酒”，让人回味无穷,去年的这个时间我们同样坐在今天的位置，回忆着那是的点点滴滴...',
        img1:img4,
        img2:img5,
        img3:img6,
        imgs:[{imgs:img4},{imgs:img5},{imgs:img6}],
        time:'1小时前',
        dizhi:dizhi22,
        address:'浙江省',
        faxian:yanjing,
        num1:371,
        xin:xin,
        num2:128,
        xiaoxi:xiaoxi,
        num3:75,
        fabu:'0 发布',
        huozan:'14 获赞',
        guanzhu:'18 关注',
        fensi:'12 粉丝'
      },{
        id:'c',
        imgurl:tou3,
        name:'陈 xx',
        icon:boy,
        imgs:[{imgs:img7}],
        img4:img7,
        time:'1小时前',
        dizhi:dizhi22,
        address:'浙江省',
        faxian:yanjing,
        num1:371,
        xin:xin,
        num2:128,
        xiaoxi:xiaoxi,
        num3:75,
        link:'/findchen',
        fabu:'0 发布',
        huozan:'14 获赞',
        guanzhu:'18 关注',
        fensi:'12 粉丝'
      }
    ],
    kaiguan: false
  }
  showModal = () => {
    this.setState({
      kaiguan: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      kaiguan: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      kaiguan: false,
    });
  }
  render(){
    const { authors }=this.state

    const author = authors.map((item,id)=>{
      return(
        <div key={id} className='ath'>
          <div className='top'>
            <div className='left'>
              <Link to={{
                pathname: `/findhome/findinfo/${item.id}`,
                state: item
              }}>
                <img src={item.imgurl} alt=""/>
              </Link>
              <p>{item.name} <img src={item.icon} alt=""/></p>
            </div>
            <div className='right'>
              <Button type="primary" onClick={this.showModal} style={{backgroundColor:'none',marginTop:0,top:0,left:0,position:'relative'}}>
                <Icon type="down" />
              </Button>
              <Modal
                title="Basic Modal"
                visible={this.state.kaiguan}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                style={{margin:0}}
              >
                <img src={jiantou} alt=""/>
              </Modal>
            </div>
          </div>
          <div className="min">
            <p>{item.text}</p>
            <div>
              {item.imgs.map((i,id)=>{
                return(
                  <img src={i.imgs} alt="" key={id}/>
                )
              })}
            </div>
          </div>
          <div className="fot">
            <p>{item.time}</p>
            <div>
              <img src={item.dizhi} alt=""/>
              <p>{item.address}</p>
            </div>
            <div>
              <img src={yanjing} alt=""/>
              <p>{item.num1}</p>
              <img src={xin} alt=""/>
              <p>{item.num2}</p>
              <img src={xiaoxi} alt=""/>
              <p>{item.num3}</p>
            </div>
          </div>
        </div>
      )
    })
    return(
      <div className="FindHome">
        <div className="header">
          <Link to='/home'>
            <Icon type="left" className='icon'/>
          </Link>
          <p>最新任务</p>
        </div>
        <div className='aaaa'>
          { author }
        </div>
        <Footer />
      </div>
    )
  }
}

export default FindHome
