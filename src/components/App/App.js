import React, { Component } from 'react'
import './App.css'
import{
   BrowserRouter as Router
  , Route,
  Switch
} from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import HomePages from '../HomePages/HomePages'
import Homeinfo from '../Homeinfo/Homeinfo'
import HomeTalk from '../HomeTalk/HomeTalk'
import HomeTask from '../HomeTask/HomeTask'
import FindHome from '../FindHome/FindHome'
import Findinfo from '../FindAinfo/Findinfo'
import Release from '../Release/Release'
import NewsHome from '../NewsHome/NewsHome'
import Newsinfo from '../NewsAinfo/Newsinfo'
import NewsAccount from '../Newsaccount/Newsaccount'
import NewsSystem from '../NewsSystem/NewsSystem'
import MyHome from '../MyHome/MyHome'
import Myintegral from '../Myintegral/Myintegral'
import AccountCash from '../AccountCash/AccountCash'
import Accountdrawals from '../Accountdrawals/Accountdrawals'
import AcashAdd from '../AcashAdd/AcashAdd'
import AdrawalsAdd from '../AdrawalsAdd/AdrawalsAdd'
import Apayments from '../Apayments/Apayments'
import Mytask from '../Mytask/Mytask'
import MyOpinion from '../MyOpinion/MyOpinion'
import MyAboutus from '../MyAboutus/MyAboutus'
import MySettings from '../MySettings/Settings'
import MySetData from '../MySetData/MySetData'
import MyDatelse from '../MyDatelse/MyDatelse'
import MyPassword from '../MyPassword/MyPassword'
import Newproblem from '../Newproblem/Newproblem'
import Mycard from '../Mycard/Mycard'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/login' component={Login} />
            <Route path='/home/info/:id' component={Homeinfo} />
            <Route path='/home' component={HomePages} />
            <Route path='/hometalk' component={HomeTalk} />
            <Route path='/hometask' component={HomeTask} />
            <Route path='/findhome/findinfo/:id' component={Findinfo} />
            <Route path='/findhome' component={FindHome} />
            <Route path='/release' component={Release} />
            <Route path='/news/info' component={Newsinfo} />
            <Route path='/news/account/cash/add' component={AcashAdd} />
            <Route path='/news/account/cash' component={AccountCash} />
            <Route path='/news/account/drawals/add' component={AdrawalsAdd} />
            <Route path='/news/account/drawals' component={Accountdrawals} />
            <Route path='/news/account/problem' component={Newproblem} />
            <Route path='/news/account/payments' component={Apayments} />
            <Route path='/news/account' component={NewsAccount} />
            <Route path='/news/system' component={NewsSystem} />
            <Route path='/news' component={NewsHome} />
            <Route path='/myhome/card' component={Mycard} />
            <Route path='/myhome/about' component={MyAboutus} />
            <Route path='/myhome/opinion' component={MyOpinion} />
            <Route path='/myhome/setting/data/else/:id' component={MyDatelse} />
            <Route path='/myhome/setting/data' component={MySetData} />
            <Route path='/myhome/setting/password' component={MyPassword} />
            <Route path='/myhome/setting' component={MySettings} />
            <Route path='/myhome/task/:id' component={Mytask} />
            <Route path='/myhome/integral' component={Myintegral} />
            <Route path='/myhome' component={MyHome} />

          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;
