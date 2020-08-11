import React from 'react';
import Good from '../Good/Good';
import './HUAWEI.css';

class HUAWEI extends React.Component {
    render() {
        let data = this.props.huaweiList;
        let flag = this.props.flag;
        return <div className='huawei'>
            <h2>HUAWEI</h2>
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

export default HUAWEI;