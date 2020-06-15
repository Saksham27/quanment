import React, { Component } from 'react'
import TopBar from '../TopBar/TopBar'
import AxiosService from './../../services/axios_service'
import config from './../../config/config'

import './History.scss'

const axios = new AxiosService();


export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            History: [],
        }
    }
    componentDidMount() {
        this.history();
    }
    
    history = () => {
        axios.getAll(config.url).then((json) => {
            this.setState({ History: json.data.data });
        }).catch((err) => {
            console.log(err);
        })
    }

    temparray=[];
    onCheck=(event,index)=>{
            this.temparray.push(Number(event.target.value));
            this.setState({isChecked:-1})    
    }

   delete=(arr)=>{
       let inputData={
           'IdForDeletion': arr
       }
       console.log(inputData);
        axios.deleteMultiple(config.url,inputData).then((json) => {
            if(json.data.success=== true){
                this.history();
            }
            this.temparray=[];

        }).catch((err) => {
            console.log(err);

        })
   }

    render() {
        return (
            <div className='home'>
                <TopBar className='home-topbar'/>
                <div className='home-header'>
                    <span className="home-header-text">Conversion History</span>
                </div>
                <div className="home-main">
                    
                    <table className="table">
                        <tr className="table-header">
                            <th>Value</th>
                            <th>Operation Type</th>
                            <th>Result</th>
                            <th className="deleteButton" onClick={()=>{this.delete(this.temparray)}}>Delete</th>
                        </tr>
                        {
                            this.state.History.map((d, index) => {
                                return <tr className="table-row">
                                    <td>{d.value}</td>
                                    <td>{d.operationType}</td>
                                    <td>{d.result}</td>
                                    <td  className="checkbox">
                                        <input type="checkbox" key={d.id.toString()} value={d.id} onClick={(event,index)=>{
                                            this.onCheck(event,index) 
                                        }}></input>
                                    </td>
                                </tr>      
                                 })     
                        }
                    </table>
                </div>
            </div>
        )
    }

}

