import React from 'react';
import './Good.css';

class Good extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        let item = this.props.good;
        return <div className='good'>
            <h3>{item.name}</h3>
            <img src={require('../../assets/product_image_placeholder.png')}/>
            <p>{item.price}</p>
            <button onClick={this.props.add}>add to cart</button>
        </div>
    };

}

export default Good;