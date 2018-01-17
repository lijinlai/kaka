import React, { Component } from 'react'
import Hammer from 'react-hammerjs'
import xiaoyu from '../images/xiaoyu.png'
import './myopinion.css'
import { Radio} from 'antd';


class MyOpinion extends Component {
  state={
    Conent:'',
    value: 1,
  }
  handlechange=(e)=>{
    this.setState({
      Conent:e.target.value
    })
  }
 onChange = (e) => {
   console.log('radio checked', e.target.value);
   this.setState({
     value: e.target.value,
   });
 }
  handleBack=()=>{
    this.props.history.go(-1)
  }

  render(){
    const RadioGroup = Radio.Group;
    return(
      <div className="MyOpinion">
        <div className="header">
          <Hammer onTap={this.handleBack} >
            <img src={xiaoyu} alt=""/>
          </Hammer>
          <p>意见反馈</p>
        </div>
        <div className="open">
          <p>请选择反馈类型</p>
          <div>
            <p>账号问题</p>
            <div></div>
            <div>
              <div></div>
            </div>
          </div>
          <textarea name="" id="" cols="30" rows="4" value='' onChange={this.handlechange} placeholder='最多输入30字...'></textarea>
        </div>
        <div className='elseee'>
          <RadioGroup onChange={this.onChange} value={this.state.value}>
            <div>
              <p>功能反馈及其他</p>
              <Radio value={1}></Radio>
            </div>
            <div>
              <p>积分兑换问题</p>
              <Radio value={2}></Radio>
            </div>
            <div>
              <p>充值问题</p>
              <Radio value={3}></Radio>
            </div>
          </RadioGroup>
          <Hammer onTap={this.handleBack} >
            <div className="tijiao">
              提交
            </div>
          </Hammer>
        </div>

      </div>
    )
  }
}

export default MyOpinion
