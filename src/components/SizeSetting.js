import React, { Component } from 'react'

class SizeSetting extends Component {
      constructor(props){
            super(props);
           
            this.state={
                button: [
                    { id: 1, name: 'Tăng'},
                    { id: 2, name: 'Giảm'},
                ],
                };
        }

    render(){
    let elements = this.state.button.map((button, index)=>{
      return (
            <button key={index} type="button" className="btn btn-success" style={{margin: '10px'}} onClick={()=>this.props.onChangeSize(button.id)}>{button.name}</button>  
      )

    })  
    return (
      
      <div className="panel panel-info">
            <div className="panel-heading">
                  <h3 className="panel-title">Panel title</h3>
            </div>
            <div className="panel-body">
            { elements}
            </div>
      </div>
      
     
      
      
      
    );
}
}


export default SizeSetting;
