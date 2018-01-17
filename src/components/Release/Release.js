import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import './release.css'
import {  Upload, Icon ,Modal, Button} from 'antd';
import Hammer from 'react-hammerjs'
import guaishou from '../images/guaishou.png'
import dizhi from '../images/dizhi22.png'
import fabu from '../images/fabu.png'

class Release extends Component {
  state={
    conent:'',
    text:'',
    visi: false,
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
  }
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handlechange= e =>{
    this.setState({
      conent:e.target.value
    })
  }
  handlechange1= e =>{
    this.setState({
      text:e.target.value
    })
  }
  handleChange = ({ fileList }) => this.setState({ fileList })

  handleBack=()=>{
    if(this.state.conent.length>200){
      alert('字数限制在200字以内')
    }else{
      this.props.history.go(-1)
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render(){
    const {  previewVisible, previewImage,fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
      </div>
    );
    return(
      <div className="Release">
        <div className="header">
          <Link to='/home'>
            <span>
              取消
            </span>
          </Link>
          <p>发布需求</p>
        </div>
        <div className='text'>
          <textarea cols="30" rows="4" name='hou' value={this.state.conent} onChange={this.handlechange} placeholder='请详细描述您所需要发布的具体内容，以便接受任务者更加明确的回答您所发布的要求...'>
            {this.state.conent}
          </textarea>
          <p>{this.state.conent.length}/200</p>
        </div>
        <div className='pic'>
          <div className="clearfix">
            <Upload
              action="//jsonplaceholder.typicode.com/posts/"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              {fileList.length >= 3 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
          <span>添加照片、视频</span>
        </div>
        <div className='addss'>
          <img src={dizhi} alt=""/>
          <span>武汉市 武昌区</span>
        </div>
        <div className='jifen' >
          <Button type="primary" onClick={this.showModal} style={{backgroundColor:'none',marginTop:0,top:0,left:0,position:'relative'}}>
            <p>积分<span>积分余额：200</span></p>
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            style={{ padding: '0' ,display:'block'}}
          >
            <img src={guaishou} alt="" style={{width:'50%',margin:'0 auto',display:'block'}}/>
            <div className='pie'>
              <p>发布金额</p>
              <div>
                <input type="tel" onChange={this.handleChange1} placeholder='可发布积分金额: 260'/>
                <p>发布至少需要10积分</p>
              </div>
              <Hammer onTap={this.handleOk} >
                <div>
                  <button className='i'>取消</button>
                  <button>确定</button>
                </div>
              </Hammer>
            </div>

          </Modal>

        </div>
        <div className='fabu'>
          <p> * 本次发布费用为50积分</p>
          <Hammer onTap={this.handleBack} >
            <img src={fabu} alt=""/>
          </Hammer>
          <span>发布即表示同意《随享咔咔服务发布规范》</span>
        </div>
      </div>
    )
  }
}

export default Release
