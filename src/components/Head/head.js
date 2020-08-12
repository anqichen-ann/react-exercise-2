import React from 'react';
import './head.css';
import Iphone from '../Iphone/Iphone';
import HUAWEI from '../HUAWEI/HUAWEI';


class Head extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        list: [],
        flag: false,
        sum: 0
     };    
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

handleSum = () => {
    this.setState({
        sum: this.state.sum + 1,
    });

}

    render() {
        return <div>
            <div className='head'>
                <h1>Store</h1>
                <img />
                <p>{this.state.sum}</p>
            </div>
            
            <div>
                <div className='iphone'>
                    {
                        this.state.flag?<Iphone iphoneList={this.state.list.slice(0,3)} addCart = {this.handleSum}/>:null
                    }
                </div>
                <div className='huawei'>
                    {
                        this.state.flag?<HUAWEI huaweiList = {this.state.list.slice(3)} addCart = {this.handleSum}/>:null
                    }
                </div>
            </div>
        </div>
    }

}

export default Head;