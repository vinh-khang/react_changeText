import React, { Component } from 'react'

class Reset extends Component {
      constructor(props){
            super(props);
            this.state={
                default: {
                    color:'red',
                    size: 12
                }
            };
        }

    render(){
    return (
      
      <div className="panel panel-info">
            <div className="panel-heading">
                  <h3 className="panel-title">Panel title</h3>
            </div>
            <div className="panel-body">
            <button type="button" className="btn btn-primary" onClick={()=>this.props.onReset(this.state.default.color, this.state.default.size)}>Reset</button>
            </div>
      </div>
      
     
      
     
      
      
      
    );
}
}


export default Reset;
