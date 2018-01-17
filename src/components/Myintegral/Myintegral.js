import React, { Component } from 'react'
import Hammer from 'react-hammerjs'
import './intefral.css'

class Integral extends Component {
  state={
    moneny:[10,30,50,100,200,500,1000],
    active:0,
    tel:'',
    give:['微信支付','支付宝'],
    active1:0,
    num:''
  }
  handleBack=()=>{
    this.props.history.go(-1)
  }
  handleTap=(index,item)=>{
    this.setState({
      active:index,
      num:item
    })
  }
  handleTap1=(index)=>{
    this.setState({
      active1:index
    })
  }
  handlechange= e =>{
    this.setState({
      tel:e.target.value
    })
  }

  render(){
    const amoneny=this.state.moneny.map((item,index)=>{
      return(
        <Hammer onTap={()=>this.handleTap(index,item)} key={index}  className={`c ${this.state.active===index && 'active'}`}>
          <button >
            {item}积分
          </button>
        </Hammer>
      )
    })
    const agive=this.state.give.map((item,index)=>{
      return(
        <Hammer onTap={()=>this.handleTap1(index)} key={index}  className={`c ${this.state.active1===index && 'active'}`}>
          <button >
            {item}
          </button>
        </Hammer>
      )
    })
    const nnn = (this.state.num/10).toFixed(0)
    return(
      <div className="Integral">
        <div className="header">
          <Hammer onTap={this.handleBack} >
            <span>
              取消
            </span>
          </Hammer>
          <p>积分充值</p>
        </div>
        <div className="chong">
          <p>10元=100积分</p>
          <span>选择充值金额</span>
        </div>
        <div className="moneny">
          {amoneny}
        </div>
        <div className="else">
          <p>其他：</p>
          <input type="tel" value={this.state.tel} onChange={this.handlechange}/>
          <span>积分 </span>
        </div>
        <div className='give'>
          <p>选择支付方式</p>
          {agive}
        </div>
        <div className='geiqian'>
          <p>支付金额:</p>{nnn}元
        </div>
        <Hammer onTap={this.handleBack} >
          <div className="queding">  确定 </div>
        </Hammer>
      </div>
    )
  }
}

export default Integral
