import React, { Component } from 'react'

class Result extends Component {

    render(){
      
    return (
     
        <div className="row">
        <span style={{color: this.props.color, fontSize: this.props.size}}>Kết quả nè</span>   
          
        </div>
    );
}
}


export default Result;
