import React, { Component } from 'react'

class ColorPicker extends Component {
   
    constructor(props){
        super(props);
       
        this.state={
            color: [
                { id: 1, backgroundColor: 'red'},
                { id: 2, backgroundColor: 'yellow'},
                { id: 3, backgroundColor: 'blue'},
                { id: 4, backgroundColor: 'green'}
            ],
            };
    }
  
    render(){
        let elements = this.state.color.map((color,index)=>{
            if(color.backgroundColor == this.props.defaultColor){
            return(
                <span key={index} style={{backgroundColor: color.backgroundColor, padding: '10px 20px', margin:10, cursor:'pointer',border:'3px solid black' }} onClick={() =>this.props.onChangeColor(color.backgroundColor)}></span>
            )}else{
                return(
                <span key={index} style={{backgroundColor: color.backgroundColor, padding: '10px 20px', margin:10, cursor:'pointer' }} onClick={() =>this.props.onChangeColor(color.backgroundColor)}></span>
                )}
        })
      
    return (
      
      <div className="panel panel-success">
            <div className="panel-heading">
                  <h3 className="panel-title">Panel title</h3>
            </div>
            <div className="panel-body">
                  { elements }
            </div>
      </div>
      
      
      
    );
}
}


export default ColorPicker;
