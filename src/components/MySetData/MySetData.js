import React, { Component } from 'react'
import './setdata.css'
import xiaoyu from '../images/xiaoyu.png'
import tou3 from '../images/tou3.png'
import { Link } from 'react-router-dom'
import { Upload, message, Button, Icon } from 'antd';


class MySetData extends Component {
  state={
    data:[
      {
        id:'s',
        name:'昵称',
        conent:'xx、超'
      },
      {
        id:'d',
        name:'性别',
        conent:'女'
      },
      {
        id:'f',
        name:'年龄',
        conent:'22岁'
      },
      {
        id:'g',
        name:'现居地',
        conent:'北京市 朝阳区'
      },
      {
        id:'h',
        name:'个性签名',
        conent:'江湖救急，助人为乐！'
      }
    ]
  }

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }


  render(){
    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      }
    }
    const { data }=this.state
    const adata =data.map((item,id)=>{
      return(
        <Link to={{
          pathname:`/myhome/setting/data/else/${item.id}`,
          state: item
          }} key={id}>
          <div>
            <p>{item.name}
              <span>{item.conent}</span>
            </p>
            <Icon type="right" />
          </div>
        </Link>
      )
    })
    return(
      <div className="MySetData">
        <div className="header">
          <Link to='/myhome/setting'>
            <img src={xiaoyu} alt=""/>
          </Link>
          <p>修改个人资料</p>
        </div>
        <div className='tou'>
          <img src={tou3} alt=""/>
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> 点击更换头像
            </Button>
          </Upload>
        </div>
        <div className="adata">
          {adata}
        </div>
      </div>
    )
  }
}

export default MySetData
