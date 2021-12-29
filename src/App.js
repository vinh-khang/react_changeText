import React, { Component } from 'react'
import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset'
import Result from './components/Result'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      color: 'red',
      size: 12
    }
  };

  onChangeColor=(text)=>{
    this.setState({
        color: text
    })
}

onReset=(a,b)=>{
  this.setState({
    color: a,
    size: b
  })
}

onChangeSize=(text)=>{
    if(text===1 && this.state.size<32){
      this.setState({
          size: this.state.size +2
      })
    }
    if(text===2 && 8<this.state.size){
      this.setState({
        size: this.state.size -2
    })
    }
  }
    render(){
      
    return (
      
      <div className="container">

      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <ColorPicker onChangeColor={this.onChangeColor} defaultColor={this.state.color} ></ColorPicker>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <SizeSetting onChangeSize={this.onChangeSize} defaultSize={this.state.size}></SizeSetting>
          <Reset onReset={this.onReset}></Reset>
        </div>
        <Result color={this.state.color} size={this.state.size}></Result>
      </div>
              
      </div>
      
      
      
    );
}
}


export default App;
