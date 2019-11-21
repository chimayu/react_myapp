import React, { Component } from 'react';
import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.title = props.title;
//     this.message = props.message;
//   }
//   render(){
//     return (
//       <div>
//         <h1>{ this.title }</h1>
//         <p>{ this.message }</p>
//       </div>
//     );
//   }
// }

class App extends Component {
  data = [
    'Yutaka',
    'Yuichi',
    'Mapa'
  ]
  constructor(props){
    super(props);
    this.state = {
      list: this.data
    }
  }
  render(){
    return (
      <div>
        <h1>Show List</h1>
        <List data={this.data} />
      </div>
    )
  }
    // super();
    // this.state = {
    //   counter: 0,
    //   msg: 'Count Start',
    //   flg: true
    // }
    // this.doAction = this.doAction.bind(this);

    // this.msg = props.msg;
    // this.state = {
    //   msg : 'Hello Hello'
    // }
    // let timer = setInterval(()=>{
    //   this.setState((state)=>({
    //     msg: state.msg + "!"
    // }))
    // }, 1000);
}

class List extends Component {
  number = 1;
  render(){
    let data = this.props.data;
    return(
      <div>
        <p>リスト</p>
        <ul>
          {data.map((item)=>
          <Item value={item} number={this.number++} key={this.number}
          />)}
        </ul>
      </div>
    )
  }
}

class Item extends Component {
  render(){
    return(
      <li>
        {this.props.number}
        {this.props.value}
      </li>
    )
  }
}

  // doAction(e){
  //   this.setState((state) => ({
  //     counter : state.counter + 1,
  //     msg : 'count: ' + state.counter,
  //     flg: !state.flg
  //   }))
  //   // console.log(e);
  // }
  
  // render(){
  //   return (
  //     <div>
  //       {/*this.state.msg*/ 
  //       this.state.flg ? 
  //         <p>{this.state.msg}</p>
  //         :
  //         <p>{this.state.msg}です</p>
  //       }
  //       <button onClick={this.doAction}>Click!</button>
  //     </div>
  //   )
  // }


export default App;
