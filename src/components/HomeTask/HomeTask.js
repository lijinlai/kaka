import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import Hammer from 'react-hammerjs'
import './hometask.css'
import Footer from '../Footer/Footer'
import dizhi from '../images/dizhi22.png'
import { Modal} from 'antd'
// import 'antd/dist/antd.css'
import abc from '../images/gantan.png'

class HomeTask extends Component {
  state={
    text:'',
    close: true,
    sub:false
  }
  handleCheckbox=()=>{
    this.setState({
      sub:!this.state.sub
    })
    sessionStorage.ree = !this.state.sub
  }
  handleBack=()=>{
    this.props.history.go(-1)
  }
  handlechange= e =>{
    this.setState({
      text:e.target.value
    })
  }

  handleCancel = (e) => {
    this.setState({
      close:false
    })
  }
  componentDidMount() {
    if(sessionStorage.ree === 'true'){
      this.setState({
       close:false
     })
   }

  }
  render(){
    // console.log(this.props.history);
    return(
      <div className="HomeTask">
        <div className="header">
          <Hammer onTap={this.handleBack} >
            <span>
              取消
            </span>
          </Hammer>
          <p>回复任务</p>
        </div>
        <textarea cols="30" rows="10" name='hou' value={this.state.text} onChange={this.handlechange} placeholder='请详细描述发布者的问题，以便更圆满的完成任务...'>
          {this.state.text}
        </textarea>

        <div className='rss'>
          <p>当前位置</p>
          <div>
            <img src={dizhi} alt=""/>
            <span>北京市</span>
          </div>
        </div>
        <div className="renwu">
          <Link to='/homepages'>
            <div>发送</div>
          </Link>
        </div>

        <Footer />
        <div className="mask">
          <Modal  style={{hight:'100%'}}
            visible={this.state.close}
            onCancel={this.handleCancel}
          >
            <div className='tishi'>
              <img src={abc} alt=""/>
              <p>注意事项</p>
              <Hammer onTap={this.handleCancel} >
                <span>我知道了</span>
              </Hammer>

              <input type="checkbox" checked={this.state.sub} name ='sex' onChange={this.handleCheckbox}/>
              <span>不再提示</span>
            </div>
          </Modal>

        </div>
      </div>
    )
  }
}

export default HomeTask
