import React, { Component } from 'react'
import 'antd/dist/antd.css'
import{ Link } from 'react-router-dom'
import { Modal} from 'antd';
import './homepages.css'
import { Carousel } from 'antd';
import Hammer from 'react-hammerjs'
import kaka from '../images/kaka_03.png'
import dizhi from '../images/dizhi.png'
import shousuo from '../images/shousuo.png'
import banner2 from '../images/banner2.png'
import banner1 from '../images/banner1.jpg'
import banner from '../images/banner.jpg'
import chen from '../images/chen.png'
import anran from '../images/anran.png'
import boy from '../images/boy.png'
import girl from '../images/girl.png'
import xingbake from '../images/xingbake.jpg'
import inner from '../images/inner.png'
import dizhi22 from '../images/dizhi22.png'
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import yanjing from '../images/yanjing.png'
import xin from '../images/xin.png'
import xiaoxi from '../images/xiaoxi.png'

import Footer from '../Footer/Footer'

class HomePages extends Component {
  state ={
    people:[
      {
        id:'1',
        text:'想了解一下武汉市武昌区汉街的街景和街上的几个咖啡店里面的情况...',
        imgurl:chen,
        name:'chen xx',
        icon:boy,
        integral:50,
        address:'上海市浦东新区...'
      },{
        id:'2',
        text:'我想知道这个星巴克现在..',
        imgurl:anran,
        name:'an然',
        icon:girl,
        integral:100,
        address:'合肥市包河区...',
        pic:xingbake,

      }
    ],
     visible: true
  }
  handleOk = (e) => {
    this.setState({
      visible:false,
    });
    sessionStorage.vis = false
  }
  handleCancel = (e) => {
    this.setState({
      visible:false
    });
    sessionStorage.vis = false
  }
componentDidMount() {
  // alert(sessionStorage.vis)
  if(sessionStorage.vis === 'false'){
    this.setState({
     visible:false
   })
 }

}

  render(){
    const {people} =this.state
    const list =people.map((item,id)=>{
      return (

          <div key={item.id} className='apeople'>
            <Link to={{
              pathname: `/home/info/${item.id}`,
              state: item
            }}>
              <p>{item.text}</p>
              <img src={item.pic} alt="" className='pic'/>
              <div className='box'>
                <img src={item.imgurl} alt="加载失败"/>
                <div>
                  <div>
                    <p>{item.name}</p>
                    <img src={item.icon} alt="" className='bbg'/>
                    <img src={inner} alt="" className='bbb'/>
                    <span>{item.integral}</span>
                  </div>
                  <div className='address'>
                    <img src={dizhi22} alt=""/>
                    <p>{item.address}</p>
                  </div>
                </div>
              </div>
            </Link>
            </div>

      )
    })
    return(
      <div className="HomePages">
        <header>
          <p>纽约</p>
          <img src={dizhi} alt="di" className='dizhi'/>
          <img src={kaka} alt="ka" className='kaka'/>
          <img src={shousuo} alt="fa" className='faxian'/>
        </header>
        <main>
          <Carousel autoplay>
            <div><img src={banner2} alt="2"/></div>
            <div><img src={banner1} alt="1"/></div>
            <div><img src={banner} alt="0"/></div>
          </Carousel>
        </main>
        <div className="content">
          <div className='one'>
            <div className='a'>
              <div></div>
              <p>最新任务</p>
              <div></div>
            </div>
            <div className='people'>
              {list}
            </div>
          </div>
          <div className="two">
            <div className='a'>
              <div></div>
              <p>今日推荐</p>
              <div></div>
            </div>
            <div className="Recommend">
              <div className='aa'>
                <img src={pic1} alt=""  className='one'/>
                <img src={pic2} alt="" className='two'/>
                <img src={pic3} alt="" className='three'/>
              </div>
              <div className='bb'>
                <span>所罗门-R-古根海娒美术馆（The Solomon R .Guggenheim Museum)</span>
                <span> 古根海娒美术馆</span>
              </div>
              <div  className='cc'>
                <img src={yanjing} alt="" className='one'/>
                <p>6326</p>
                <img src={xin} alt="" className='two'/>
                <p>70</p>
                <Link to='/hometalk'>
                  <img src={xiaoxi} alt="" className='three'/>
                  <p>261</p>
                </Link>

              </div>
            </div>
          </div>
        </div>
        <Footer />
        <div className="mask">
          <Modal
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onOk={this.handleOk}

          >
            <div className='one' style={{width:'40%',margin:'0 auto',backgroundColor:'#000',borderRadius:'50%',boxShadow:'1px 1px 15px 1px #000',marginTop:'-40%',marginBottom:'10%'}}>
              <img src={inner} alt="" className='inner'
                style={{width:'90%',margin:'5%'}}/>
            </div>
            <div className='two' style={{color:'#e0201e',marginBottom:'20%'}}>
              <p style={{margin:'0'}}>恭喜您获得今日奖励</p>
              <b style={{fontSize:'1.4em'}}>+10 <span style={{fontSize:'0.2em'}}>积分</span></b>
            </div>
            <Hammer onTap={this.handleOk} >
              <div className='three' style={{backgroundColor:'#e0201e',color:'#fff',width:'100%',position:'absolute',bottom:'0',left:'0',borderRadius:'2px',fontSize:'0.6em',lineHeight:'2',textAlign:'center'}}>
                每日登录即可获得奖励
              </div>
            </Hammer>
          </Modal>

        </div>
      </div>
    )
  }
}

export default HomePages
