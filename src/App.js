import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import ex from "./es6.test";
import { Button } from "antd";
import "antd/lib/button/style/index.css";

ex();

class App extends Component {
  state = {
    hello: 'world'
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React!!!!</h1>
        </header>
        <p className="App-intro">
          <Button type="primary">点我点我点我</Button>
          To get started, edit <code>src/App.js</code> and save to reload.
          你好，我是小鱼易连的工作人员
        </p>
      </div>
    );
  }
}

export default App;
