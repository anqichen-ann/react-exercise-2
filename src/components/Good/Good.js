import React from 'react';
import './Good.css';

class Good extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate(nextProps){
        console.log('log  nextProps:'+nextProps.data);
        // let data = nextProps.data;
     
        // this.getUploadConsole(data.gitProjectName,data.apptypeCode);
    
    }

    render() {
        let item = this.props.good;
        return <div className='good'>
            <h3>{item.name}</h3>
            <img src={require('../../assets/product_image_placeholder.png')}/>
            <p>{item.price}</p>
            <button>add to cart</button>
        </div>
    };

}

export default Good;