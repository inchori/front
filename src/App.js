import React, {Component} from 'react';
import Subject from "./components/Subject";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.css';
//Link -> a href 태그와 같다고 보면됨
//Router는 Link와 Route를 묶어준다고 보면 됨

import Home from "./Home";
import About from "./About";
import AskBoard from "./pages/AskBoard";
import DiscussBoard from "./pages/DiscussBoard";
import HotIssueBoard from "./pages/HotIssueBoard";


class Search extends Component { //검색창 Component
  state = {}

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => { //복잡한 bind 하지않기위해 화살표 사용. 화살표 함수
    e.preventDefault();
    this.props.onSaveData(this.state); //저장? 에러뜸
    this.setState({});
  }
  render(){
  return(
  <form className = "searchbar" onSubmit={this.handleSubmit}>
              <input placeholder="무엇을 검색하실" name="brdtitle" onChange={this.handleChange}/>
              <button type="done">검색</button>
  </form>
    );
  }
}

class App extends Component {
  constructor(props){
        super(props);
        this.state = {
          title : "재결합"/*, subtitle : "webwebweb"*/
          /*content:[
            {id:1, title : "222", content : "euaaaaaa"},
            {id:2, title : "aaa23", content : "aaaauuuuu"},
            {id:3, title : "66666", content : "uuuuuuuuuuuuuuu"}
          ]*/
        }
    }
    componentDidMount() {
      console.log(this.context);
   }
  render(){
    console.log(this.state.content);
    return (
    <div>
      <div className = "tt">
      <Subject title = {this.state.title}>
      </Subject>
      <Search></Search>
      </div>
      <Router>
        <div className = "tt">
        <Link to="/">
          <button className = "btn1">Home</button> 
        </Link>
        &nbsp;
        <Link to="/about">
        <button className = "btn1">About</button>
        </Link>
        &nbsp;
      </div>
      <div className = "vertical">
      <br></br>
      <Link to ="/ask">
        <button className = "btn2">질문게이판</button>
      </Link>
      <br></br><br></br>
      <Link to ="/discuss">
        <button className = "btn2">투기장</button>
      </Link>
      <br></br><br></br>
      <Link to = "/hotissue">
        <button className = "btn2">핫게</button>
      </Link>
      </div>

      <hr />
     
      <main> 
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route path="/about" component={About} />
          <Route path="/ask" component={AskBoard} />
          <Route path="/discuss" component={DiscussBoard} />
          <Route path="/hotissue" component={HotIssueBoard} />
        </Switch>
      </main>
    </Router>
    </div>
    );
  }
} //index.js에서 여러개 import해서 못쓰는가...
  //component = {App} 하면 왜안될까...
export default App;

