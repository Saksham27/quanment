import React, { Component } from 'react'
import './ConversionForm.scss'
import AxiosService from './../../services/axios_service'
import config from './../../config/config'

const axios = new AxiosService();

export class ConversionForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            options: [],
            firstSelectValue: this.props.options[0],
            secondSelectValue: this.props.options[1],
            numberValue: '',
            resultValue: ''
        }
    }

    onChangeFirst = (e) => {
        let value = e.target.value;
        console.log(value);
        this.setState({ firstSelectValue: value }, () => this, this.convert())

    }
    onChangeSecond = (e) => {
        let value = e.target.value;
        console.log(value);
        this.setState({ secondSelectValue: value }, () => this.convert());

    }

    onChangeInput = (e) => {
        this.setState({ numberValue: e.target.value }, () => this.convert());
        console.log("number value:", e.target.value);

    }


    convert = async () => {

        let unitVal = `${String(this.state.firstSelectValue)}To${String(this.state.secondSelectValue)}`;
        console.log(unitVal);

        let inputValue = {
            Value: this.state.numberValue,
            OperationType: unitVal
        }

        try {
            const json = await axios.post(config.url, inputValue);
            // console.log();
            if (json.data.data[0]) {
                console.log('convertion success');
                
                this.setState({ resultValue: json.data.data[0].result });
            }else{
                this.setState({ resultValue: 0 });
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
                numberValue: '',
                resultValue: ''
            });
        }
    }
    render() {

        const value = this.props.options;
        

        return (
            <div>
                <form className='conversionForm-container'>
                    <div className='conversionForm-container--from'>
                        <label htmlFor="from">From</label>
                        <input type="number"  id="from_input" name="form_input" onChange={(event) => this.onChangeInput(event)} value={this.state.numberValue} required></input>
                        <select id="from" name="from" onChange={(event) => this.onChangeFirst(event)} className={this.props.style} value={this.state.firstSelectValue}>
                            {
                                value.map((option, index) => {

                                    return <option key={index.toString()} value={option}>{option}</option>
                                })
                            }

                        </select>
                    </div>
                    <div className='conversionForm-container--to'>
                        <label htmlFor="to">To</label>
                        <input type="number" id="from_input" name="form_input" value={this.state.resultValue} readOnly></input>
                        <select id="to" name="to" onChange={this.onChangeSecond} className={this.props.style} value={this.state.secondSelectValue}>
                            {
                                value.map((option, index) => {
                                    return <option key={index.toString()} value={option} >{option}</option>
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
