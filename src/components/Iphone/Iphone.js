import React from 'react';
import Good from '../Good/Good';
import './Iphone.css';

class Iphone extends React.Component {
    render() {
        let data = this.props.iphoneList;
        let flag = this.props.flag;
        return <div className='iphone'>
            <h2>iphone</h2>
            <div className='good'>
            {
                data.map(item => 
                <Good good={item} key={item.name} flag={flag}></Good>
                )
            }
            </div>
        </div>
    };

}

export default Iphone;