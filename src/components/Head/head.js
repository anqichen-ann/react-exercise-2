import React from 'react';
import './head.css';
import Iphone from '../Iphone/Iphone';
import HUAWEI from '../HUAWEI/HUAWEI';


class Head extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        list: [],
        flag: false
     };
     //this.getRequest();
    
}

componentDidMount(){
    const url = 'http://localhost:3000/products';
    const request = fetch(url,{method:'get'})
                .then(res=>res.json())
                .then(data=>{
                    this.setState({
                        list:data,
                        flag: true
                    })
                })
                .catch(error=>console.log(error));

}

    render() {
        return <div>
            <div className='head'>
                <h1>Store</h1>
                <img />
                <p>sum</p>
            </div>
            
            <div>
                <div className='iphone'>
                    {
                        this.state.flag?<Iphone iphoneList={this.state.list.slice(0,3)} flag = {this.state.flag}/>:null
                    }
                </div>
                <div className='huawei'>
                    {
                        this.state.flag?<HUAWEI huaweiList = {this.state.list.slice(3)} flag = {this.state.flag}/>:null
                    }
                </div>
            </div>
        </div>
    }

}

export default Head;