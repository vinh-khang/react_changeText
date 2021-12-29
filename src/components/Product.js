import React, { Component } from 'react'

class Product extends Component {
    addKhang=() =>{
        alert(this.props.ten);
        console.log(this.props.ten);
      }
    render(){
      return (
           
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
               <div className="thumbnail">
                   <img data-src="#" alt="" src='https://didongviet.vn/pub/media/catalog/product/i/p/iphone-13-mini-256gb-chinh-hang-didongviet.jpg'/>
                   <div>
                       <h5>{ this.props.ten }</h5>
                       <h5>{ this.props.tuoi}</h5>
                   </div>
                   <button type="button" className="btn btn-default" onClick={this.addKhang}>button</button>
               </div>
           </div>
           
            
        
    );
}
}

export default Product;
