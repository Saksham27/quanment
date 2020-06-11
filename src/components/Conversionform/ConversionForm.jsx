import React, { Component, useEffect } from 'react'
import './ConversionForm.scss'
import Select from 'react-select';
import AxiosService from './../../services/axios_service'
import config from './../../config/config'

const axios = new AxiosService();




export class ConversionForm extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
             options:[],
             firstSelectValue:this.props.options[0],
             secondSelectValue:this.props.options[1],
             numberValue:0,
             resultValue:0   
        }
    }

    onChangeFirst=(e)=>{
        let value = e.target.value;
        console.log(value);
        this.setState({ firstSelectValue: value}, ()=>this,this.convert())
        
    }
    onChangeSecond=(e)=>{
        let value = e.target.value;
        console.log(value);
        this.setState({ secondSelectValue: value}, ()=>this.convert());
        
    }

    onChangeInput=(e)=>{
        this.setState({ numberValue: e.target.value }, ()=>this.convert());
        console.log("number value:", e.target.value);
        
    }


    convert=async ()=>{
        
        let unitVal = `${String(this.state.firstSelectValue)}To${String(this.state.secondSelectValue)}`;
        console.log(unitVal);
        
        let inputValue={
            Value: this.state.numberValue,
            OperationType: unitVal
        }

        try {
            const json = await axios.post(config.url, inputValue);
            console.log(json.data.data[0].result);
            if(this.state.numberValue !== 0 || this.state.numberValue !== null){
                this.setState({ resultValue: json.data.data[0].result });
            }
           
        }
        catch (err) {
            console.log(err);
        }

    }

    componentDidUpdate(prevProps) {
        if (prevProps.options !== this.props.options) {
            console.log("changed");
            
            this.setState({
                firstSelectValue: this.props.options[0],
                secondSelectValue: this.props.options[1],
                numberValue: 0,
                resultValue: 0   
            });
        }
    }
    render() {
        
       const value = this.props.options;
       const style = this.props.style;
    
        return (
            <div>
                <form class='conversionForm-container'>
                    <div class='conversionForm-container--from'>
                        <label for="from">From</label>
                        <input type="number" id="from_input" name="form_input" onChange={(event)=>this.onChangeInput(event)} value={this.state.numberValue}></input>
                        <select id="from" name="from" onChange={(event)=>this.onChangeFirst(event)} class={this.props.style} value={this.state.firstSelectValue}>
                            {
                                value.map((option,index) => {
                                   
                                    return <option value={option}>{option}</option>
                                })
                            }
                            
                        </select>
                    </div>
                    <div class='conversionForm-container--to'>
                        <label for="to">To</label>
                        <input type="number" id="from_input" name="form_input" value={this.state.resultValue}></input>
                        <select id="to" name="to" onChange={this.onChangeSecond} class={this.props.style} value={this.state.secondSelectValue}>             
                            {
                                value.map((option, index) => {
                                    return <option value={option} >{option}</option>
                                })
                            }
                        </select>
                    </div>
                </form>                
            </div>
        )
    }
}

export default ConversionForm
               