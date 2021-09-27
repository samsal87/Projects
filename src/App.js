import React from 'react'
//import Work from './component/Work'
import HeaderNav from './component/HeaderNav/HeaderNav'
import HomeInput from './component/HomeInput/HomeInput'
import 'antd/dist/antd.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { HomeScreen, HomeAbout, HomeSetting } from './component/TestMode/HomeScreen'
import Setting from './component/TestMode/Setting'
import About from './component/TestMode/About'
import GitHubApp from './component/GitHub/GitHubApp'
import GitHubApp from './GitHub/GitHubApp'
import Counter from './component/Counter/Counter'
//import HomeWork from './component/HomeWork'
import { HomeScreen } from './component/TestMode/HomeScreen'
//import CardApp from './component/CardApp'
import CardApp from './component/CardApp'


const App = () =>{
  return( 
  <Router>
    <Switch>
      <Route path = "/" exact component = {HomeScreen}/>
      <Route path = "/About" exact component = {About}/>
      <Route path = "/Setting" exact component = {Setting}/>
      <Route path = "/Github" exact component = {GitHubApp}/>
    </Switch>
  </Router>
  )
}
export default App 