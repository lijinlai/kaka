import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import './home.css'
import Img1 from '../images/1.png'
import Img11 from '../images/11.png'
import Img111 from '../images/111.png'
import Hammer from 'react-hammerjs'
import logo from '../images/logo.png'
import dianji from '../images/dianji.png'


class Home extends Component {
  state ={
    num:0
  }
  handleSwipe=()=>{
    this.setState({
      num:this.state.num+1
    })
  }
  render(){
    const {num} =this.state
    let left = num * -100
    console.log(this.state.num);
    return(
        <Hammer onSwipeLeft={this.handleSwipe} >
          <div className="Home">
            <div className='pic' style={{marginLeft:`${left}%`}}>
              <img src={Img1} alt="1"/>
              <img src={Img11} alt="11"/>
              <img src={Img111} alt="111"/>
              <div className='Sign'>
                <img src={logo} alt="logo" className='logo'/>
                <p>随享咔咔</p>
                <p className='two'>帮你所看 随享咔咔</p>
                <Link to='/login' ><img src={dianji} alt="dian" className='dianji'/></Link>
              </div>
            </div>

          </div>
        </Hammer>
    )
  }
}

export default Home
