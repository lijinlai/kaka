import React, { Component } from 'react'
import './dataelse.css'
import{ Link } from 'react-router-dom'
import xiaoyu from '../images/xiaoyu.png'

class MyDatelse extends Component {

  render(){
    const { state } =this.props.location

    return(
      <div className="MyDatelse">
        <div className="header">
          <Link to='/myhome/setting/data'>
            <img src={xiaoyu} alt=""/>
          </Link>
          <p>{state.name}</p>
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="4" value='' onChange={this.handlechange} placeholder='最多输入30字...'></textarea>
        </div>
        <Link to='/myhome/setting/data'>
          <div>
            确定
          </div>
        </Link>

      </div>
    )
  }
}

export default MyDatelse
