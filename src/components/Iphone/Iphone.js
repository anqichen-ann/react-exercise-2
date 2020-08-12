import React from 'react';
import Good from '../Good/Good';
import './Iphone.css';

class Iphone extends React.Component {
    render() {
        let data = this.props.iphoneList;
        let add = this.props.addCart;
        return <div className='iphone'>
            <h2>iphone</h2>
            <div className='good'>
            {
                data.map(item => 
                <Good good={item} key={item.name} add={add}></Good>
                )
            }
            </div>
        </div>
    };

}

export default Iphone;